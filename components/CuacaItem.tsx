import { FC } from "react"
import { Center, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"

interface Props {
  cuaca: {
    waktu: string
    gambar: string
    suhu: string
  }
  small?: boolean
}

const CuacaItem: FC<Props> = ({ cuaca, small }) => {
  return (
    <Flex
      bgColor="brand.primary"
      direction="column"
      py={2}
      w={
        small
          ? {
              base: "100%",
              md: "30%",
            }
          : {
              base: "100%",
              md: "15%",
            }
      }
      borderRadius={10}
      shadow="lg"
    >
      <Text mb={3} fontSize={20} textAlign="center" color="brand.secondary">
        {cuaca.waktu}
      </Text>
      <Center>
        <Image alt="Cuaca Icon" src={cuaca.gambar} width={50} height={50} />
      </Center>
      <Text mt={3} fontSize={18} textAlign="center" color="brand.secondary">
        {cuaca.suhu} ºC
      </Text>
    </Flex>
  )
}

export default CuacaItem
