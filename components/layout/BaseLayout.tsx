import { VStack } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import Navbar from "../shared/Navbar"
import { useUserLocation } from "../../stores/cuacaStore"
import Footer from "../shared/Footer"

interface Props {
  children: ReactNode
  splash?: boolean
  notfound?: boolean
}

const BaseLayout: FC<Props> = ({ children, splash, notfound }) => {
  const { provinsiId, kota } = useUserLocation()
  const navItems = [
    {
      href: "/lokasi",
      label: "Lokasi",
    },
    {
      href: `/cuaca/${provinsiId}/${kota.replace(" ", "-").toLowerCase()}`,
      label: "Cuaca",
    },
    {
      href: "/info",
      label: "Info",
    },
  ]
  return (
    <VStack w="100%" h="100%" bgGradient="linear(to-b, #11123E, #1C1D4BE5)">
      {splash || notfound ? null : <Navbar navItems={navItems} />}
      <VStack
        w="100%"
        px={{
          base: "6%",
          md: "12%",
        }}
        h="100%"
      >
        {children}
        <Footer />
      </VStack>
    </VStack>
  )
}

export default BaseLayout
