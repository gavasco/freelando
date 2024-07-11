import { Col, Row } from "react-grid-system";
import Tipografia from "../../componentes/Tipografia/Tipografia";
import { Link } from "react-router-dom";
import Botoes from "../../componentes/Botoes/Botoes";
import fotoConcluido from './assets/FotoConcluido.png'

export default function Concluido () {
    return (
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante='h1' componente='h1'> Seu perfil está completo! </Tipografia>
            <Tipografia variante='body' componente='body'> Agora é só começar a se conectar com os melhores freelancers do mercado! </Tipografia>
            <img src={fotoConcluido} alt="" />
            <Row style={{ marginTop: '16px' }}>
                <Col >
                    <Link to='/cadastro'>
                        <Botoes variante='secundario'> Voltar para a home </Botoes>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}