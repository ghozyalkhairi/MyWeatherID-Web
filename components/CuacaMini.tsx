import React, { FC } from "react"
import { Flex, Spacer } from "@chakra-ui/react"
import CuacaItem from "./CuacaItem"

interface Props {
  cuacaList: {
    waktu: string
    gambar: string
    suhu: string
  }[]
}

const CuacaMini: FC<Props> = ({ cuacaList }) => {
  return (
    <Flex pt={2} w="100%">
      {cuacaList.map((cuaca, index) => (
        <React.Fragment key={cuaca.waktu}>
          <CuacaItem cuaca={cuaca} />
          {index === cuacaList.length - 1 ? null : <Spacer />}
        </React.Fragment>
      ))}
    </Flex>
  )
}

export default CuacaMini
