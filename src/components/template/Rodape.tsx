export default function Footer() {
    return(
        <footer className="flex justify-end bg-slate-500 px-6 py-3">
            <span className="text-zinc-300 text-sm">
                Todo os direitos reservados &copy; {new Date().getFullYear()}
            </span>
        </footer>
    )
}