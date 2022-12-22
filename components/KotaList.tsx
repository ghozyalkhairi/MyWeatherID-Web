import { FC, useEffect, useState } from "react"
import useSWR from "swr"
import { useProvPickerValue } from "../stores/cuacaStore"
import ReactPaginate from "react-paginate"
import axios from "axios"
import { Center, Flex, Spinner } from "@chakra-ui/react"
import { DataProvinsi } from "../utils/types"
import KotaItem from "./KotaItem"

interface Props {}

const fetcher = (url: string) => axios.get(url).then((resp) => resp.data)

const KotaList: FC<Props> = () => {
  const provPickerValue = useProvPickerValue()
  const { data, isLoading }: { data: DataProvinsi; isLoading: boolean } =
    useSWR(`api/cuaca/${provPickerValue}`, fetcher)
  const [kotaList, setKotaList] = useState<DataProvinsi>([])
  const itemsPerPage = 9
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentList = kotaList.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(kotaList.length / itemsPerPage)
  const handlePageClick = (e: { selected: number }) => {
    const newOffset = (e.selected * itemsPerPage) % kotaList.length
    setItemOffset(newOffset)
  }
  useEffect(() => {
    if (!isLoading) {
      const dataKota: DataProvinsi = data.filter((kota) => {
        if (kota.parameter) return kota
      })
      setKotaList(dataKota)
      setItemOffset(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, provPickerValue])
  return (
    <>
      <Flex w="100%" direction="column">
        {isLoading ? (
          <Center h="60vh" py={12}>
            <Spinner color="brand.accent" size="xl" />
          </Center>
        ) : (
          currentList.map((kota) => <KotaItem key={kota.$.id} kota={kota} />)
        )}
      </Flex>
      {isLoading ? null : (
        <ReactPaginate
          containerClassName="paginationContainer"
          activeLinkClassName="active"
          breakLabel="..."
          previousLabel="<"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
        />
      )}
    </>
  )
}

export default KotaList
