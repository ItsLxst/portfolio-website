import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects() {
    const spendSyncGithub = process.env.NEXT_PUBLIC_SPENDSYNC_GITHUB;
    const spendSyncLive = process.env.NEXT_PUBLIC_SPENDSYNC_LIVE;

    const devShelfGithub = process.env.NEXT_PUBLIC_DEVSHELF_GITHUB;
    const devShelfLive = process.env.NEXT_PUBLIC_DEVSHELF_LIVE;

    const voteFlowGithub = process.env.NEXT_PUBLIC_VOTEFLOW_GITHUB;
    const voteFlowLive = process.env.NEXT_PUBLIC_VOTEFLOW_LIVE;

    const invoiceForgeGithub = process.env.NEXT_PUBLIC_INVOICEFORGE_GITHUB;
    const invoiceForgeLive = process.env.NEXT_PUBLIC_INVOICEFORGE_LIVE;

    return (
        <section className="bg-[#faf7f2] border-t border-[#e5ddd4] px-10 py-20">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-6 h-px bg-[#6b1f35]"></span>
                    <span className="text-[#6b1f35] text-sm tracking-widest">WORK</span>
                </div>

                <h2 className="text-4xl font-bold text-[#1a1210] tracking-tight mb-2">Projects</h2>
                <p className="text-[#8c7b73] text-base mb-12">A selection of things I've built. Source code available on GitHub.</p>

                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] hover:-translate-y-1 hover:shadow-lg transition-all rounded-lg p-6">
                        <span className="block w-6 h-0.5 bg-[#6b1f35] mb-4"></span>
                        <h3 className="text-xl font-medium text-[#6b1f35] mb-3">SpendSync</h3>
                        <p className="text-[#8c7b73] text-sm mb-4">
                            A SaaS subscription tracker featuring real-time currency conversion and budget analytics to monitor recurring monthly expenses.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Python</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Flask</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">SQLite</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Frankfurter API</span>
                        </div>
                        <div className="flex gap-3">
                            <a href={spendSyncLive} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6b1f35] border-2 border-[#6b1f35] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#6b1f35] hover:text-white transition-colors">
                                <FiExternalLink size={16} />
                                Live Demo
                            </a>
                            <a href={spendSyncGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#3d2e28] border-2 border-[#e5ddd4] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#1a1210] hover:border-[#1a1210] hover:text-white transition-colors">
                                <FaGithub size={16} />
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] hover:-translate-y-1 hover:shadow-lg transition-all rounded-lg p-6">
                        <span className="block w-6 h-0.5 bg-[#6b1f35] mb-4"></span>
                        <h3 className="text-xl font-medium text-[#6b1f35] mb-3">DevShelf</h3>
                        <p className="text-[#8c7b73] text-sm mb-4">
                            A digital marketplace for developer assets with seamless Stripe checkout, cart management, and automated instant file delivery.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Node.js</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Express</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">PostgreSQL</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Stripe</span>
                        </div>
                        <div className="flex gap-3">
                            <a href={devShelfLive} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6b1f35] border-2 border-[#6b1f35] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#6b1f35] hover:text-white transition-colors">
                                <FiExternalLink size={16} />
                                Live Demo
                            </a>
                            <a href={devShelfGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#3d2e28] border-2 border-[#e5ddd4] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#1a1210] hover:border-[#1a1210] hover:text-white transition-colors">
                                <FaGithub size={16} />
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] hover:-translate-y-1 hover:shadow-lg transition-all rounded-lg p-6">
                        <span className="block w-6 h-0.5 bg-[#6b1f35] mb-4"></span>
                        <h3 className="text-xl font-medium text-[#6b1f35] mb-3">VoteFlow</h3>
                        <p className="text-[#8c7b73] text-sm mb-4">
                            A public feedback and upvoting board built with optimistic UI for instant voting, status filtering, and relational data modeling.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Next.js</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">TypeScript</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Prisma</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">PostgreSQL</span>
                        </div>
                        <div className="flex gap-3">
                            <a href={voteFlowLive} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6b1f35] border-2 border-[#6b1f35] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#6b1f35] hover:text-white transition-colors">
                                <FiExternalLink size={16} />
                                Live Demo
                            </a>
                            <a href={voteFlowGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#3d2e28] border-2 border-[#e5ddd4] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#1a1210] hover:border-[#1a1210] hover:text-white transition-colors">
                                <FaGithub size={16} />
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-[#e5ddd4] hover:border-[#d4c7b8] hover:-translate-y-1 hover:shadow-lg transition-all rounded-lg p-6">
                        <span className="block w-6 h-0.5 bg-[#6b1f35] mb-4"></span>
                        <h3 className="text-xl font-medium text-[#6b1f35] mb-3">Invoice Forge API</h3>
                        <p className="text-[#8c7b73] text-sm mb-4">
                            A high-performance RESTful microservice that validates JSON payloads and generates downloadable, styled PDF invoices on the fly.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">FastAPI</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Python</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">Pydantic</span>
                            <span className="bg-[#ede8e1] text-[#3d2e28] text-xs px-3 py-1.5 rounded-lg">ReportLab</span>
                        </div>
                        <div className="flex gap-3">
                            <a href={invoiceForgeLive} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#6b1f35] border-2 border-[#6b1f35] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#6b1f35] hover:text-white transition-colors">
                                <FiExternalLink size={16} />
                                Live Demo
                            </a>
                            <a href={invoiceForgeGithub} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#3d2e28] border-2 border-[#e5ddd4] text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#1a1210] hover:border-[#1a1210] hover:text-white transition-colors">
                                <FaGithub size={16} />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;