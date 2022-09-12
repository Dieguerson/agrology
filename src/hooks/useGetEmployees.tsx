import { useState } from 'react';
import { PartialEmployee } from '../types/interfaces';

export const useGetEmployees = () => {
  const [employees, setEmployees] = useState<PartialEmployee[]>([])
  const [employee, setEmployee] = useState<PartialEmployee>({})
  const [errors, setError] = useState(false)

  const getEmployees = async () => {
    try {
      const fetchEmployees = await fetch('https://dummy.restapiexample.com/api/v1/employees')
      const formatEmployees = await fetchEmployees.json()
      const employeesArray: PartialEmployee[] = formatEmployees.data
      setEmployees(employeesArray)
      setError(false)
    } catch(error) {
      setError(true)
    }
  }

  const getEmployeeById = async (id: number) => {
    try {
      const fetchEmployee = await fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      const formatEmployee = await fetchEmployee.json()
      const employeeData: PartialEmployee = formatEmployee.data
      setEmployee(employeeData)
      setError(false)
    } catch(error) {
      setError(true)
    }
  }

  return {
    employees,
    employee,
    getEmployees,
    getEmployeeById,
    errors
  }
}