import { createContext } from "react";
import { useGetEmployees } from "../hooks/useGetEmployees";
import { AgroContextInterface, AgroContextProps } from "../types/interfaces";

export const AgroContext = createContext<AgroContextInterface | null>(null);

export const AgroProvider = (props: AgroContextProps) => {

  const { employees, employee, getEmployees, getEmployeeById, errors } = useGetEmployees()

  return (
    <AgroContext.Provider
      value={{ employees, employee, getEmployees, getEmployeeById, errors }}
    >
      {props.children}
    </AgroContext.Provider>
  )
}