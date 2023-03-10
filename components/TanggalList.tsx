import React, { FC } from "react"
import { useCuacaActions, useDatePickerValue } from "../stores/cuacaStore"
import { Flex, Spacer, Text } from "@chakra-ui/react"

interface Props {
  tanggalList: {
    formatted: string
    raw: string
  }[]
}

const TanggalList: FC<Props> = ({ tanggalList }) => {
  const datePickerValue = useDatePickerValue()
  const { onDateChange, setDatePickerValue } = useCuacaActions()
  const handleDateChange = (date: string) => {
    setDatePickerValue(date)
    onDateChange(date)
  }
  const renderTanggal = () => {
    return tanggalList.map((tanggal, index) => (
      <React.Fragment key={tanggal.raw}>
        <Flex onClick={() => handleDateChange(tanggal.raw)}>
          <Text
            _hover={{ cursor: "pointer" }}
            fontSize={18}
            color={
              tanggal.raw === datePickerValue
                ? "brand.accent"
                : "brand.secondary"
            }
          >
            {tanggal.formatted}
          </Text>
        </Flex>
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
