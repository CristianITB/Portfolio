import { SideLinksContainer, UnorderedList, LiElement, AnchorElement } from './style'
import GitHubIcon from '../../SVGicons/GitHub'
import GitLabIcon from '../../SVGicons/GitLab'
import LinkedinIcon from '../../SVGicons/Linkedin'

export const SideLinks = () => {
  return(
    <SideLinksContainer>
      <UnorderedList>
        <LiElement>
          <AnchorElement href='https://github.com/CristianITB' aria-label='GitHub' target='_blank' rel='noreferrer'>
            <GitHubIcon width={30} height={30} />
          </AnchorElement>
        </LiElement>
        <LiElement>
          <AnchorElement href='https://gitlab.com/CristianITB' aria-label='GitLab' target='_blank' rel='noreferrer'>
            <GitLabIcon width={30} height={30} />
          </AnchorElement>
        </LiElement>
        <LiElement>
          <AnchorElement href='https://www.linkedin.com/in/cristian-jim%C3%A9nez-gascue%C3%B1a/' aria-label='Linkedin' target='_blank' rel='noreferrer'>
            <LinkedinIcon width={30} height={30} />
          </AnchorElement>
        </LiElement>
      </UnorderedList>
    </SideLinksContainer>
  )
}

export default SideLinks