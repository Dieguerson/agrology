import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
import '../../styles/Navigation/AgroHeader.scss'
import { AgroHeaderProps } from '../../types/interfaces';
import { AgroLogo } from './AgroLogo';



export const AgroHeader = (props: AgroHeaderProps) => {
  const defaultCallback = () => {console.log('No Callback Passed')}

  const { clickHandler = defaultCallback, menuState = false } = props

  return (
    <>
      <header>
        <nav className='agroNav'>
          <section className='navSection'>
            <div className='dynamicIcon' onClick={clickHandler}>
              <Icon className='menuIcon' icon="heroicons-solid:menu-alt-1" />
              <Icon className={`arrowIcon ${menuState ? 'rotate' : ''}`} icon="heroicons-solid:chevron-right" />
            </div>
            <NavLink to='/' className='homeLink'>Inicio</NavLink>
          </section>
          <AgroLogo className='agroLogo' />
          <section className='userSection'>
            <Icon icon="heroicons-solid:user" />
            <p>User</p>
          </section>
        </nav>
      </header>
    </>
  )
}