import * as T from "../Body/style";
import { useTranslation } from 'react-i18next';

const Tab = () => {
  const { t } = useTranslation();
  
  return (
    <div style={{paddingTop: "30px"}}>
      <T.TitleTech>{t('techTitle')}</T.TitleTech>
      <T.TabHz>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/dotNet-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/reactjs-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/bootstrap-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/jquery-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/oracle-database-logo.png"} /></T.TabItem>
        <T.TabItem><T.IconTech src={process.env.PUBLIC_URL + "/icons/github-logo.png"} /></T.TabItem>
      </T.TabHz>
    </div>
  );
};

export default Tab;
