import { Col, Row } from "react-grid-system";
import Card from "../../componentes/Card/Card";
import Tipografia from "../../componentes/Tipografia/Tipografia";
import ListaSuspensa from "../../componentes/ListaSuspensa/ListaSuspensa";
import Input from "../../componentes/Input/Input";
import { Link } from "react-router-dom";
import Botoes from "../../componentes/Botoes/Botoes";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";

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

export default function DadosPessoais() {
  const { usuario, setNomeCompleto, setCidade, setUf, setEmail, setSenha, setSenhaConfirmada, 
    submeterUsuario } = useCadastroUsuarioContext();

  function finalizarCadastro (evento) {
    evento.preventDefault();
    submeterUsuario();
  }

  return (
    <form onSubmit={finalizarCadastro}>
      <div style={{ textAlign: 'center' }}>
        <Tipografia variante='h1' componente='h1' > Crie seu cadastro </Tipografia>
        <Tipografia variante='body' componente='body'>
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
        </Tipografia>
      </div>
      <Row>
        <Col>
          <Input 
            label={'Nome Completo'} valor={usuario.nomeCompleto} onChange={setNomeCompleto}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <ListaSuspensa titulo='Estado' estadosBrasileiros={estadosBrasileiros} valor={usuario.uf} onChange={setUf}/>
        </Col>
        <Col lg={8} md={8} sm={8}>
          <Input label={'Cidade'} valor={usuario.cidade} onChange={setCidade}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Input label={'E-mail'} valor={usuario.email} onChange={setEmail}/>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Input label={'Senha'} valor={usuario.senha} onChange={setSenha}/>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <Input label={'Repita a senha'} valor={usuario.senhaConfirmada} onChange={setSenhaConfirmada}/>
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to={'/cadastro/interesses'}>
            <Botoes variante="secundario"> Anterior </Botoes>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6} style={{ textAlign: 'right' }}>
          {/*<Link to={'/cadastro/concluido'} >*/}
            <Botoes > Próximo </Botoes>
          {/*</Link>*/}
        </Col>
      </Row>
    </form>
  )
}