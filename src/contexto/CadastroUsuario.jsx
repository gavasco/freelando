import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const usuarioInicial = {
    perfil: '', //ou usuario ou freela
    interesse: '',
    nomeCompleto: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    senhaConfirmada: '',
}

const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    erro: {},
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setCidade: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
    submeterUsuario: () => null,
    possoSelecionarInteresse: () => null,
})

export function useCadastroUsuarioContext () {
    return useContext(CadastroUsuarioContext)
}

export default function CadastroUsuarioProvider({ children }) {
    const navigation = useNavigate();
    const [usuario, setUsuario] = useState(usuarioInicial);
    const [erro, setErro] = useState();

    function setPerfil(perfil) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                perfil
            }
        })
    }
    function setInteresse(interesse) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                interesse
            }
        })
    }
    function setNomeCompleto(nomeCompleto) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                nomeCompleto
            }
        })
    }
    function setUf(uf) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                uf
            }
        })
    }
    function setCidade(cidade) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                cidade
            }
        })
    }
    function setEmail(email) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                email
            }
        })
    }
    function setSenha(senha) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                senha
            }
        })
    }
    function setSenhaConfirmada(senhaConfirmada) {
        setUsuario(estadoAntigo => {
            return {
                ...estadoAntigo,
                senhaConfirmada
            }
        })
    }
    function submeterUsuario () {
        console.log(usuario)
        navigation('/cadastro/concluido')
    }
    function possoSelecionarInteresse () {
        return !!usuario.perfil // !! transforma para boolean, primeiro da false e o outro true
    }
    const contexto = {
        usuario,
        erro,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        possoSelecionarInteresse
    }

    return (
        <CadastroUsuarioContext.Provider value={contexto}>
            {children}
        </CadastroUsuarioContext.Provider>
    )
}