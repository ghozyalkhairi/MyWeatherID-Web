import type { AppProps } from "next/app"
import { ChakraProvider, Portal, Progress } from "@chakra-ui/react"
import { theme } from "../theme"
import "@fontsource/poppins"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const start = () => setLoading(true)
    const end = () => setLoading(false)

    router.events.on("routeChangeStart", start)
    router.events.on("routeChangeComplete", end)
    router.events.on("routeChangeError", end)
  }, [router])
  return (
    <ChakraProvider portalZIndex={2} theme={theme}>
      {loading ? (
        <Portal>
          <Progress size="xs" isIndeterminate />
        </Portal>
      ) : null}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
