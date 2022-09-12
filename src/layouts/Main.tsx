import { AgroNavCombo } from '../components/Navigation/AgroNavCombo';
import { Outlet } from 'react-router-dom'

export function Main() {

  return (
    <>
      <AgroNavCombo />
      <Outlet />
    </>
  );
}