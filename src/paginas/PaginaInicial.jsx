import { Container, Row, Col } from "react-grid-system";
import Cabecalho from "../componentes/Cabecalho/Cabecalho";
import Card from "../componentes/Card/Card";
import Estilos from "../componentes/EstilosGlobais/Estilos";
import Footer from "../componentes/Footer/Footer";
import Input from "../componentes/Input/Input";
import ProvedorTema from "../componentes/ProvedorTema/ProvedorTema";
import Tipografia from "../componentes/Tipografia/Tipografia";
import Botoes from "../componentes/Botoes/Botoes";
import ListaSuspensa from "../componentes/ListaSuspensa/ListaSuspensa";

// Ctrl + k + c (comenta todo o codigo) e Ctrl + k + u (descomenta)
const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

export default function PaginaInicial() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container style={{ margin:'80px 0'}}>
        <Row justify="center">
          <Col lg={8} md={8} sm={12}>
            <Card>
              <Tipografia variante='h1' componente='h1' > Crie seu cadastro </Tipografia>
              <Tipografia variante='body' componente='body'>
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <Input label={'Nome Completo'} />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <ListaSuspensa titulo='Estado' estadosBrasileiros={estadosBrasileiros}/>
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <Input label={'Cidade'} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input label={'E-mail'} />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Input label={'Senha'} />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <Input label={'Repita a senha'} />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botoes variante="secundario"> Anterior </Botoes>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Botoes> Próximo </Botoes>
                  </div>
                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ProvedorTema>
  );
}