export interface AgroContextProps {
  children: React.ReactNode
}

export interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  employee_email: string;
  employee_phone: string;
  employee_address: string;
  profile_image: string;
  employee_shifts: string;
}

export type PartialEmployee = Partial<Employee>

export interface AgroContextInterface {
  employees: PartialEmployee[];
  employee: PartialEmployee;
  getEmployees: () => Promise<void>;
  getEmployeeById: (id: number) => Promise<void>;
  errors: boolean
}

export interface AgroHeaderProps {
  menuState: boolean;
  clickHandler?: () => void;
}

export interface LogoProps {
  className?: string;
}

export interface AgroMenuProps {
  open: boolean;
  clickHandler?: () => void;
}

export interface AgroEmployeeCardProps {
  employee: PartialEmployee;
}

export interface AgroEmployeeDataProps {
  employee: PartialEmployee;
}