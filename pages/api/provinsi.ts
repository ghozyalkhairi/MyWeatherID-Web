import { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
  const provinsiData = await fetch("https://provinsi-json.vercel.app/")
  const jsonProvinsi = await provinsiData.json()
  return res.json({
    provinsi: jsonProvinsi,
  })
}

export default handler
