import { Flex, Spacer, Text } from "@chakra-ui/react"
import Image from "next/image"
import LocationIcon from "../assets/icons/LocationIcon"

const CuacaCard = () => {
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
          Siang Ini
        </Text>
        <Spacer />
        <Text fontWeight="light" fontSize={18} color="brand.secondary">
          Sabtu, 26 Nov
        </Text>
      </Flex>
      <Flex my={4} p={4} align="center">
        <Text fontSize={34} fontWeight="bold" color="brand.secondary">
          30
          <Text as="span" color="brand.accent">
            ºC
          </Text>
        </Text>
        <Spacer />
        <Image
          alt="Cuaca Icon"
          src="https://i.ibb.co/9VVYNQv/cerahberawan-am.png"
          width={160}
          height={160}
        />
      </Flex>
      <Flex p={4} align="center" justify="center">
        <LocationIcon width="20" height="20" />
        <Text ml={2} fontWeight="light" color="brand.secondary">
          Pontianak, Kalimantan Barat
        </Text>
      </Flex>
    </Flex>
  )
}

export default CuacaCard
