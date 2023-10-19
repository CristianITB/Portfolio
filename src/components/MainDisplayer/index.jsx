import Header from '../Header'
import { useState } from 'react'
import AboutMe from '../AboutMe'
import WebDevelopment from '../WebDevelopment'
import AndroidDevelopment from '../AndroidDevelopment'

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
    case 'Android Development':
      ComponentToRender = <AndroidDevelopment />
      break
    default:
      ComponentToRender = null
  }

  return (
    <div>
      <Header onMenuClick={handleMenuClick} />
      {ComponentToRender}
    </div>
  )
}

export default MainDisplayer
