import { useEffect, useState, useRef } from 'react';
import { HeaderContainer, ProfilePicture, HeaderInfo, Name, Profession, HeaderNav, UnorderedList, LiElement, DownloadCVButton } from './style';
import DownloadOptionsBox from '../DownloadOptionsBox';

export const Header = (props) => {

  const birthDate = new Date('1998-01-04');
  const today = new Date()
  const finalAge = calculateAge(birthDate, today);

  /*--------- Handles sections clicks ----------*/
  const [selectedSectionOption, setSelectedSectionOption] = useState('About me');

  const handleSectionClick = (event) => {
    const selectedOption = event.target.innerText;
    setSelectedSectionOption(selectedOption);
    props.onMenuClick(selectedOption);
  }

  useEffect(() => {
    props.onMenuClick(selectedSectionOption);
  }, [selectedSectionOption, props]);
  /*--------------------------------------------*/


  /*-------- Handles download CV clicks --------*/
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const openDownloadOptions = (e) => {
    e.stopPropagation();
    setShowDownloadOptions(true);
  };

  const closeDownloadOptions = () => {
    setShowDownloadOptions(false);
  };

  const handleDownload = (language) => {
    const cvUrl = `Currículum_${language}.pdf`;
    window.open(cvUrl, '_blank');
    closeDownloadOptions();
  };

  const downloadOptionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (downloadOptionsRef.current && !downloadOptionsRef.current.contains(event.target)) {
        closeDownloadOptions();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [downloadOptionsRef]);
  /*--------------------------------------------*/


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
          <LiElement onClick={handleSectionClick} className={selectedSectionOption === 'About me' ? 'active' : ''}>About me</LiElement>
          <LiElement onClick={handleSectionClick} className={selectedSectionOption === 'Web Development' ? 'active' : ''}>Web Development</LiElement>
          <LiElement onClick={handleSectionClick} className={selectedSectionOption === 'Android Development' ? 'active' : ''}>Android/Kotlin Development</LiElement>
        </UnorderedList>
      </HeaderNav>
      <a href="#!" onClick={(e) => openDownloadOptions(e)}>
        <DownloadCVButton>Download CV!</DownloadCVButton>
      </a>
      {showDownloadOptions && (
        <div ref={downloadOptionsRef}>
          <DownloadOptionsBox onDownload={handleDownload} />
        </div>
      )}
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
