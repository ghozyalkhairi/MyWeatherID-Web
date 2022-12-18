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
        <Flex h="100vh" direction="column" align="center" justify="center">
          <Image src={LogoImg} alt="Logo" width={300} height={300} />
          <VStack my={8}>
            <Text fontSize={40} fontWeight="bold" color="brand.secondary">
              MyWeatherID
            </Text>
            <Text
              fontSize={30}
              fontWeight="light"
              textAlign="center"
              color="brand.secondary"
            >
              Cek cuaca di lokasi anda dengan mudah
            </Text>
          </VStack>
          <Link href={`/cuaca/${provinsiId}/${kota.trim().toLowerCase()}`}>
            <Button w="50vw" py={7} fontSize={24} bgColor="brand.accent">
              <Text>Mulai</Text>
            </Button>
          </Link>
        </Flex>
      </BaseLayout>
    </>
  )
}

export default Home
