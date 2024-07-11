import styled from "@emotion/styled"

const Label = styled.label`
    color: ${props => props.theme.cores.neutras.a};
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.espacamentos.xs};
    margin-top: 14px;
`
const InputEstilizado = styled.input`
    border: 1px solid ${props => props.theme.cores.neutras.a};
    border-radius: ${props => props.theme.espacamentos.s};
    color: ${props => props.theme.branco};
    background: ${props => props.theme.branco};
    height: 40px;
    line-height: 17px;
    font-size: 14px;
    padding: 0 16px;
`

export default function Input ({ label, valor, onChange, tipo = 'text' }) {
    return (
        <Label>
            {label}
            <InputEstilizado 
                type={tipo} 
                value={valor}
                onChange={e => onChange(e.target.value)}
            />
        </Label>
    )
}