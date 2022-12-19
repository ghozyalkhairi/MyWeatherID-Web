import { NextPage } from "next"
import Link from "next/link"
import BaseHead from "../components/shared/BaseHead"
import BaseLayout from "../components/layout/BaseLayout"
import { Text, Center, Button } from "@chakra-ui/react"
import { useUserLocation } from "../stores/cuacaStore"

const NotFound: NextPage = () => {
  const { provinsiId, kota } = useUserLocation()
  return (
    <>
      <BaseHead title="Not Found - MyWeatherID" />
      <BaseLayout notfound>
        <Center h="100vh" flexDirection="column">
          <Text fontSize={90} fontWeight="semibold" color="brand.accent">
            404
          </Text>
          <Text my={12} fontSize={28} color="brand.secondary">
            Wah.. Halaman ini tidak ditemukan
          </Text>
          <Link
            href={`/cuaca/${provinsiId}/${kota
              .replace(" ", "-")
              .toLowerCase()}`}
          >
            <Button w="36vw" py={7} fontSize={24} bgColor="brand.accent">
              <Text>Kembali ke Beranda</Text>
            </Button>
          </Link>
        </Center>
      </BaseLayout>
    </>
  )
}

export default NotFound
