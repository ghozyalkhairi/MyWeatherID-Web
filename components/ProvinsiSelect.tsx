import { Select } from "@chakra-ui/react"
import { FC } from "react"
import { ProvinsiList } from "../utils/types"

interface Props {
  provinsiList: ProvinsiList
}

const ProvinsiSelect: FC<Props> = ({ provinsiList }) => {
  return (
    <Select
      color="brand.secondary"
      bgColor="brand.primary"
      bg="brand.primary"
      borderColor="brand.accent"
      iconColor="brand.accent"
    >
      {provinsiList.map((provinsi) => (
        <option
          style={{ backgroundColor: "#1C1D4B" }}
          key={provinsi.id}
          value={provinsi.id}
        >
          {provinsi.name}
        </option>
      ))}
    </Select>
  )
}

export default ProvinsiSelect
