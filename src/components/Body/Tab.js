import * as T from "../Body/style";
const Tab = () => {
  return (
    <T.TabHz>
      <T.TabItem style={style.active}>Giới thiệu</T.TabItem>
      <T.TabItem>Công nghệ</T.TabItem>
      <T.TabItem>Dự án</T.TabItem>
      <T.TabItem>Liên hệ</T.TabItem>
    </T.TabHz>
  );
};
const style = {
  active: {
    color: "#15283A",
  },
};

export default Tab;
