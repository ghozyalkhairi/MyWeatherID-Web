import { VStack } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import Navbar from "../shared/Navbar"
import { useUserLocation } from "../../stores/cuacaStore"

interface Props {
  children: ReactNode
  splash?: boolean
}

const BaseLayout: FC<Props> = ({ children, splash }) => {
  const { provinsiId, kota } = useUserLocation()
  const navItems = [
    {
      href: "/lokasi",
      label: "Lokasi",
    },
    {
      href: `/cuaca/${provinsiId}/${kota}`,
      label: "Cuaca",
    },
    {
      href: "/info",
      label: "Info",
    },
  ]
  return (
    <VStack
      maxW="100vw"
      h="100vh"
      bgGradient="linear(to-b, #11123E, #1C1D4BE5)"
    >
      {splash ? null : <Navbar navItems={navItems} />}
      <VStack w="100%" px="15%">
        {children}
      </VStack>
    </VStack>
  )
}

export default BaseLayout
