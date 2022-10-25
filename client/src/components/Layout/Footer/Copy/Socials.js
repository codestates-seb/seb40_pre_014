import { LinkBox, SocialLI, SociallUL } from './Copy.style';
import { SocialList } from './SocialList';

const Socials = () => {
  return (
    <SociallUL>
      {SocialList.map((link, i) => {
        return (
          <SocialLI index={i} key={link.title}>
            <LinkBox to={link.to}>{link.title}</LinkBox>
          </SocialLI>
        );
      })}
    </SociallUL>
  );
};

export default Socials;
