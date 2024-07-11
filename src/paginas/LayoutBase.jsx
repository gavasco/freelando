import { Outlet } from "react-router-dom";
import Cabecalho from "../componentes/Cabecalho/Cabecalho";
import Footer from "../componentes/Footer/Footer";
import styled from "@emotion/styled";

const Div = styled.div`
    margin: 80px 0;
`

export default function LayoutBase () {
    return (
        <>
            <Cabecalho />
            <Div>
                <Outlet />
            </Div>
            <Footer />
        </>
    )
}