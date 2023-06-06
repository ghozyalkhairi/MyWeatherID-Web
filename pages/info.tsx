import { NextPage } from "next"
import BaseLayout from "../components/layout/BaseLayout"
import { Box, Center, Text } from "@chakra-ui/react"
import BaseHead from "../components/shared/BaseHead"
import BMKGIcon from "../assets/icons/BMKGIcon"

interface Props {}

const Info: NextPage<Props> = () => {
  return (
    <>
      <BaseHead title="Info | MyWeatherID" />
      <BaseLayout>
        <Box
          w={{
            base: "100%",
            md: "50%",
          }}
          h="65vh"
        >
          <Center
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              my={12}
              fontSize={{
                base: 20,
                md: 24,
              }}
              color="brand.secondary"
              textAlign="center"
            >
              Semua data yang digunakan aplikasi ini disediakan oleh:
            </Text>
            <BMKGIcon />
          </Center>
        </Box>
      </BaseLayout>
    </>
  )
}

export default Info
