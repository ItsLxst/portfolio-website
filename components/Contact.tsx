import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact(){
    const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
    const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
    const email = process.env.NEXT_PUBLIC_EMAIL;

    return (
        <section id="contact" className="bg-[#f3ede4] border-t border-[#e5ddd4] px-10 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-6 h-px bg-[#6b1f35]"></span>
                    <span className="text-[#6b1f35] text-sm tracking-widest">GET IN TOUCH</span>
                </div>

                <h2 className="text-4xl font-bold text-[#1a1210] tracking-tight mb-4">Let's connect.</h2>
                <p className="text-[#8c7b73] text-base max-w-xl mb-10">
                    Feel free to reach out if you'd like to discuss a project, opportunity, or just connect.
                </p>

                <div className="flex flex-col gap-4">
                    <a href={`mailto:${email}`} className="flex items-center gap-3 text-[#1a1210]">
                        <span className="bg-white border-2 border-[#e5ddd4] rounded-lg p-2.5">
                            <HiOutlineMail size={20} />
                        </span>
                        Email
                    </a>

                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#1a1210]">
                        <span className="bg-white border-2 border-[#e5ddd4] rounded-lg p-2.5">
                            <FaGithub size={20} />
                        </span>
                        GitHub
                    </a>

                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#1a1210]">
                        <span className="bg-white border-2 border-[#e5ddd4] rounded-lg p-2.5">
                            <FaLinkedin size={20} />
                        </span>
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;