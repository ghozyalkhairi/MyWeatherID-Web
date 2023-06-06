import { Box, Text } from "@chakra-ui/react"
import { FC } from "react"

const Footer: FC = () => {
  return (
    <Box w="100%" py={6}>
      <Text color="white" textAlign="center">
        MyWeatherID © 2023
      </Text>
      <Text color="white" textAlign="center">
        Made with ❤️ by Ghozy Alkhairi
      </Text>
    </Box>
  )
}

export default Footer
