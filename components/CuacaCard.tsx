import { FC } from "react"
import { Flex, Spacer, Text } from "@chakra-ui/react"
import { useUserLocation, useCurrentDate } from "../stores/cuacaStore"
import Image from "next/image"
import LocationIcon from "../assets/icons/LocationIcon"

interface Props {
  cuaca: {
    waktu: string
    suhu: string
    gambar: string
  }
}

const CuacaCard: FC<Props> = ({ cuaca }) => {
  const { kota, provinsi } = useUserLocation()
  const { formatted } = useCurrentDate()
  return (
    <Flex
      direction="column"
      bgColor="brand.primary"
      w={{
        base: "100%",
        md: "40%",
      }}
      borderRadius={20}
      shadow="lg"
      mb={6}
    >
      <Flex p={4} align="center">
        <Text
          as="h1"
          fontSize={{
            base: 18,
            md: 21,
          }}
          color="brand.secondary"
        >
          Cuaca {cuaca.waktu} Ini
        </Text>
        <Spacer />
        <Text
          fontWeight="light"
          fontSize={{
            base: 16,
            md: 18,
          }}
          color="brand.secondary"
        >
          {formatted}
        </Text>
      </Flex>
      <Flex my={4} p={4} align="center">
        <Text
          fontSize={{
            base: 28,
            md: 34,
          }}
          fontWeight="bold"
          color="brand.secondary"
        >
          {cuaca.suhu}
          <Text as="span" color="brand.accent">
            ºC
          </Text>
        </Text>
        <Spacer />
        <Image alt="Cuaca Icon" src={cuaca.gambar} width={140} height={140} />
      </Flex>
      <Flex p={4} align="center" justify="center">
        <LocationIcon width="20" height="20" />
        <Text as="h2" ml={2} fontWeight="light" color="brand.secondary">
          {kota}, {provinsi}
        </Text>
      </Flex>
    </Flex>
  )
}

export default CuacaCard
