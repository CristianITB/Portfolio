import { HeaderContainer, ProfilePicture, HeaderInfo, Name, Profession, HeaderNav, UnorderedList, LiElement, DownloadCVButton } from './style'

export const Header = (props) => {

    const birthDate = new Date('1998-01-04');
    const today = new Date()
    let finalAge = calculateAge(birthDate, today)

    const handleClick = (event) => {
      props.onMenuClick(event.target.innerText)
    }
  
    const cvUrl = 'Currículum.pdf';

    return (
        <div>
          <HeaderContainer>
            <ProfilePicture src={process.env.PUBLIC_URL + '/portfolio_profile_picture.jpg'} alt="That's my face" />
            <HeaderInfo>
              <Name>Cristian Jiménez Gascueña, {finalAge}</Name>
              <Profession>Software Developer</Profession>
            </HeaderInfo>
          </HeaderContainer>
          <HeaderNav>
            <UnorderedList>
              <LiElement onClick={handleClick}>About me</LiElement>
              <LiElement onClick={handleClick}>Web Development</LiElement>
              <LiElement onClick={handleClick}>Android Development</LiElement>
            </UnorderedList>
          </HeaderNav>
          <a href={cvUrl} download="Currículum.pdf">
            <DownloadCVButton>Download CV!</DownloadCVButton>
          </a>
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