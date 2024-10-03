import Usuario from "@/app/interfaces/Usuario";
import { useState } from "react";

export default function useFormularioUsuario({ nome, email, senha }: Usuario) {
    const [inputNome, alterarNome] = useState(nome);
    const [inputEmail, alterarEmail] = useState(email);
    const [inputSenha, alterarSenha] = useState(senha);
    const [erros, setErros] = useState<{[key: string]: string}>({});

    function salvar() {
        console.log("Nome", inputNome);
        console.log("E-mail", inputEmail);
        console.log("Senha", inputSenha);
    }

    return {
        inputNome, 
        alterarNome, 
        inputEmail, 
        alterarEmail, 
        inputSenha, 
        alterarSenha, 
        salvar
    }
}