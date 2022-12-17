import { Flex, Spacer, Text } from "@chakra-ui/react"
import { FC } from "react"

interface Props {}

const TanggalList: FC<Props> = () => {
  return (
    <Flex w="100%">
      <Text fontSize={18} color="brand.secondary">
        25 November
      </Text>
      <Spacer />
      <Text fontSize={18} color="brand.secondary">
        26 November
      </Text>
      <Spacer />
      <Text fontSize={18} color="brand.secondary">
        27 November
      </Text>
    </Flex>
  )
}

export default TanggalList
