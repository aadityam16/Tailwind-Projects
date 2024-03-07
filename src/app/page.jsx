import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-zinc-700 min-h-screen text-white font-sans">
      <h1 className="text-4xl text-center bg-zinc-600 p-6">
        Tailwind CSS Projects
      </h1>
      <div className="flex flex-col space-y-4 items-center text-xl font-medium mt-4">
        <Link
          href="/email-subscribe"
          className="bg-red-400 px-3 py-1 rounded-lg hover:-translate-y-0.5 transition-all duration-150 hover:bg-red-300"
        >
          Email Subscribe
        </Link>
        <Link
          href="/pricing-cards"
          className="bg-green-400 px-3 py-1 rounded-lg hover:-translate-y-0.5 transition-all duration-150 hover:bg-green-300"
        >
          Pricing Cards
        </Link>
        <Link
          href="/product-modal"
          className="bg-blue-400 px-3 py-1 rounded-lg hover:-translate-y-0.5 transition-all duration-150 hover:bg-blue-300"
        >
          Product Modal
        </Link>
        <Link
          href="/clipboard"
          className="bg-pink-400 px-3 py-1 rounded-lg hover:-translate-y-0.5 transition-all duration-150 hover:bg-pink-300"
        >
          Clipboard Website
        </Link>
        <Link
          href="/loop-studios"
          className="bg-cyan-400 px-3 py-1 rounded-lg hover:-translate-y-0.5 transition-all duration-150 hover:bg-cyan-300"
        >
          Loop-Studios Website
        </Link>
      </div>
    </div>
  );
}
