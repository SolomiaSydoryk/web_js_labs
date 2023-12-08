import styled from 'styled-components';


export const ImageStyled = styled.img `
  width: 400px;
  border-radius: 25px;
`

export const Content = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: 8%;
  margin-right: 8%;
`

export const CountButton = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-size: 17px;
    padding: 20px;
  }
`

export const HorizontalLine = styled.hr`
  width: 100%;
  border-bottom: none;
  border-top: 2px solid #e1e1e1;
  margin-bottom: 30px;
`;

export const CartButtonStyled = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const PriceSection = styled.div `
  display: flex;
  flex-direction: row;
  margin-left: ${props => (props.hasItems ? '15%' : '0')};
  margin-bottom: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  button{
    background: transparent;
  }

  button:hover {
    color: #c9490e !important;
    border-color: #c9490e !important;
  }
`