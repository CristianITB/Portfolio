import { DownloadBoxContainer, LanguageButton, LanguageFlag, CancelButton } from './style';

export const DownloadOptionsBox = ({ onClose, onDownload }) => {
    return (
      <DownloadBoxContainer>
          <LanguageButton onClick={() => onDownload('eng')}>
            <LanguageFlag src={process.env.PUBLIC_URL + '/unitedKingdomFlag.png'} alt="United Kingdom's flag" />
            Download CV
          </LanguageButton>
          <LanguageButton onClick={() => onDownload('esp')}>
            <LanguageFlag src={process.env.PUBLIC_URL + '/spainFlag.png'} alt="Spain's flag" />
            Descargar CV
          </LanguageButton>
      </DownloadBoxContainer>
    );
  };

export default DownloadOptionsBox