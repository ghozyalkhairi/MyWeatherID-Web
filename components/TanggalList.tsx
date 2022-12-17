import React, { FC } from "react"
import { useCurrentDate } from "../stores/cuacaStore"
import { Flex, Spacer, Text } from "@chakra-ui/react"

interface Props {
  tanggalList: {
    formatted: string
    raw: string
  }[]
}

const TanggalList: FC<Props> = ({ tanggalList }) => {
  const currentDate = useCurrentDate()
  const renderTanggal = () => {
    return tanggalList.map((tanggal, index) => (
      <React.Fragment key={tanggal.raw}>
        <Text
          _hover={{ cursor: "pointer" }}
          fontSize={18}
          color={
            tanggal.raw === currentDate.raw ? "brand.accent" : "brand.secondary"
          }
        >
          {tanggal.formatted}
        </Text>
        {index === tanggalList.length - 1 ? null : <Spacer />}
      </React.Fragment>
    ))
  }
  return (
    <Flex w="100%" pb={2}>
      {renderTanggal()}
    </Flex>
  )
}

export default TanggalList
