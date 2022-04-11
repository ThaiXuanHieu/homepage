import * as LN from "../Header/style";

const LanguageNav = () => {
  return (
    <div>
      <LN.List>
        <LN.ListItem>
          <a href="/">
            <LN.Flag
              src={process.env.PUBLIC_URL + "/flags/VietNam.png"}
              alt="Vietnamese"
            />
          </a>
        </LN.ListItem>
        <LN.ListItem>
          <a href="/">
            <LN.Flag
              src={process.env.PUBLIC_URL + "/flags/Japan.png"}
              alt="Japanese"
            />
          </a>
        </LN.ListItem>
        <LN.ListItem>
          <a href="/">
            <LN.Flag
              src={process.env.PUBLIC_URL + "/flags/USA.png"}
              alt="English"
            />
          </a>
        </LN.ListItem>
      </LN.List>
    </div>
  );
};

export default LanguageNav;
