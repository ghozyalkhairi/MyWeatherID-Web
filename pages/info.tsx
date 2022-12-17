import { NextPage } from "next"
import BaseLayout from "../components/layout/BaseLayout"
import { Text } from "@chakra-ui/react"
import BaseHead from "../components/shared/BaseHead"

interface Props {}

const Info: NextPage<Props> = () => {
  return (
    <>
      <BaseHead title="Info | MyWeatherID" />
      <BaseLayout>
        <Text color="brand.secondary">Info</Text>
      </BaseLayout>
    </>
  )
}

export default Info
