import { FC } from "react"
import Head from "next/head"

interface Props {
  title: string
  kota?: string
  provinsi?: string
}

const BaseHead: FC<Props> = ({ title, kota, provinsi }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="keywords"
        content="Informasi Cuaca, Prakiraan Cuaca"
        key="keywords"
      />
      <meta name="author" content="Ghozy Alkhairi" key="author" />
      <meta property="og:type" content="article" key="og:type" />
      {kota ? (
        <>
          <meta
            property="og:title"
            content={`Prakiraan Cuaca ${kota} - ${provinsi} | MyWeatherID`}
            key="og:title"
          />
          <meta
            name="description"
            content={`Prakiraan Cuaca ${kota} - ${provinsi} | MyWeatherID`}
            key="description"
          />
          <meta
            property="og:description"
            content={`Prakiraan Cuaca ${kota} - ${provinsi} | MyWeatherID`}
            key="og:description"
          />
          <meta
            name="twitter:title"
            content={`Prakiraan Cuaca ${kota} - ${provinsi} | MyWeatherID`}
            key="twitter:title"
          />
          <meta
            name="twitter:description"
            content={`Prakiraan Cuaca ${kota} - ${provinsi} | MyWeatherID`}
            key="twitter:description"
          />
        </>
      ) : (
        <>
          <meta
            property="og:title"
            content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
            key="og:title"
          />
          <meta
            name="description"
            content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
            key="description"
          />
          <meta
            property="og:description"
            content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
            key="og:description"
          />
          <meta
            name="twitter:title"
            content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
            key="twitter:title"
          />
          <meta
            name="twitter:description"
            content="MyWeatherID - Cek cuaca di lokasi anda dengan mudah"
            key="twitter:description"
          />
        </>
      )}
    </Head>
  )
}

export default BaseHead
