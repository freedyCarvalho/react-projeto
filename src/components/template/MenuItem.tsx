import MenuItemProps from "@/app/interfaces/MenuItemProps";
import Link from "next/link";


export default function MenuItem(props: MenuItemProps) {
    return(
        <div className="flex items-center gap-1 p-2 hover:bg-black/20">
            {props.icone}
            <Link href={props.href}>{props.texto}</Link>
        </div>
    )
}