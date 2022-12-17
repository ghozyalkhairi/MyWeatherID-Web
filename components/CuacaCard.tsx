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
      w="40%"
      borderRadius={20}
      shadow="lg"
      mb={6}
    >
      <Flex p={4} align="center">
        <Text fontSize={22} color="brand.secondary">
          {cuaca.waktu} Ini
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize={18} color="brand.secondary">
          {formatted}
        </Text>
      </Flex>
      <Flex my={4} p={4} align="center">
        <Text fontSize={34} fontWeight="bold" color="brand.secondary">
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
        <Text ml={2} fontWeight="light" color="brand.secondary">
          {kota}, {provinsi}
        </Text>
      </Flex>
    </Flex>
  )
}

export default CuacaCard
