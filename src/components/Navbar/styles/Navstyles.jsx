import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    height:3.5rem;
    display:flex;
    justify-content:space-between;
    background: ${props=> props.theme.navBar};
    margin:0;
    padding:1rem;
`


export default Nav;