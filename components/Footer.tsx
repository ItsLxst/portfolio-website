import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer(){
    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
    const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const email = process.env.NEXT_PUBLIC_EMAIL;

    return (
        <footer className="bg-[#f3ede4] border-t border-[#e5ddd4] px-6 md:px-10 py-8">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[#8c7b73] text-sm">
                    © 2026 Göknil Bilge. Built with Next.js & Tailwind CSS.
                </p>

                <div className="flex items-center gap-4 text-[#8c7b73]">
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1210] transition-colors">
                        <FaGithub size={18} />
                    </a>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1210] transition-colors">
                        <FaLinkedin size={18} />
                    </a>
                    <a href={`mailto:${email}`} className="hover:text-[#1a1210] transition-colors">
                        <HiOutlineMail size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;