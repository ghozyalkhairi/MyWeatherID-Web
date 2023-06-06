const getZonaWaktu = (provinsi: string) => {
  const WIB = [
    "Aceh",
    "Sumatera Utara",
    "Sumatera Barat",
    "Riau",
    "Kep. Riau",
    "Kep. Bangka Belitung",
    "Jambi",
    "Bengkulu",
    "Sumatera Selatan",
    "Lampung",
    "Banten",
    "DKI Jakarta",
    "Jawa Barat",
    "Jawa Tengah",
    "DI Yogyakarta",
    "Jawa Timur",
    "Kalimantan Barat",
    "Kalimantan Tengah",
  ]
  const WITA = [
    "Kalimantan Selatan",
    "Kalimantan Timur",
    "Kalimantan Utara",
    "Bali",
    "Nusa Tenggara Barat",
    "Nusa Tenggara Timur",
    "Sulawesi Utara",
    "Gorontalo",
    "Sulawesi Tengah",
    "Sulawesi Barat",
    "Sulawesi Selatan",
    "Sulawesi Tenggara",
  ]
  const WIT = ["Maluku", "Maluku Utara", "Papua", "Papua Barat"]
  switch (true) {
    case WIB.includes(provinsi):
      return "Asia/Jakarta"
    case WITA.includes(provinsi):
      return "Asia/Makassar"
    case WIT.includes(provinsi):
      return "Asia/Jayapura"
    default:
      return "Asia/Jakarta"
  }
}

export default getZonaWaktu
