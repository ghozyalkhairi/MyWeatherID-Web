import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"
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
import { id } from "date-fns/locale"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Cuaca: NextPage<Props> = ({ cuacaList, tanggalList }) => {
  return (
    <>
      <BaseHead title="Cuaca | MyWeatherID" />
      <BaseLayout>
        <CuacaCard cuaca={cuacaList[0]} />
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
}

interface IServerProps extends ParsedUrlQuery {
  provId: string
  kota: string
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = async (
  context
) => {
  const currentDate = format(new Date(), "yyyyMMdd")
  const { provId, kota } = context.params as IServerProps
  const dataCuaca: DataProvinsi = await getCuacaData(provId)
  const dataKota = dataCuaca.filter((item) => item.parameter)
  const cuacaKota = dataKota.find(
    (item) => item.$.description.trim() === kota.trim()
  )?.parameter[6] as DataCuaca
  const suhuKota = dataKota.find(
    (item) => item.$.description.trim() === kota.trim()
  )?.parameter[5] as DataCuaca
  const filteredCuaca = cuacaKota.timerange.filter(
    (time) => time.$.datetime.slice(0, -4) === currentDate
  )
  const filteredSuhu = suhuKota.timerange.filter(
    (time) => time.$.datetime.slice(0, -4) === currentDate
  )
  const cuacaSuhuList = {
    cuaca: filteredCuaca,
    suhu: filteredSuhu,
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

  const detailHari = (tgl: string) =>
    format(parseISO(tgl), "EEEE", { locale: id })
  const detailTanggal = (tgl: string) =>
    format(parseISO(tgl), "dd MMMM", { locale: id })
  const [timerange] = dataKota.map((k) => k.parameter[6].timerange)
  const newTime = timerange.map((time) => {
    return {
      formatted: `${detailHari(time.$.datetime.slice(0, -4))}, ${detailTanggal(
        time.$.datetime.slice(0, -4)
      )}`,
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
    },
  }
}

export default Cuaca
