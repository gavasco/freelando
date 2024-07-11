import styled from "@emotion/styled"

const BotaoPrimario = styled.button`
    border-radius: ${props => props.theme.espacamentos.s};
    background-color: ${props => props.theme.cores.primarias.b};
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    border: 2px solid ${props => props.theme.cores.primarias.b};
    line-height: 20px;
    font-weight: 700;
    font-size: ${props => props.theme.espacamentos.s};
    color: ${props => props.theme.cores.neutras.c};
    text-align: center;
    box-sizing: border-box;
    cursor: pointer;
    margin-top: 14px;
    &:hover {
        background-color: ${props => props.theme.cores.dark.b};
        border: 2px solid ${props => props.theme.cores.dark.b};
    }
    &:focus {
        background-color: ${props => props.theme.cores.primarias.b};
        outline-color: 2px solid ${props => props.theme.cores.focus};
    }
`
const BotaoSecundario = styled.button`
    border-radius: ${props => props.theme.espacamentos.s};
    background-color: transparent;
    padding: ${props => props.theme.espacamentos.xs} ${props => props.theme.espacamentos.s};
    border: 2px solid ${props => props.theme.cores.primarias.b};
    line-height: 20px;
    font-weight: 700;
    font-size: ${props => props.theme.espacamentos.s};
    color: ${props => props.theme.cores.primarias.b};
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    margin-top: 14px;
    &:hover {
        border: 2px solid ${props => props.theme.cores.dark.b};
        color: ${props => props.theme.cores.dark.b};
    }
    &:focus {
        outline-color: 2px solid ${props => props.theme.cores.focus};
    }
`

export default function Botoes ({ variante = 'primario', children }) {
    if (variante === "primario") {
        return (
            <BotaoPrimario> {children} </BotaoPrimario>
        )
    }
    return (
        <BotaoSecundario> {children} </BotaoSecundario>
    )
}