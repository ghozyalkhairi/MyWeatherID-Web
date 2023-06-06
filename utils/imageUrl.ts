const imgPath = (kodeCuaca: string, idx: number) => {
  const cerahAM = "https://i.ibb.co/9nW55J9/cerah-am.png"
  const cerahPM = "https://i.ibb.co/1Mw6T2N/cerah-pm.png"
  const cerahBerawanAM = "https://i.ibb.co/9VVYNQv/cerahberawan-am.png"
  const cerahberawanPM = "https://i.ibb.co/2KyzhfJ/cerahberawan-pm.png"
  const berawan = "https://i.ibb.co/DQ1jhd4/berawan.png"
  const berawanTebal = "https://i.ibb.co/HnN0Tq3/berawan-tebal.png"
  const asap = "https://i.ibb.co/mCXMjgG/asap.png"
  const kabutAM = "https://i.ibb.co/7V2TyfS/kabut-am.png"
  const kabutPM = "https://i.ibb.co/vPk5bjh/kabut-pm.png"
  const hujanRingan = "https://i.ibb.co/s2ZYgm1/hujan-ringan.png"
  const hujanSedang = "https://i.ibb.co/XJjDH65/hujan-sedang.png"
  const hujanLebat = "https://i.ibb.co/bmgjspB/hujan-lebat.png"
  const hujanLokalAM = "https://i.ibb.co/jL3jRy7/hujanlokal-am.png"
  const hujanLokalPM = "https://i.ibb.co/DwQXvwZ/hujanlokal-pm.png"
  const hujanPetir = "https://i.ibb.co/FgRVqN1/hujan-petir.png"

  switch (kodeCuaca) {
    case "0":
      if (idx <= 1) return cerahAM
      return cerahPM
    case "1":
      if (idx <= 1) return cerahBerawanAM
      return cerahberawanPM
    case "2":
      if (idx <= 1) return cerahBerawanAM
      return cerahberawanPM
    case "3":
      return berawan
    case "4":
      return berawanTebal
    case "5":
      return asap
    case "10":
      return asap
    case "45":
      if (idx <= 1) return kabutAM
      return kabutPM
    case "60":
      return hujanRingan
    case "61":
      return hujanSedang
    case "63":
      return hujanLebat
    case "80":
      if (idx <= 1) return hujanLokalAM
      return hujanLokalPM
    case "95":
      return hujanPetir
    case "97":
      return hujanPetir
  }
}

export default imgPath
