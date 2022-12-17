import { FC } from "react"
import { Center, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"

interface Props {
  cuaca: {
    waktu: string
    gambar: string
    suhu: string
  }
}

const CuacaItem: FC<Props> = ({ cuaca }) => {
  return (
    <Flex
      bgColor="brand.primary"
      direction="column"
      py={2}
      w="15%"
      borderRadius={10}
      shadow="lg"
    >
      <Text mb={3} fontSize={18} textAlign="center" color="brand.secondary">
        {cuaca.waktu}
      </Text>
      <Center>
        <Image alt="Cuaca Icon" src={cuaca.gambar} width={50} height={50} />
      </Center>
      <Text mt={3} fontSize={18} textAlign="center" color="brand.secondary">
        {cuaca.suhu}
      </Text>
    </Flex>
  )
}

export default CuacaItem
