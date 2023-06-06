import { NextPage } from "next"
import { Button, Flex, Text, VStack } from "@chakra-ui/react"
import Image from "next/image"
import LogoImg from "../assets/images/Logo.png"
import BaseLayout from "../components/layout/BaseLayout"
import Link from "next/link"
import BaseHead from "../components/shared/BaseHead"
import { useUserLocation } from "../stores/cuacaStore"

interface Props {}

const Home: NextPage<Props> = () => {
  const { provinsiId, kota } = useUserLocation()
  return (
    <>
      <BaseHead title="MyWeatherID" />
      <BaseLayout splash>
        <Flex
          w="100%"
          h="100vh"
          direction="column"
          align="center"
          justify="center"
        >
          <Image src={LogoImg} alt="Logo" width={225} height={225} />
          <VStack my={8}>
            <Text
              as="h1"
              fontSize={{
                base: 40,
                md: 50,
              }}
              fontWeight="bold"
              color="brand.secondary"
            >
              MyWeatherID
            </Text>
            <Text
              as="h2"
              fontSize={{
                base: 20,
                md: 30,
              }}
              fontWeight="light"
              textAlign="center"
              color="brand.secondary"
            >
              Cek cuaca di lokasi anda dengan mudah
            </Text>
          </VStack>
          <Link href={`/cuaca/${provinsiId}/${kota.trim().toLowerCase()}`}>
            <Button
              w={{
                base: "70vw",
                md: "60vw",
              }}
              py={{
                base: 7,
                md: 8,
              }}
              fontSize={{
                base: 20,
                md: 25,
              }}
              bgColor="brand.accent"
            >
              <Text>Mulai</Text>
            </Button>
          </Link>
        </Flex>
      </BaseLayout>
    </>
  )
}

export default Home
