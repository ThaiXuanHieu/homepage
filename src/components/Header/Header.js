import LanguageNav from "./LanguageNav";
import { HeaderNav, Avatar } from "../Header/style";
const Header = () => {
  return (
    <HeaderNav className="header">
      <div style={style.owner} className='owner'>
        <Avatar src={process.env.PUBLIC_URL + "/avatar.png"} />
        <div>
          <p style={style.fullName} className='fullName'>Thái Xuân Hiếu</p>
          <p style={style.job} className='job'>Kỹ sư phần mềm</p>
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
    left: "-20px",
  },
  owner: {
    display: "flex",
    position: "relative",
    color: "#fff",
  },
};

export default Header;
