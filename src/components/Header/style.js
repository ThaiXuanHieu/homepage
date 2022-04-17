import styled from "styled-components";

export const HeaderNav = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  max-width: 90%;
  margin: 0 auto;
  padding: 60px 0px
`;

export const Avatar = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 100px;
  height: 100px;
  border-radius: 50%
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: inline-block;
  padding-top: 5px;
  &:after {
    content: "";
    border-right: 1px solid #BEBAD6;
    height: 20px;
    position: absolute;
  }
  &:last-child:after {
    content: "";
    border: 0
  }
`;

export const Flag = styled.img`
  width: 20px;
  margin: 0px 5px;
`;

