import * as LN from "../Header/style";
import { useTranslation } from "react-i18next";

const LanguageNav = () => {
  const { i18n } = useTranslation();

  return (
    <div className="lang-nav" style={style.langNav}>
      <LN.List>
        <LN.ListItem>
          <span>
            <LN.Flag
              onClick={() => {
                i18n.changeLanguage("vi");
              }}
              src={process.env.PUBLIC_URL + "/flags/vietnam.png"}
              alt="Vietnamese"
            />
          </span>
        </LN.ListItem>
        <LN.ListItem>
          <span>
            <LN.Flag
              onClick={() => {
                i18n.changeLanguage("jp");
              }}
              src={process.env.PUBLIC_URL + "/flags/japan.png"}
              alt="Japanese"
            />
          </span>
        </LN.ListItem>
        <LN.ListItem>
          <span>
            <LN.Flag
              onClick={() => {
                i18n.changeLanguage("en");
              }}
              src={process.env.PUBLIC_URL + "/flags/united-states.png"}
              alt="English"
            />
          </span>
        </LN.ListItem>
      </LN.List>
    </div>
  );
};

const style = {
  langNav: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "10px",
    padding: "5px",
    backgroundColor: "#ffffff",
    borderRadius: "5px",
  },
};

export default LanguageNav;
