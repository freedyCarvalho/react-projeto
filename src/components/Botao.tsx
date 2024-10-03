// Primeiro componente da aplicação
// JSX - Sintaxe extendida do JavaScript
// Componente Funcional, baseado em função
export default function Botao(props: any){
    return <button className="bg-green-500 p-2 rounded-md">
        {props.label ?? "OK"}
        </button>;
}