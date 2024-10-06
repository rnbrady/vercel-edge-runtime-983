import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="">
        <p>This repo reproduces <a className="underline" href="https://github.com/vercel/edge-runtime/issues/983">vercel/edge-runtime#983</a>.</p>
        <p>Run <span className="bg-gray-700 font-mono">node server.mjs</span> in separate terminal and then visit <a className="underline" href="/api/stream">/api/stream</a>.</p>
      </main>
    </div>
  );
}
