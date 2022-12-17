import { Flex, Text } from "@chakra-ui/react"
import { FC } from "react"
import KotaIcon from "../assets/icons/KotaIcon"
import { DataKota } from "../utils/types"

interface Props {
  kota: DataKota
}

const KotaItem: FC<Props> = ({ kota }) => {
  return (
    <Flex
      w="100%"
      py={1}
      align="center"
      justify="center"
      borderWidth={1}
      borderColor="brand.secondary"
      borderRadius={6}
      mb={3}
      _hover={{
        cursor: "pointer",
        borderColor: "brand.accent",
        backgroundColor: "brand.other",
      }}
    >
      <KotaIcon width="24" height="24" />
      <Text ml={2} fontSize={19} color="brand.secondary">
        {kota.$.description}
      </Text>
    </Flex>
  )
}

export default KotaItem
