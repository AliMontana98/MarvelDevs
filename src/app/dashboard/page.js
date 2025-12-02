import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Dashboard() {
    return (
        <main className="min-h-screen flex flex-col bg-[#0B0C10] text-white">
            <Navbar />
            <div className="max-w-7xl mx-auto w-full px-6 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                </div>

                <div className="bg-blue-500/10 text-blue-400 p-4 rounded-lg mb-8">
                    Demo Dashboard - Connect your backend to enable full functionality
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-[#1C1D21] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">My Projects</h3>
                        <p className="text-gray-400 mb-4">You have 0 active projects.</p>
                        <button className="w-full bg-[#007AFF] text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            Create Project
                        </button>
                    </div>
                    <div className="bg-[#1C1D21] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">API Keys</h3>
                        <p className="text-gray-400 mb-4">Manage your API access keys.</p>
                        <button className="w-full bg-[#1C1D21] border border-gray-700 text-white font-bold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            View Keys
                        </button>
                    </div>
                    <div className="bg-[#1C1D21] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-xl font-bold mb-2">Documentation</h3>
                        <p className="text-gray-400 mb-4">Learn how to integrate Marvel.</p>
                        <Link href="/" className="w-full block bg-[#1C1D21] border border-gray-700 text-white text-center font-bold py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            Read Docs
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
