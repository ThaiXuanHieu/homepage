import styled from "styled-components";

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const TabHz = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TabItem = styled.div`
  flex-basis: 100%;
  margin-right: 25px;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0px;
  padding-top: 30px;
  position: relative;
`;

export const DescItem = styled.div`
  flex-basis: 100%;
`;
export const DescExp = styled(DescItem)`
  border-right: 1px solid rgb(220, 216, 244);
  padding: 0px 5px 0px 0px;
`;

export const DescProj = styled(DescItem)`
  border-right: 1px solid rgb(220, 216, 244);
  padding: 0px 5px 0px 0px;
`;

export const DescLang = styled(DescItem)``;

export const TitleTech = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: #474747;
  margin-bottom: 20px;
`;

export const IconTech = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 45px;
  object-fit: cover;
`;
