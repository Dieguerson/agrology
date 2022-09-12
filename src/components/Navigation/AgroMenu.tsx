import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'
import '../../styles/Navigation/AgroMenu.scss'
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom'
import { AgroMenuProps } from '../../types/interfaces';


export const AgroMenu = (props: AgroMenuProps) => {
  const defaultCallback = () => {console.log('No Callback Passed')}

  const { open = false, clickHandler = defaultCallback } = props

  const [hidden, setHidden] = useState('')

  useEffect(() => {
    return () => {setTimeout(() => {
      setHidden(open ? '' : 'hidden')
    }, 500)}
  }, [open])

  return (
    <CSSTransition in={open} timeout={500} classNames='transition' unmountOnExit>
      <nav className={`menuWrapper ${open ? '' : 'hidden'} ${hidden}`}>
        <ul className='menu'>
          <li>
            <NavLink to='/' className={({isActive}) => `menuItem ${isActive && 'menuItem-active'}`} onClick={clickHandler}>
              <Icon icon="heroicons-solid:home" />
              <p>Inicio</p>
              <Icon icon="heroicons-solid:chevron-right" />
            </NavLink>
          </li>
          <li>
            <NavLink end to='/employees' className={({isActive}) => `menuItem ${isActive && 'menuItem-active'}`} onClick={clickHandler}>
              <Icon icon="heroicons-solid:users" />
              <p>Empleados</p>
              <Icon icon="heroicons-solid:chevron-right" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  )
}