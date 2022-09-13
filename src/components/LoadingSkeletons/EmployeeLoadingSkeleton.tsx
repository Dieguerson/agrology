import { useContext } from 'react'
import { Icon } from "@iconify/react"
import '../../styles/AgroEmployees/AgroEmployeeCard.scss'
import '../../styles/LoadingSkeletons/EmployeeLoadingSkeleton.scss'
import { AgroContext } from '../../context/AgroContext'
import { AgroContextInterface } from '../../types/interfaces'

export const EmployeeLoadingSkeleton = () => {
  const { errors } = useContext(AgroContext) as AgroContextInterface

  return (
    <>
      {
        errors
          ?
            <article className='cardWrapper loadingErrorEmployees'>
              <h2>Hubo un problema en la carga de datos.</h2>
              <p>Espere un momento y recargue la página.</p>
            </article>
          :
            <article className="cardWrapper cardLoader">
              <Icon icon="heroicons-solid:user-circle" />
              <span className="seeMore">
                <p>Ver Más</p>
                <Icon icon="heroicons-solid:arrow-right" />
              </span>
            </article>
      }
    </>
  )
}