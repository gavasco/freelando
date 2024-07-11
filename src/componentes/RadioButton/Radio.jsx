import styled from "@emotion/styled";

const Label = styled.label`
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 16px;
    cursor: pointer;
    color: ${props => props.checked ? props.theme.cores.dark.b : props.theme.cores.neutras.a};
    &:hover {
        color: ${props => props.theme.cores.dark.b};
        &:before {
            border-color: ${props => props.theme.cores.dark.b};
        }
    }
    &:before {
        content: '';
        border-radius: 50%;
        height: 24px;
        width: 24px;
        border: 1px solid ${props => props.theme.cores.neutras.a};
        background-color: ${props => props.checked ? props.theme.cores.dark.b : 'inherit'};
        border-color: ${props => props.checked ? props.theme.cores.dark.b : 'inherit'};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const Input = styled.input`
    appearance: none;
`

export default function Radio({ valor, label, checked, onClick }) {
    return (
        <>
            <Input type="radio" checked={checked} onChange={onClick}  valor={valor} id={`radio-customizado-${valor}`}/>
            <Label htmlFor={`radio-customizado-${valor}`} checked={checked} >
                {label}
            </Label>
        </>
    )
};