import styled, {css} from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    height:6rem;
    display:flex;
    justify-content:space-around;
    align-items: center;
    background: ${props=> props.theme.navBar};
    margin:0 auto;
    padding:30px 10px;
    @media (min-width: 900px) {
        justify-content:space-around;
    }
    @media (max-width: 610px) {
        height:12rem;
        flex-direction:column;
        justify-content:space-evenly;

    }
`


export default Nav;