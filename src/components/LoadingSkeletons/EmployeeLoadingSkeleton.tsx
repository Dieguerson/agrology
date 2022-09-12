import { useContext } from 'react'
import { Icon } from "@iconify/react"
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
            <article className='loadingErrorEmployees'>
              <h2>Hubo un problema en la carga de datos.</h2>
              <p>Espere un momento y recargue la página.</p>
            </article>
          :
            <article className="skeletonWrapper">
              <Icon icon="heroicons-solid:user-circle" />
              <span className="skeletonText">
                <p>Ver Más</p>
                <Icon icon="heroicons-solid:arrow-right" />
              </span>
            </article>
      }
    </>
  )
}