import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  height: 500px;
`;

export const StyledImage = styled.div`
  width: 650px;
  height: 650px;
  display: flex;
  flex-direction: column;
  img {
    border-radius: 20px;
  }
`

export const StyledDescSection = styled.div`
  margin: 0 60px;
  display: flex;
  flex-direction: column;
`
export const StyledType = styled.div`
  font-size: 20px;
  text-align: left;
  color: #4f4f4f;
  margin-top: 10px;
`

export const StyledText = styled.div`
  font-size: 18px;
  text-align: left;
  width: 500px;
  display: flex;
  color: #4f4f4f;
  margin-top: 10px;
`

export const PriceSection = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 24px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`