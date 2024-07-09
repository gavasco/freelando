import { Global } from "@emotion/react";

const estilos = tema => {
    return {
        html: {
            fontFamily: tema.fontFamily
        },
        body: {
            margin: 0
        }
    }
}

export default function Estilos() {
    return (
        <Global styles={estilos} />
    )
}