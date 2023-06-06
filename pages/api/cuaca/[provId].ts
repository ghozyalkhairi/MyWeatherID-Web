import { NextApiHandler } from "next"

export const getCuacaData = async (id: string) => {
  const baseUrl = "https://cuaca-json.vercel.app"
  const dataCuaca = await fetch(`${baseUrl}${getProvURL(id)}`)
  return await dataCuaca.json()
}

const handler: NextApiHandler = async (req, res) => {
  const { provId } = req.query
  const dataCuaca = await getCuacaData(provId as string)
  return res.json(dataCuaca)
}

const getProvURL = (id: string) => {
  switch (parseInt(id)) {
    case 11:
      return "/aceh"
    case 12:
      return "/sumatera-utara"
    case 13:
      return "/sumatera-barat"
    case 14:
      return "/riau"
    case 15:
      return "/jambi"
    case 16:
      return "/sumatera-selatan"
    case 17:
      return "/bengkulu"
    case 18:
      return "/lampung"
    case 19:
      return "/bangka-belitung"
    case 21:
      return "/kepulauan-riau"
    case 31:
      return "/jakarta"
    case 32:
      return "/jawa-barat"
    case 33:
      return "/jawa-tengah"
    case 34:
      return "/yogyakarta"
    case 35:
      return "/jawa-timur"
    case 36:
      return "/banten"
    case 51:
      return "/bali"
    case 52:
      return "/nusa-tenggara-barat"
    case 53:
      return "/nusa-tenggara-timur"
    case 61:
      return "/kalimantan-barat"
    case 62:
      return "/kalimantan-tengah"
    case 63:
      return "/kalimantan-selatan"
    case 64:
      return "/kalimantan-timur"
    case 65:
      return "/kalimantan-utara"
    case 71:
      return "/sulawesi-utara"
    case 72:
      return "/sulawesi-tengah"
    case 73:
      return "/sulawesi-selatan"
    case 74:
      return "/sulawesi-tenggara"
    case 75:
      return "/gorontalo"
    case 76:
      return "/sulawesi-barat"
    case 81:
      return "/maluku"
    case 82:
      return "/maluku-utara"
    case 91:
      return "/papua-barat"
    case 94:
      return "/papua"
  }
}

export default handler
