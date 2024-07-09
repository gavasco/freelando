import styled from "@emotion/styled";
import { useState } from "react"
import { MdKeyboardArrowUp } from "react-icons/md";

const Label = styled.label`
    color: ${props => props.theme.cores.neutras.a};
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.espacamentos.xs};
    position: relative;
`
const Button = styled.button`
    border: 1px solid ${props => props.theme.cores.neutras.a};
    color: ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    background: ${props => props.theme.cores.branco};
    border-bottom-left-radius: ${props => props.aberta ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.aberta ? '0' : '18px'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    line-height: 17px;
    box-sizing: border-box;
    font-size: 14px;
    width: 100%;
    cursor:  pointer;
    &:focus {
        border-color: ${props => props.theme.cores.focus};
    }
`
const Ul = styled.ul`
    top: 100%;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    border-top: none;
    margin: 0;
    background-color: ${props => props.theme.cores.branco};
    border: 1px solid ${props => props.theme.cores.neutras.a};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    list-style-type: none;
    line-height: 17px;
    font-size: 14px;
    color: ${props => props.theme.cores.neutras.a};
    padding: 0 ${props => props.theme.espacamentos.m};
`
const Li = styled.li`
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.cores.neutras.a};
    color: ${props => props.focoAtivo ? props.theme.cores.focus : 'inherit'};
    padding: 0 ${props => props.theme.espacamentos.xs};
    cursor: pointer;       
    &:last-child {
        border: none;
    }
    &:hover {
        color: ${props => props.theme.cores.focus};
    }
`

export default function ListaSuspensa({ titulo, estadosBrasileiros }) {
    const [aberta, setAberta] = useState(false);
    const [opcaoFocada, setOpcaoFocada] = useState(null);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    function manipularTeclado(evento) {
        setAberta(true);

        switch (evento.key) {
            case 'ArrowDown':
            evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (focoAntigo == null) {
                        return 0
                    }
                    return focoAntigo += 1;
                })
                break;
            case 'ArrowUp':
                evento.preventDefault();
                setOpcaoFocada(focoAntigo => {
                    if (!focoAntigo) {
                        return 0
                    }
                    return focoAntigo -= 1;
                })
                break;
            case 'Enter':
                evento.preventDefault();
                setOpcaoFocada(null)
                setAberta(false);
                setOpcaoSelecionada(estadosBrasileiros[opcaoFocada])
                break;


            default:
                break;
        }
    }

    return (
        <Label>
            {titulo}
            <Button
                onClick={() => setAberta(!aberta)}
                aberta={aberta}
                onKeyDown={manipularTeclado}
            >
                {opcaoSelecionada ? opcaoSelecionada.text : "Selecione"}
                <MdKeyboardArrowUp
                    size={20}
                    style={{
                        transform: `rotate(${aberta ? 0 : 180}deg)`
                    }}
                />

            </Button>
            {aberta &&
                <Ul>
                    {estadosBrasileiros.map((estado, index) =>
                        <Li
                            key={estado.value}
                            focoAtivo={index === opcaoFocada}
                            onClick={() => setOpcaoSelecionada(estado)}
                        >
                            {estado.text}
                        </Li>
                    )}
                </Ul>}
        </Label>
    )
}