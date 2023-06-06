import { useEffect } from "react"
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
import { useCuacaActions } from "../../../stores/cuacaStore"
import { getCuacaData } from "../../api/cuaca/[provId]"
import BaseLayout from "../../../components/layout/BaseLayout"
import BaseHead from "../../../components/shared/BaseHead"
import CuacaCard from "../../../components/CuacaCard"
import TanggalList from "../../../components/TanggalList"
import CuacaMini from "../../../components/CuacaMini"
import { ParsedUrlQuery } from "querystring"
import { DataCuaca, DataProvinsi } from "../../../utils/types"
import imgPath from "../../../utils/imageUrl"
import { format, parseISO } from "date-fns"
import { formatInTimeZone } from "date-fns-tz"
import { id } from "date-fns/locale"
import getZonaWaktu from "../../../utils/zonaWaktu"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Cuaca: NextPage<Props> = ({
  cuacaList,
  tanggalList,
  lokasi,
  dataCuacaFull,
  currentForecast,
}) => {
  const { kota, provinsi } = lokasi
  const { setDataCuaca } = useCuacaActions()
  useEffect(() => {
    setDataCuaca(dataCuacaFull)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <BaseHead
        title={`Prakiraan Cuaca ${kota} - ${provinsi} | MyWeatherID`}
        kota={kota}
        provinsi={provinsi}
      />
      <BaseLayout>
        <CuacaCard cuaca={currentForecast} />
        <TanggalList tanggalList={tanggalList} />
        <CuacaMini cuacaList={cuacaList} />
      </BaseLayout>
    </>
  )
}

interface ServerSideProps {
  cuacaList: {
    waktu: string
    suhu: string
    gambar: string
  }[]
  tanggalList: {
    formatted: string
    raw: string
  }[]
  dataCuacaFull: {
    cuacaKota: DataCuaca
    suhuKota: DataCuaca
  }
  lokasi: {
    kota: string
    provinsi: string
    provinsiId: string
  }
  currentForecast: {
    waktu: string
    suhu: string
    gambar: string
  }
}

interface ParamsQuery extends ParsedUrlQuery {
  provId: string
  kota: string
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  try {
    const currentDate = format(new Date(), "yyyyMMdd")
    const { provId, kota } = context.params as ParamsQuery
    const dataCuaca: DataProvinsi = await getCuacaData(provId)
    const dataKota = dataCuaca.filter((item) => item.parameter)
    const kotaUser = dataKota.find(
      (item) =>
        item.$.description.replace(" ", "").toLowerCase() ===
        kota.replace("-", "")
    )?.$.description as string
    const provinsiUser = dataKota.find(
      (item) =>
        item.$.description.replace(" ", "").toLowerCase() ===
        kota.replace("-", "")
    )?.$.domain as string
    const currentTime = formatInTimeZone(
      new Date(),
      getZonaWaktu(provinsiUser),
      "kkmm"
    )
    const cuacaKota = dataKota.find(
      (item) =>
        item.$.description.replace(" ", "").toLowerCase() ===
        kota.replace("-", "")
    )?.parameter[6] as DataCuaca
    const suhuKota = dataKota.find(
      (item) =>
        item.$.description.replace(" ", "").toLowerCase() ===
        kota.replace("-", "")
    )?.parameter[5] as DataCuaca
    const cuacaSuhuList = {
      cuaca: cuacaKota.timerange.filter(
        (time) => time.$.datetime.slice(0, -4) === currentDate
      ),
      suhu: suhuKota.timerange.filter(
        (time) => time.$.datetime.slice(0, -4) === currentDate
      ),
    }
    const ketWaktu = (index: number) => {
      if (index === 0) return "Pagi"
      if (index === 1) return "Siang"
      if (index === 2) return "Malam"
      if (index === 3) return "Dini"
    }
    const listData = cuacaSuhuList.suhu.map((suhu, index) => {
      return {
        waktu: ketWaktu(index) as string,
        suhu: suhu.value[0]._,
        gambar: imgPath(cuacaSuhuList.cuaca[index].value[0]._, index) as string,
      }
    })
    const timestamp = parseInt(currentTime.slice(0, 2))
    const currentForecast = () => {
      if (timestamp >= 24 || timestamp < 6) return listData[3]
      if (timestamp >= 6 && timestamp < 12) return listData[0]
      if (timestamp >= 12 && timestamp < 18) return listData[1]
      if (timestamp >= 18 && timestamp < 24) return listData[2]
    }

    const detailHari = (tgl: string) =>
      format(parseISO(tgl), "EEEE", { locale: id })
    const detailTanggal = (tgl: string) =>
      format(parseISO(tgl), "dd MMMM", { locale: id })
    const [timerange] = dataKota.map((k) => k.parameter[6].timerange)
    const newTime = timerange.map((time) => {
      return {
        formatted: `${detailHari(
          time.$.datetime.slice(0, -4)
        )}, ${detailTanggal(time.$.datetime.slice(0, -4))}`,
        raw: time.$.datetime.slice(0, -4),
      }
    })
    const listTanggal: { formatted: string; raw: string }[] = [
      ...new Map(newTime.map((time) => [time.raw, time])).values(),
    ]

    return {
      props: {
        cuacaList: listData,
        tanggalList: listTanggal,
        dataCuacaFull: {
          cuacaKota,
          suhuKota,
        },
        lokasi: {
          kota: kotaUser,
          provinsi: provinsiUser,
          provinsiId: provId,
        },
        currentForecast: currentForecast() as {
          waktu: string
          suhu: string
          gambar: string
        },
      },
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default Cuaca
