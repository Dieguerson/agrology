import { useState } from 'react';
import { AgroHeader } from "./AgroHeader";
import { AgroMenu } from "./AgroMenu";
import '../../styles/Navigation/AgroNavCombo.scss'

export const AgroNavCombo = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleState = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <AgroHeader clickHandler={toggleState} menuState={openMenu} />
      <AgroMenu clickHandler={toggleState} open={openMenu}/>
    </>
  )
}