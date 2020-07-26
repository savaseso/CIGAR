import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    height:5.5rem;
    display:flex;
    justify-content:space-between;
    align-items: center;
    background: ${props=> props.theme.navBar};
    margin:0 auto;
    padding:30px 10px;
`


export default Nav;