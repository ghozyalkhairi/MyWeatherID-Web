import { NextPage, InferGetStaticPropsType, GetStaticProps } from "next"
import BaseHead from "../components/shared/BaseHead"
import BaseLayout from "../components/layout/BaseLayout"
import ProvinsiSelect from "../components/ProvinsiSelect"
import { ProvinsiList } from "../utils/types"
import KotaList from "../components/KotaList"

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Lokasi: NextPage<Props> = ({ provinsiList }) => {
  return (
    <>
      <BaseHead title="Lokasi | MyWeatherID" />
      <BaseLayout>
        <ProvinsiSelect provinsiList={provinsiList} />
        <KotaList />
      </BaseLayout>
    </>
  )
}

interface StaticProps {
  provinsiList: ProvinsiList
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const provinsiData = await fetch("https://provinsi-json.vercel.app/")
  const jsonProvinsi = await provinsiData.json()
  return {
    props: {
      provinsiList: jsonProvinsi,
    },
  }
}

export default Lokasi
