import { useEffect, useState } from 'react';
import { HeaderContainer, ProfilePicture, HeaderInfo, Name, Profession, HeaderNav, UnorderedList, LiElement, DownloadCVButton } from './style';

export const Header = (props) => {

  const birthDate = new Date('1998-01-04');
  const today = new Date()
  const finalAge = calculateAge(birthDate, today);

  const [selectedOption, setSelectedOption] = useState('About me');

  const handleClick = (event) => {
    const selectedOption = event.target.innerText;
    setSelectedOption(selectedOption);
    props.onMenuClick(selectedOption);
  }

  useEffect(() => {
    props.onMenuClick(selectedOption);
  }, [selectedOption, props]);

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
          <LiElement onClick={handleClick} className={selectedOption === 'About me' ? 'active' : ''}>About me</LiElement>
          <LiElement onClick={handleClick} className={selectedOption === 'Web Development' ? 'active' : ''}>Web Development</LiElement>
          <LiElement onClick={handleClick} className={selectedOption === 'Android Development' ? 'active' : ''}>Android/Kotlin Development</LiElement>
        </UnorderedList>
      </HeaderNav>
      <a href={cvUrl} download="Currículum.pdf">
        <DownloadCVButton>Download CV!</DownloadCVButton>
      </a>
    </div>
  )
}

export default Header;

function calculateAge(birthDate, today) {
  const age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  const finalAge = hasBirthdayPassed ? age : age - 1;

  return finalAge;
}
