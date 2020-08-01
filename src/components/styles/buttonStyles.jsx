import styled from 'styled-components'


export const ButtonStyle = styled.button`
    background-color: ${props => props.theme.buttonColor};
    border: none;
    color: #E7E7CA;
    padding: 7.5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius:13px;
    margin:10px;
    cursor:pointer;
    :hover {
        background-color:#B8843F;
    }
`