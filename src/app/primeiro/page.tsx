import Botao from "@/components/Botao";
import Pagina from "@/components/template/Pagina";


export default function PrimeiraPagina() {
  return (
    // new Botao() como se fosse a função construtora. No react é o JSX
    <Pagina>
      <div className="flex gap-2">
        <Botao label="Salvar" />
        <Botao label="Cancelar" />
    </div>
    </Pagina>
  );
}