import React, { FC } from "react"
import { useRouter } from "next/router"
import { Flex, Spacer, Text } from "@chakra-ui/react"
import Link from "next/link"

interface NavItem {
  href: string
  label: string
}

interface Props {
  navItems: NavItem[]
}

const Navbar: FC<Props> = ({ navItems }) => {
  const { pathname } = useRouter()
  const renderNavItem = (item: NavItem, index: number) => (
    <React.Fragment key={item.href}>
      <Link href={item.href}>
        <Text
          fontSize={18}
          color={item.href === pathname ? "brand.accent" : "brand.secondary"}
        >
          {item.label}
        </Text>
      </Link>
      {index === navItems.length - 1 ? null : <Spacer />}
    </React.Fragment>
  )

  return (
    <Flex w="100vw" py={4} px="15%" bgColor="brand.other" mb={8} shadow="lg">
      <Flex w="100%">
        {navItems.map((item, index) => renderNavItem(item, index))}
      </Flex>
    </Flex>
  )
}

export default Navbar
