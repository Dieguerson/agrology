import { useEffect, useState, useContext } from 'react'
import { useParams } from "react-router-dom"
import { AgroEmployeeData } from "../components/AgroEmployees/AgroEmployeeData"
import { EmployeeDataSkeleton } from '../components/LoadingSkeletons/EmployeeDataSkeleton'
import { AgroContext } from '../context/AgroContext'
import '../styles/Routes/Employee.scss'
import { AgroContextInterface } from '../types/interfaces'


export const Employee = () => {
  const params = useParams()
  const { id }: {id?: number} = params
  const [loading, setLoading] = useState(false)

  const { employee, getEmployeeById, errors } = useContext(AgroContext) as AgroContextInterface

  useEffect(() => {
    getEmployeeById(id as number)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (errors) {
      setLoading(true)
    } else {
      const keysLength: number = Object.keys(employee).length
      setLoading(keysLength === 0 ? true : false)
    }
  }, [employee, errors])

  return (
    <section className='employeeSection'>
      {
        loading
          ?
            <EmployeeDataSkeleton />
          :
            <AgroEmployeeData employee={employee} />
      }
    </section>
  )
}