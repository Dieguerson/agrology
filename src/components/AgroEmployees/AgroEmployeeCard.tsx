import { Icon } from "@iconify/react"
import '../../styles/AgroEmployees/AgroEmployeeCard.scss'
import { AgroEmployeeCardProps } from "../../types/interfaces"

const colorRandomizer = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const AgroEmployeeCard = (props: AgroEmployeeCardProps) => {
  const { employee } = props

  return (
    <article className="cardWrapper">
      <Icon icon="heroicons-solid:user-circle" style={{'color':colorRandomizer()}}/>
      <h3>{employee.employee_name}</h3>
      <a href={`/employees/${employee.id}`} className="seeMore">
        <p>Ver Más</p>
        <Icon icon="heroicons-solid:arrow-right" />
      </a>
    </article>
  )
}