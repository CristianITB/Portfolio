import { HeaderContainer, ProfilePicture, HeaderInfo, UnorderedList, LiElement } from './styles'

export const Header = (props) => {

    const birthDate = new Date('1998-01-04');
    const today = new Date()
    let finalAge = calculateAge(birthDate, today)

    const handleClick = (event) => {
      props.onMenuClick(event.target.innerText)
    }
  
    return (
        <div>
          <HeaderContainer>
            <ProfilePicture src={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} alt="That's my face" />
            <HeaderInfo>
              <h1>Cristian Jiménez Gascueña, {finalAge}</h1>
              <p>Software Developer</p>
            </HeaderInfo>
          </HeaderContainer>
          <nav>
            <UnorderedList>
              <LiElement onClick={handleClick}>About me</LiElement>
              <LiElement onClick={handleClick}>Web Development</LiElement>
              <LiElement onClick={handleClick}>Android Development</LiElement>
            </UnorderedList>
          </nav>
        </div>
    )
  }
  
  export default Header
  
  function calculateAge(birthDate, today){
    const age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    const finalAge = hasBirthdayPassed ? age : age - 1;
    
    return finalAge
  }