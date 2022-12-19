export interface Provinsi {
  name: string
  id: string
}

export type ProvinsiList = Provinsi[]

export interface DataCuaca {
  $: {
    id: string
  }
  timerange: {
    $: {
      datetime: string
      h: string
    }
    value: {
      _: string
    }[]
  }[]
}

export interface DataKota {
  $: {
    id: string
    description: string
    domain: string
  }
  parameter: DataCuaca[]
}

export type DataProvinsi = DataKota[]

export interface CuacaKota {
  waktu: string
  gambar: string
  suhu: string
}

export type CuacaKotaList = CuacaKota[]
