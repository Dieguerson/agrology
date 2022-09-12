import { useEffect, useContext } from 'react'
import { Icon } from "@iconify/react"
import '../../styles/LoadingSkeletons/EmployeeDataSkeleton.scss'
import { AgroContext } from '../../context/AgroContext'
import { AgroContextInterface } from '../../types/interfaces'

export const EmployeeDataSkeleton = () => {
  const { errors } = useContext(AgroContext) as AgroContextInterface

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <>
      {
        errors 
          ?
            <article className='loadingError'>
              <h2>Hubo un problema en la carga de datos.</h2>
              <p>Espere un momento y recargue la página.</p>
            </article>
          :
            <article className="dataSkeletonWrapper">
              <section className="presentation">
                <Icon icon="heroicons-solid:user-circle" />
              </section>
              <section className="personal">
                <h3>Información Personal</h3>
                <p><b>Edad:</b></p>
                <p><b>Email:</b></p>
                <p><b>Teléfono:</b></p>
                <p><b>Dirección:</b></p>
              </section>
              <section className="working">
                <h3>Información Laboral</h3>
                <p><b>Número de Legajo:</b></p>
                <p><b>Salario:</b></p>
                <p><b>Horarios:</b></p>
              </section>
            </article>
      }
    </>
  )
}