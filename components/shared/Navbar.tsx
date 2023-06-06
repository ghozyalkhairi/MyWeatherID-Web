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
  const currentPath = (item: NavItem) => {
    switch (true) {
      case item.href === pathname:
        return true
      default:
        if (
          item.href.includes("/cuaca/") &&
          pathname === "/cuaca/[provId]/[kota]"
        ) {
          return true
        }
        return false
    }
  }
  const renderNavItem = (item: NavItem, index: number) => {
    return (
      <React.Fragment key={item.href}>
        <Link href={item.href}>
          <Text
            fontSize={{
              base: 17,
              md: 18,
            }}
            color={currentPath(item) ? "brand.accent" : "brand.secondary"}
          >
            {item.label}
          </Text>
        </Link>
        {index === navItems.length - 1 ? null : <Spacer />}
      </React.Fragment>
    )
  }

  return (
    <Flex
      w="100%"
      py={4}
      px={{
        base: "6%",
        md: "15%",
      }}
      bgColor="brand.other"
      mb={8}
      shadow="lg"
    >
      <Flex w="100%">
        {navItems.map((item, index) => renderNavItem(item, index))}
      </Flex>
    </Flex>
  )
}

export default Navbar
