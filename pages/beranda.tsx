import { NextPage } from "next"
import BaseLayout from "../components/layout/BaseLayout"
import BaseHead from "../components/shared/BaseHead"
import CuacaCard from "../components/CuacaCard"
import TanggalList from "../components/TanggalList"

interface Props {}

const Beranda: NextPage<Props> = () => {
  return (
    <>
      <BaseHead title="Beranda | MyWeatherID" />
      <BaseLayout>
        <CuacaCard />
        <TanggalList />
      </BaseLayout>
    </>
  )
}

export default Beranda
