import Contador from "@/components/Contador";
import Pagina from "@/components/template/Pagina";

export default function PaginaContador() {
    return (
        <Pagina>
            <Contador valorInicial={1000} />
            <Contador valorInicial={300}/>
            <Contador valorInicial={-400}/>
        </Pagina>
    );
}