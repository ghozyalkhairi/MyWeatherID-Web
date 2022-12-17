import { NextPage } from "next"
import BaseHead from "../components/shared/BaseHead"
import BaseLayout from "../components/layout/BaseLayout"
import { Text } from "@chakra-ui/react"

interface Props {}

const Lokasi: NextPage<Props> = () => {
  return (
    <>
      <BaseHead title="Lokasi | MyWeatherID" />
      <BaseLayout>
        <Text color="brand.secondary">Lokasi Page</Text>
      </BaseLayout>
    </>
  )
}

export default Lokasi
