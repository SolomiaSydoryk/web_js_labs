import styled from 'styled-components';

export const StyledHeader = styled.div`
    padding: 15px 0px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    table-layout: fixed;
    border-spacing: 10px;
    > div {
        display: flex;
    }
    p {
        font-size: 20px;
    }
    span {
        font-size: 24px;
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    > span {
        margin: 0 12px;
    }
`
