import LanguageNav from "./LanguageNav";
import { HeaderNav } from "../Header/style";
const Header = () => {
  return (
    <HeaderNav className="header">
      <div>
        <span style={style.hi}>Xin chào, </span>
        <span style={style.owner}>Hiếu!</span>
      </div>
      <LanguageNav />
    </HeaderNav>
  );
};

const style = {
  hi: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#fff"
  },
  owner: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#fff",
  },
};

export default Header;
