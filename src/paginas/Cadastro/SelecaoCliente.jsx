import { Col, Row } from "react-grid-system";
import Tipografia from "../../componentes/Tipografia/Tipografia";
import fotoCliente from './assets/ClienteVermelho.png'
import fotoFreela from './assets/FreelaVerde.png'
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";

const LinkEstilizado = styled(Link)`
    color: ${props => props.theme.cores.primarias.b};
    text-decoration: none;
    &:hover {
        font-weight: bold;
    }
`
const LinkCadastro = styled(Link)`
    text-decoration: none;
`

export default function SelecaoCliente() {
    const { setPerfil } = useCadastroUsuarioContext();

    return (
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante='h1' componente='h1' > Crie seu cadastro </Tipografia>
            <Tipografia variante='h3' componente='h2' > Como podemos te ajudar? </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                <LinkCadastro to='interesses' onClick={() => setPerfil('cliente')}>
                    <img src={fotoCliente} alt="" />
                    <Tipografia variante='body' componente='body' > 
                        Sou <span style={{ fontWeight: 'bold', color:'#D93114' }}>cliente</span> e preciso de um freela! 
                    </Tipografia>
                </LinkCadastro>
                </Col>
                <Col md={6} sm={12}>
                    <img src={fotoFreela} alt="" />
                    <Tipografia variante='body' componente='body' > 
                        Sou um <span style={{ fontWeight: 'bold', color:'#007e3f' }}>freela</span> e preciso de clientes! 
                    </Tipografia>
                </Col>
            </Row>
            <p style={{ margin: '16px 0px 4px 0px' }}> Já tem conta? </p>
            <LinkEstilizado> Faça Login! </LinkEstilizado>
        </div>
    )
}