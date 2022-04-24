import LanguageNav from "./LanguageNav";
import { HeaderNav, Avatar } from "../Header/style";
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderNav className="header">
      <div style={style.owner} className='owner'>
        <Avatar src={process.env.PUBLIC_URL + "/avatar.png"} />
        <div>
          <p style={style.fullName} className='fullName'>{t('fullName')}</p>
          <p style={style.job} className='job'>{t('job')}</p>
        </div>
      </div>
      <LanguageNav />
    </HeaderNav>
  );
};

const style = {
  fullName: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#fff",
    margin: "0",
    position: "relative",
    top: "30px",
    left: "10px"
  },
  job: {
    position: "relative",
    margin: "0px",
    top: "30px",
    left: "5px",
  },
  owner: {
    display: "flex",
    position: "relative",
    color: "#fff",
  },
};

export default Header;
