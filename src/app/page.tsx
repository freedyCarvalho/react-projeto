import Pagina from "@/components/template/Pagina";


export default function Home() {
  return (
    // new Botao() como se fosse a função construtora. No react é o JSX
    // <div className="flex gap-2">
    //   <Link href="/primeiro">Primeiro Componente</Link>
    //   <Link href="/contador">Contador</Link>
    // </div>
    <Pagina>
      <div>
        <h1>Seja bem-vindo</h1>
      </div>
    </Pagina>
  );
}
