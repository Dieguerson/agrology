import { useEffect, useContext } from 'react';
import { AgroEmployeeCard } from '../components/AgroEmployees/AgroEmployeeCard';
import '../styles/Routes/Employees.scss'
import { EmployeeLoadingSkeleton } from '../components/LoadingSkeletons/EmployeeLoadingSkeleton';
import { AgroContext } from '../context/AgroContext';
import { AgroContextInterface } from '../types/interfaces';

export function Employees() {
  const { employees, getEmployees } = useContext(AgroContext) as AgroContextInterface

  useEffect(() => {
    (async () => {
      await getEmployees()
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='employeesWrapper'>
      {
        employees.length === 0 
          ?
            <EmployeeLoadingSkeleton />
          :
            employees.map((employee: any, i: number) => {
              return <AgroEmployeeCard employee={employee} key={i} />
            })
      }
    </section>
  );
}