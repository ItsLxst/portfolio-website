"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full flex flex-wrap justify-around items-center gap-2 px-4 pt-5 pb-3 border-b border-gray-200 bg-[#faf7f2]">
            <Link
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-black"
            >
                Göknil Bilge
            </Link>

            <div className="flex items-center gap-4 md:gap-8 text-sm md:text-base">
                <Link href="#stack" className="text-stone-500 hover:text-black">
                    Stack
                </Link>

                <Link href="#projects" className="text-stone-500 hover:text-black">
                    Projects
                </Link>

                <Link
                    href="#contact"
                    className="text-[#6b1f35] border-[#6b1f35] box-border border-2 px-3.5 py-1 rounded-lg hover:bg-[#6b1f35] hover:text-white transition ease-in-out duration-300"
                >
                    Contact Me
                </Link>
            </div>
        </nav>
    );
}