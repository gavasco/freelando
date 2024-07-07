import { Global, css } from "@emotion/react";

const estilos = css`
    * {
        font-family: 'Montserrat', sans-serif;
    }
`

export default function Estilos() {
    return (
        <Global styles={estilos} />
    )
}