import create from "zustand"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import { DataCuaca } from "../utils/types"
import imgPath from "../utils/imageUrl"

interface CuacaState {
  userLocation: {
    kota: string
    provinsi: string
    provinsiId: string
  }
  dataCuaca: {
    cuacaKota: DataCuaca | never[]
    suhuKota: DataCuaca | never[]
  }
  cuacaListCopy: {
    waktu: string
    suhu: string
    gambar: string
  }[]
  provPickerValue: string
  loading: boolean
  currentDate: {
    formatted: string
    raw: string
  }
  datePickerValue: string
  actions: {
    onLocationChange: (location: {
      kota: string
      provinsi: string
      provinsiId: string
    }) => void
    onDateChange: (date: string) => void
    setLoading: (loading: boolean) => void
    setProvPickerValue: (id: string) => void
    setDataCuaca: (data: { cuacaKota: DataCuaca; suhuKota: DataCuaca }) => void
    setDatePickerValue: (date: string) => void
    resetDataCuaca: () => void
  }
}

const useCuacaStore = create<CuacaState>((set, get) => ({
  userLocation: {
    kota: "Pontianak",
    provinsi: "Kalimantan Barat",
    provinsiId: "61",
  },
  dataCuaca: {
    cuacaKota: [],
    suhuKota: [],
  },
  cuacaListCopy: [],
  provPickerValue: "61",
  loading: false,
  currentDate: {
    formatted: format(new Date(), "EEEE, dd MMM", { locale: id }),
    raw: format(new Date(), "yyyyMMdd"),
  },
  datePickerValue: format(new Date(), "yyyyMMdd"),
  actions: {
    onLocationChange: (location) => {
      const currentDate = get().currentDate.raw
      set({
        userLocation: location,
        datePickerValue: currentDate,
        cuacaListCopy: [],
      })
    },
    setDataCuaca: (dataCuaca) => set({ dataCuaca }),
    onDateChange: (date) => {
      const cuacaKota = get().dataCuaca.cuacaKota as DataCuaca
      const suhuKota = get().dataCuaca.suhuKota as DataCuaca
      const filteredCuaca = cuacaKota.timerange.filter(
        (time) => time.$.datetime.slice(0, -4) === date
      )
      const filteredSuhu = suhuKota.timerange.filter(
        (time) => time.$.datetime.slice(0, -4) === date
      )
      const cuacaSuhuList = {
        cuaca: filteredCuaca,
        suhu: filteredSuhu,
      }
      const ketWaktu = (index: number) => {
        if (index === 0) return "Pagi"
        if (index === 1) return "Siang"
        if (index === 2) return "Malam"
        if (index === 3) return "Dini"
      }
      const listData = cuacaSuhuList.suhu.map((suhu, index) => {
        return {
          waktu: ketWaktu(index) as string,
          suhu: suhu.value[0]._,
          gambar: imgPath(
            cuacaSuhuList.cuaca[index].value[0]._,
            index
          ) as string,
        }
      })
      set({ cuacaListCopy: listData })
    },
    setLoading: (loading) => set({ loading }),
    setProvPickerValue: (id) => set({ provPickerValue: id }),
    setDatePickerValue: (datePickerValue) => set({ datePickerValue }),
    resetDataCuaca: () => {
      const currentDate = get().currentDate.raw
      set({ datePickerValue: currentDate, cuacaListCopy: [] })
    },
  },
}))

export const useUserLocation = () =>
  useCuacaStore((state) => state.userLocation)
export const useProvPickerValue = () =>
  useCuacaStore((state) => state.provPickerValue)
export const useLoading = () => useCuacaStore((state) => state.loading)
export const useCurrentDate = () => useCuacaStore((state) => state.currentDate)
export const useDatePickerValue = () =>
  useCuacaStore((state) => state.datePickerValue)
export const useCuacaListCopy = () =>
  useCuacaStore((state) => state.cuacaListCopy)
export const useCuacaActions = () => useCuacaStore((state) => state.actions)
