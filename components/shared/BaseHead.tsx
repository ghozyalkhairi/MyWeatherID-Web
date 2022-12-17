import { FC } from "react"
import Head from "next/head"

interface Props {
  title: string
}

const BaseHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="author" content="Ghozy Alkhairi" key="author" />
      <meta
        name="description"
        content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
        key="description"
      />
      <meta property="og:type" content="article" />
      <meta
        property="og:title"
        content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
        key="og:title"
      />
      <meta
        property="og:description"
        content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
        key="og:description"
      />
    </Head>
  )
}

export default BaseHead
