import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-around items-center mt-5 pb-3 border-b border-gray-200">
            <Link href="#" className="text-black">Göknil Bilge</Link>
            <div className="flex items-center gap-8">
                <Link href="#stack" className="text-stone-500 hover:text-black">Stack</Link>
                <Link href="#projects" className="text-stone-500 hover:text-black">Projects</Link>
                <Link href="#contact" className="text-[#6b1f35] border-[#6b1f35] box-border border-2 px-3.5 py-1 rounded-lg hover:bg-[#6b1f35] hover:text-white transition ease-in-out duration-300">Contact Me</Link>
            </div>
        </nav>
    );
}