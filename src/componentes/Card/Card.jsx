import styled from "@emotion/styled"

const Div = styled.div`
    border-radius: ${props => props.theme.espacamentos.s};
    border: 1px solid ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.l};
    background-color: ${props => props.theme.cores.secundarias.a};
`

export default function Card ({ children }) {
    return (
        <Div>
            {children}
        </Div>
    )
}