import { NextPage } from "next"
import BaseLayout from "../components/layout/BaseLayout"
import { Text } from "@chakra-ui/react"
import BaseHead from "../components/shared/BaseHead"
import BMKGIcon from "../assets/icons/BMKGIcon"

interface Props {}

const Info: NextPage<Props> = () => {
  return (
    <>
      <BaseHead title="Info | MyWeatherID" />
      <BaseLayout>
        <Text my={12} fontSize={24} color="brand.secondary">
          Semua data yang digunakan aplikasi ini disediakan oleh:
        </Text>
        <BMKGIcon />
      </BaseLayout>
    </>
  )
}

export default Info
