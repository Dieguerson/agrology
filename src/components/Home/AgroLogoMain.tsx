import { LogoProps } from "../../types/interfaces"

export const AgroLogoMain = (props: LogoProps) => {
  const { className = '' } = props

  return (
    <img src={require("../../assets/agrologyBig.png")} alt="Agrology" className={className} />
  )
}