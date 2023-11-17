import styled from "styled-components";

export const LinkingWrapper = styled.div`
  .nav {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5%;
    height: 75px;
  }

  .nav-element {
    display: flex;
    padding: 5px 5px 5px 5px;
    justify-content: center;
    font-weight: bold;
    margin: 10px 40px;
    font-size: 22px;
  }

  a {
    color: #c9490e;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      color: #590303;
    }
  }

  .nav-element a.active {
    color: #590303;
  }
`;
