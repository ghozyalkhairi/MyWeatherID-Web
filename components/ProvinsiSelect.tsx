import { Select } from "@chakra-ui/react"
import { FC } from "react"
import { ProvinsiList } from "../utils/types"
import { useCuacaActions, useProvPickerValue } from "../stores/cuacaStore"

interface Props {
  provinsiList: ProvinsiList
}

const ProvinsiSelect: FC<Props> = ({ provinsiList }) => {
  const provPickerValue = useProvPickerValue()
  const { setProvPickerValue } = useCuacaActions()
  return (
    <Select
      color="brand.secondary"
      bgColor="brand.primary"
      bg="brand.primary"
      borderColor="brand.accent"
      iconColor="brand.accent"
      fontSize={17}
      mb={2}
      value={provPickerValue}
      onChange={(e) => setProvPickerValue(e.target.value)}
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
