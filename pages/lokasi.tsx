import { GetServerSideProps, NextPage, InferGetServerSidePropsType } from "next"
import BaseHead from "../components/shared/BaseHead"
import BaseLayout from "../components/layout/BaseLayout"
import ProvinsiSelect from "../components/ProvinsiSelect"
import { ProvinsiList } from "../utils/types"

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const Lokasi: NextPage<Props> = ({ provinsiList }) => {
  return (
    <>
      <BaseHead title="Lokasi | MyWeatherID" />
      <BaseLayout>
        <ProvinsiSelect provinsiList={provinsiList} />
      </BaseLayout>
    </>
  )
}

interface ServerProps {
  provinsiList: ProvinsiList
}

export const getServerSideProps: GetServerSideProps<ServerProps> = async () => {
  const provinsiData = await fetch("https://provinsi-json.vercel.app/")
  const jsonProvinsi = await provinsiData.json()
  return {
    props: {
      provinsiList: jsonProvinsi,
    },
  }
}

export default Lokasi
