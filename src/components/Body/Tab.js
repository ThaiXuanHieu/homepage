import * as T from "../Body/style";
const Tab = () => {
  return (
    <div style={{paddingTop: "30px"}}>
      <T.TitleTech>Công nghệ</T.TitleTech>
      <T.TabHz>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/csharp-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/html-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/css-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/javascript-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/dotNet-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/bootstrap-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/jquery-logo.png"} /></T.TabItem>
      </T.TabHz>
    </div>
  );
};

export default Tab;
