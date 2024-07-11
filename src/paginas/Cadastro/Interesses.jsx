import GrupoRadio from "../../componentes/RadioButton/GrupoRadio";
import Tipografia from "../../componentes/Tipografia/Tipografia";
import Botoes from "../../componentes/Botoes/Botoes";
import { Col, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";
import { useEffect } from "react";

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
]

export default function Interesses() {
    const navigate = useNavigate();
    const { usuario, setInteresse, possoSelecionarInteresse } = useCadastroUsuarioContext();

    useEffect (() => {
        if (!possoSelecionarInteresse()) {
            navigate('/cadastro')
        }
    }, [navigate, possoSelecionarInteresse])

    return (
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante='h1' componente='h1'> Crie seu cadastro </Tipografia>
            <Tipografia variante='h3' componente='h3'> Qual a área de interesse? </Tipografia>
            <GrupoRadio
                opcoes={opcoes} valor={usuario.interesse} onChange={setInteresse}
            />
            <Row style={{ marginTop: '16px' }}>
                <Col style={{ textAlign: 'left' }} lg={6} md={6} sm={6} >
                    <Link to='/cadastro'>
                        <Botoes variante='secundario'> Anterior </Botoes>
                    </Link>
                </Col>
                <Col style={{ textAlign: 'right' }} lg={6} md={6} sm={6}>
                    <Link to='/cadastro/dados-pessoais'>
                        <Botoes> Próximo </Botoes>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}