import { IconBrandReact } from "@tabler/icons-react";

export default function Cabecalho() {
    return(
        <header className="flex justify-between bg-zinc-700 px-6 py-3">
            <div className="flex justity-center items-center p-4 text-blue-400 gap-2">
                <IconBrandReact size={36} stroke={1}/>
                <span className="font-thin">React Essencial</span>
            </div>
            <div className="flex justify-center items-center bg-purple-500 p-4 rounded-full">US</div>
        </header>
    )
}