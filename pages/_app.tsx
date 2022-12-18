import type { AppProps } from "next/app"
import { ChakraProvider, Portal, Progress } from "@chakra-ui/react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useLoading, useCuacaActions } from "../stores/cuacaStore"
import { theme } from "../theme"
import "../styles/globals.css"
import "@fontsource/poppins"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const loading = useLoading()
  const { setLoading, resetDataCuaca } = useCuacaActions()
  useEffect(() => {
    const start = () => setLoading(true)
    const end = () => {
      resetDataCuaca()
      setLoading(false)
    }
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
