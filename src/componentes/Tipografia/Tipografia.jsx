import styled from "@emotion/styled"

const componentes = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    bodyBold: 'strong',
    body2: 'p',
    bodyBold2: 'strong',
    legenda: 'p'
}
const estilos = {
    h1: `
        font-size: 40px;
        font-weight: 600;
        line-height: 48.76px;
    `,
    h2: `
        font-size: 32px;
        font-weight: 600;
        line-height: 39.01px;
    `,
    h3: `
        font-size: 24px;
        font-weight: 500;
        line-height: 29.26px;
    `,
    body: `
        font-size: 20px;
        font-weight: 400;
        line-height: 24.38px;
    `,
    bodyBold: `
        font-size: 20px;
        font-weight: 700;
        line-height: 24.38px;
    `,
    body2: `
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
    `,
    bodyBold2: `
        font-size: 16px;
        font-weight: 700;
        line-height: 19.5px;
    `,
    legenda: `
        font-size: 14px;
        font-weight: 400;
        line-height: 17.07px;
    `
}

export default function Tipografia({ variante, componente, children }) {
    const tag = componentes[componente]
    const ComponenteUtilizado = styled[tag]`${estilos[variante]}`

    return (
        <ComponenteUtilizado>
            {children}
        </ComponenteUtilizado>
    )
}