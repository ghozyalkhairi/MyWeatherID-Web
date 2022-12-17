import { NextPage } from "next"
import BaseLayout from "../components/layout/BaseLayout"
import BaseHead from "../components/shared/BaseHead"
import CuacaCard from "../components/CuacaCard"
import TanggalList from "../components/TanggalList"
import CuacaMini from "../components/CuacaMini"

interface Props {}

const Beranda: NextPage<Props> = () => {
  const cuacaList = [
    {
      waktu: "Pagi",
      gambar: "https://i.ibb.co/9VVYNQv/cerahberawan-am.png",
      suhu: "26ºC",
    },
    {
      waktu: "Siang",
      gambar: "https://i.ibb.co/9VVYNQv/cerahberawan-am.png",
      suhu: "32ºC",
    },
    {
      waktu: "Malam",
      gambar: "https://i.ibb.co/9VVYNQv/cerahberawan-am.png",
      suhu: "18ºC",
    },
    {
      waktu: "Dini",
      gambar: "https://i.ibb.co/9VVYNQv/cerahberawan-am.png",
      suhu: "20ºC",
    },
  ]
  return (
    <>
      <BaseHead title="Beranda | MyWeatherID" />
      <BaseLayout>
        <CuacaCard />
        <TanggalList />
        <CuacaMini cuacaList={cuacaList} />
      </BaseLayout>
    </>
  )
}

export default Beranda
