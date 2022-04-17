import * as S from "../Body/style";
import Tab from "./Tab";
const Body = () => {
  return (
    <div style={style.section}>
      <S.Container>
        <S.Desc className="description">
          <S.DescExp className="exp" style={style.sepa}>
            <div>
              <div style={style.diH}>1+</div>
              <div style={style.diB}>Năm KN</div>
            </div>
          </S.DescExp>
          <S.DescProj className="project" style={style.sepa}>
            <div>
              <div style={style.diH}>3+</div>
              <div style={style.diB}>Dự án</div>
            </div>
          </S.DescProj>
          <S.DescLang className="lang">
            <div>
              <div style={style.diH}>2+</div>
              <div style={style.diB}>Ngôn ngữ</div>
            </div>
          </S.DescLang>
        </S.Desc>
        <Tab />
      </S.Container>
    </div>
  );
};

const style = {
  section: {
    backgroundColor: "#ffffff",
    height: "100vh",
    borderRadius: "45px 45px 0px 0px",
  },

  diH: {
    fontSize: "25px",
    color: "#887DC1",
    fontWeight: "bold",
  },

  diB: {
    color: "#dcd8f4",
  },

  sepa: {
    
  },
};

export default Body;
