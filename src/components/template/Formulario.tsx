'use client'

import Usuario from "@/app/interfaces/Usuario";
import useFormularioUsuario from "@/hooks/useFormularioUsuario";

//import { useEffect, useState } from "react";

export default function Formulario({ nome, email, senha }: Usuario){

    const { inputNome, 
            alterarNome, 
            inputEmail, 
            alterarEmail, 
            inputSenha, 
            alterarSenha, 
            salvar
        } = useFormularioUsuario({ nome, email, senha })

    // const [inputNome, alterarNome] = useState(nome);
    // const [inputEmail, alterarEmail] = useState(email);
    // const [inputSenha, alterarSenha] = useState(senha);
    // const [erros, setErros] = useState<{[key: string]: string}>({});

    // function salvar() {
    //     console.log("Nome", inputNome);
    //     console.log("E-mail", inputEmail);
    //     console.log("Senha", inputSenha);
    // }
    
    // useEffect(() => {
    //     const novosErros: { [key: string]: string } = {};
    //     if (!inputNome) {
    //       novosErros.inputNome = "Nome é obrigatório";
    //     }
    //     // ... outras validações
    
    //     setErros(novosErros);
    //   }, [inputNome, inputEmail, inputSenha]);

    return(
        <div className="flex flex-col gap-3">
            <input 
                type="text" 
                size={80} 
                value={inputNome}
                placeholder="Informe o nome"
                onChange={(e) => alterarNome(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />
            <input 
                type="email" 
                placeholder="Informe o e-mail" 
                size={80} 
                value={inputEmail}
                onChange={(e) => alterarEmail(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />
            <input 
                type="password" 
                size={80} 
                value={inputSenha}
                onChange={(e) => alterarSenha(e.target.value)}
                placeholder="Informe a senha" 
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />

            <button onClick={salvar} className="bg-green-500 p-2 rounded-md hover:bg-green-400/20">Salvar</button>

            <div className="flex flex-col gap-5">
                <span>{inputNome}</span>
                <span>{inputEmail}</span>
                <span>{inputSenha}</span>
            </div>
        </div>

    )
}