import styled from "@emotion/styled"
import logo from './assets/LogoFooter.png'
import whats from './assets/Whatsapp 1.png'
import twich from './assets/Twitch.png'
import instagram from './assets/Instagram.png'
import twitter from './assets/Twitter.png'

const FooterEstilizado = styled.footer`
    background-color: ${props => props.theme.cores.primarias.a};
    color: ${props => props.theme.cores.branco};
    padding: ${props => props.theme.espacamentos.xl};
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Div = styled.div`
    
    div {
        display: flex;
        list-style-type: none;
        justify-content: space-between;
    }
    p{
        margin-top: 0;
    }
`

export default function Footer () {
    return (
        <FooterEstilizado>
            <div>
                <img src={logo} alt="" />
                <p> Desenvolvido por Gabriel Vasco </p>
            </div>
            <Div>
                <p> Acesse nossas redes: </p>
                <div>
                    <a>
                        <img src={whats} alt="Logo Whats" />
                    </a>
                    <a>
                        <img src={twich} alt="Logo twich" />
                    </a>
                    <a>
                        <img src={instagram} alt="Logo instagram" />
                    </a>
                    <a>
                        <img src={twitter} alt="Logo twitter" />
                    </a>
                </div>
            </Div>
        </FooterEstilizado>
    )
}