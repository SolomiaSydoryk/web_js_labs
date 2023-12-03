import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    text-align: center;
    p { 
        color: #8E8E93;
        text-align: center;
        font-weight: 200;
    }
    h1 {
        margin-top: 10px;
        margin-right: 25px;
    }
    span { 
        margin: 0 10px;
    }
`;

export const IconsWrapper = styled.div`
    margin: 10px 0;
`;

export const IconBase = styled(Icon)`
    font-size: 26px;
    color: ${({color}) => color};
`;

export const HorizontalLine = styled.hr`
    width: 80%;
    border-bottom: none;
    border-top: 1px solid #d6d4d4;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledText = styled.p`
    margin-top: 15px;
    margin-bottom: 40px;
`
