import { FiDatabase } from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import {
    SiJavascript, SiTypescript, SiHtml5, SiCss, SiReact, SiNextdotjs, SiTailwindcss,
    SiPython, SiFlask, SiFastapi, SiNodedotjs, SiExpress,
    SiPostgresql, SiSqlite,
    SiGit, SiGithub, SiPycharm, SiWebstorm, SiPostman
} from "react-icons/si";

function TechStack(){
    return (
        <section className="bg-[#f3ede4] border-t border-[#e5ddd4] px-10 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-6 h-px bg-[#6b1f35]"></span>
                    <span className="text-[#6b1f35] text-sm tracking-widest">TECHNOLOGIES</span>
                </div>

                <h2 className="text-4xl font-bold text-[#1a1210] tracking-tight mb-2">Tech Stack</h2>
                <p className="text-[#8c7b73] text-base mb-12">Tools and technologies I use to build full-stack web applications.</p>


                <div className="grid grid-cols-4 gap-6">
                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] transition-colors rounded-lg p-6">
                        <h3 className="text-[#6b1f35] font-medium mb-4">Frontend</h3>
                        <div className="flex flex-col gap-3">
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiJavascript size={16} />JavaScript</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiTypescript size={16} />TypeScript</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiHtml5 size={16} />HTML</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiCss size={16} />CSS</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiReact size={16} />React</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiNextdotjs size={16} />Next.js</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiTailwindcss size={16} />Tailwind CSS</span>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] transition-colors rounded-lg p-6">
                        <h3 className="text-[#6b1f35] font-medium mb-4">Backend</h3>
                        <div className="flex flex-col gap-3">
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiPython size={16} />Python</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiFlask size={16} />Flask</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiFastapi size={16} />FastAPI</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiNodedotjs size={16} />Node.js</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiExpress size={16} />Express.js</span>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] transition-colors rounded-lg p-6">
                        <h3 className="text-[#6b1f35] font-medium mb-4">Database</h3>
                        <div className="flex flex-col gap-3">
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiPostgresql size={16} />PostgreSQL</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><FiDatabase size={16} />SQL</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiSqlite size={16} />SQLite</span>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] transition-colors rounded-lg p-6">
                        <h3 className="text-[#6b1f35] font-medium mb-4">Tools</h3>
                        <div className="flex flex-col gap-3">
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiGit size={16} />Git</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiGithub size={16} />GitHub</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><VscCode size={16} />VS Code</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiPycharm size={16} />PyCharm</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiWebstorm size={16} />WebStorm</span>
                            <span className="flex items-center gap-2 text-[#3d2e28] text-sm"><SiPostman size={16} />Postman</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;