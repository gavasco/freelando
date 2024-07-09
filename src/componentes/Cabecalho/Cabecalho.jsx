import styled from "@emotion/styled"
import logo from './assets/LogoFreelando.png'

const Header = styled.header`
    background-color: ${props => props.theme.cores.primarias.a};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 120px;
    a {
        text-decoration: none;
        color: ${props => props.theme.cores.neutras.c};
        font-size: 20px;
        &:hover {
            color: ${props => props.theme.cores.dark.a};
        }
    }
`

export default function Cabecalho () {
    return (
        <Header>
            <img src={logo} alt="Logo Freelando" />
            <a href="#"> Login </a>
        </Header>
    )
}