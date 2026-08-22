import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";

function Hero(){
    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
    const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const email = process.env.NEXT_PUBLIC_EMAIL;


    return (
        <section className="bg-[#faf7f2] px-10 py-20">
            <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-[#6b1f35]"></span>
                <span className="text-[#6b1f35] text-sm tracking-widest">PORTFOLIO</span>
            </div>

            <h1 className="text-6xl font-bold text-[#1a1210] tracking-tight mb-4">Göknil Bilge</h1>
            <p className="text-xl font-medium italic text-[#6b1f35] tracking-tight mb-6">Junior Full-Stack Software Engineer</p>

            <p className="text-[#3d2e28] text-lg max-w-xl mb-4">
                Software Engineering student with hands-on experience building full-stack web applications,
                with a focus on clean, maintainable, and practical software.
            </p>

            <p className="text-[#8c7b73] text-base max-w-xl mb-8">
                Working across frontend, backend, APIs, and databases while pursuing a Software Engineering degree.
            </p>

                <div className="flex flex-wrap gap-4 mb-10">
                    <Link
                        href="#projects"
                        className="text-white bg-[#6b1f35] hover:bg-[#8b2d45] transition-colors px-6 py-3 rounded-lg font-medium"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-[#ede8e1] text-[#1a1210] hover:bg-[#e5ddd4] transition-colors px-6 py-3 rounded-lg border-2 border-[#e5ddd4] font-medium"
                    >
                        Contact Me
                    </Link>
                </div>

                <div className="flex items-center gap-3 text-[#8c7b73]">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#1a1210] transition-colors"
                    >
                        <FaGithub size={22} />
                        GitHub
                    </a>

                    <span className="text-[#e5ddd4]">|</span>

                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-[#1a1210] transition-colors"
                    >
                        <FaLinkedin size={22} />
                        LinkedIn
                    </a>

                    <span className="text-[#e5ddd4]">|</span>

                    <a
                        href={`mailto:${email}`}
                        className="flex items-center gap-2 hover:text-[#1a1210] transition-colors"
                    >
                        <HiOutlineMail size={22} />
                        Email
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;