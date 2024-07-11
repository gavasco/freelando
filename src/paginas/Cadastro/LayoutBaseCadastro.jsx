import { Col, Row } from "react-grid-system";
import Card from "../../componentes/Card/Card";
import { Outlet } from "react-router-dom";
import CadastroUsuarioProvider from "../../contexto/CadastroUsuario";


export default function LayoutBaseCadastro() {
    return (
        <CadastroUsuarioProvider>
            <Row justify="center">
                <Col lg={6} md={8} sm={12} style={{ padding: '0' }}>
                    <Card>
                        <Outlet />
                    </Card>
                </Col>
            </Row>
        </CadastroUsuarioProvider>
    )
}