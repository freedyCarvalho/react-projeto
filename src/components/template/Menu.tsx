import MenuItem from "./MenuItem";
import { Icon123, Icon12Hours, IconForms, IconHome2, IconNumber1, IconNumbers } from "@tabler/icons-react";

export default function Menu() {
    return(
        <aside className="w-80 bg-zinc-800 p-6">
            <nav className="flex flex-col gap-2">
                <MenuItem texto="Início" href="/" icone={<IconHome2 />}></MenuItem>
                <MenuItem texto="Primeiro Componente" href="/primeiro" icone={<IconNumber1 />}></MenuItem>
                <MenuItem texto="Componente com Estado" href="/contador" icone={<IconNumbers />}></MenuItem>
                <MenuItem texto="Exemplo Formulário" href="/formulario" icone={<IconForms />}></MenuItem>
            </nav>
        </aside>
    )
}