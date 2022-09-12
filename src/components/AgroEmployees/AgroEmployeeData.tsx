import { Icon } from "@iconify/react";
import '../../styles/AgroEmployees/AgroEmployeeData.scss'
import { AgroEmployeeDataProps } from "../../types/interfaces";


export const AgroEmployeeData = (props: AgroEmployeeDataProps) => {
  const { employee = {} } = props

  return (
    <article className="employeeWrapper">
      <section className="presentation">
        <h2>{employee.employee_name}</h2>
        {
          employee.profile_image
            ?
              <img src={require(`${employee.profile_image}`)} alt={`${employee.employee_name}`} />
            :
              <Icon icon="heroicons-solid:user-circle" />
        }
      </section>
      <section className="personal">
        <h3>Información Personal</h3>
        <p><b>Edad:</b> {employee.employee_age} años</p>
        <p><b>Email:</b> {employee.employee_email || 'Sin Asignar'}</p>
        <p><b>Teléfono:</b> {employee.employee_phone || 'Sin Asignar'}</p>
        <p><b>Dirección:</b> {employee.employee_address || 'Sin Asignar'}</p>
      </section>
      <section className="working">
        <h3>Información Laboral</h3>
        <p><b>Número de Legajo:</b> {employee.id}</p>
        <p><b>Salario:</b> $ {employee.employee_salary}</p>
        <p><b>Horarios:</b> {employee.employee_shifts || 'Sin Asignar'}</p>
      </section>
    </article>
  )
}