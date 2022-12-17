import { FC } from "react"

interface Props {
  width: string
  height: string
  fill?: string
}

const KotaIcon: FC<Props> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.75 13.75V6.25L15 2.5L11.25 6.25V8.75H3.75V26.25H26.25V13.75H18.75ZM8.75 23.75H6.25V21.25H8.75V23.75ZM8.75 18.75H6.25V16.25H8.75V18.75ZM8.75 13.75H6.25V11.25H8.75V13.75ZM16.25 23.75H13.75V21.25H16.25V23.75ZM16.25 18.75H13.75V16.25H16.25V18.75ZM16.25 13.75H13.75V11.25H16.25V13.75ZM16.25 8.75H13.75V6.25H16.25V8.75ZM23.75 23.75H21.25V21.25H23.75V23.75ZM23.75 18.75H21.25V16.25H23.75V18.75Z"
        fill={fill}
      />
    </svg>
  )
}

KotaIcon.defaultProps = {
  width: "30",
  height: "30",
  fill: "#FED059",
}

export default KotaIcon
