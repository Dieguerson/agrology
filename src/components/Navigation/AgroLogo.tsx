import { Link } from "react-router-dom";
import { LogoProps } from "../../types/interfaces";

export const AgroLogo = (props: LogoProps) => {
  const { className = '' } = props

  return (
    <Link to='/agrology' >
      <img src={require("../../assets/agrology.png")} alt="Agrology" className={className} />
    </Link>
  )
}