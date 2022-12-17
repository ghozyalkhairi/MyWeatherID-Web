import create from "zustand"
import { format, parseISO } from "date-fns"
import { id } from "date-fns/locale"

interface CuacaState {
  userLocation: {
    kota: string
    provinsi: string
    provinsiId: string
  }
  provPickerValue: string
  loading: boolean
  currentDate: {
    formatted: string
    raw: string
  }
  actions: {
    onLocationChange: (location: {
      kota: string
      provinsi: string
      provinsiId: string
    }) => void
    setLoading: (loading: boolean) => void
    setProvPickerValue: (id: string) => void
  }
}

const useCuacaStore = create<CuacaState>((set, get) => ({
  userLocation: {
    kota: "Pontianak",
    provinsi: "Kalimantan Barat",
    provinsiId: "61",
  },
  provPickerValue: "61",
  loading: false,
  currentDate: {
    formatted: format(new Date(), "EEEE, dd MMM", { locale: id }),
    raw: format(new Date(), "yyyyMMdd"),
  },
  actions: {
    onLocationChange: (location) => set({ userLocation: location }),
    setLoading: (loading) => set({ loading }),
    setProvPickerValue: (id) => set({ provPickerValue: id }),
  },
}))

export const useUserLocation = () =>
  useCuacaStore((state) => state.userLocation)
export const useProvPickerValue = () =>
  useCuacaStore((state) => state.provPickerValue)
export const useLoading = () => useCuacaStore((state) => state.loading)
export const useCurrentDate = () => useCuacaStore((state) => state.currentDate)
export const useCuacaActions = () => useCuacaStore((state) => state.actions)
