import { useState } from 'react'

import Header from '../Header'
import AboutMe from '../AboutMe'
import WebDevelopment from '../WebDevelopment'
import AndroidDevelopment from '../AndroidDevelopment'
import SideLinks from '../SideLinks'
import SideMail from '../SideMail'

export const MainDisplayer = () => {
  const [selectedMenuOption, setSelectedMenuOption] = useState('')
  let ComponentToRender

  const handleMenuClick = (menuOption) => {
    setSelectedMenuOption(menuOption)
  }

  switch (selectedMenuOption) {
    case 'About me':
      ComponentToRender = <AboutMe />
      break
    case 'Web Development':
      ComponentToRender = <WebDevelopment />
      break
    case 'Android/Kotlin Development':
      ComponentToRender = <AndroidDevelopment />
      break
    default:
      ComponentToRender = null
  }

  return (
    <div>
      <Header onMenuClick={handleMenuClick} />
      {ComponentToRender}
      <SideLinks />
      <SideMail />
    </div>
  )
}

export default MainDisplayer
