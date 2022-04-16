import * as LN from "../Header/style";

const LanguageNav = () => {
  return (
    <div className="lang-nav" style={style.langNav}>
      <LN.List>
        <LN.ListItem>
          <a href="/">
            <LN.Flag
              src={process.env.PUBLIC_URL + "/flags/vietnam.png"}
              alt="Vietnamese"
            />
          </a>
        </LN.ListItem>
        <LN.ListItem>
          <a href="/">
            <LN.Flag
              src={process.env.PUBLIC_URL + "/flags/japan.png"}
              alt="Japanese"
            />
          </a>
        </LN.ListItem>
        <LN.ListItem>
          <a href="/">
            <LN.Flag
              src={process.env.PUBLIC_URL + "/flags/united-states.png"}
              alt="English"
            />
          </a>
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
    borderRadius: "5px"
  }
}

export default LanguageNav;
