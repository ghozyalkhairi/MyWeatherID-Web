import React, { FC } from "react"
import { Flex, Spacer } from "@chakra-ui/react"
import CuacaItem from "./CuacaItem"
import { useCuacaListCopy } from "../stores/cuacaStore"

interface Props {
  cuacaList: {
    waktu: string
    gambar: string
    suhu: string
  }[]
}

const CuacaMini: FC<Props> = ({ cuacaList }) => {
  const cuacaListCopy = useCuacaListCopy()
  const data = cuacaListCopy.length ? cuacaListCopy : cuacaList
  return (
    <Flex
      pt={2}
      w={
        data.length < 3
          ? {
              base: "100%",
              md: "50%",
            }
          : "100%"
      }
      direction={{
        base: "column",
        md: "row",
      }}
      gap={{
        base: 2,
        md: 4,
      }}
    >
      {data.map((cuaca, index) => (
        <React.Fragment key={cuaca.waktu}>
          <CuacaItem cuaca={cuaca} small={data.length < 3} />
          {index === data.length - 1 ? null : <Spacer />}
        </React.Fragment>
      ))}
    </Flex>
  )
}

export default CuacaMini
