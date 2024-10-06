export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="mt-10">
        <p className="py-2">This repo reproduces <a className="underline" href="https://github.com/vercel/edge-runtime/issues/983">vercel/edge-runtime#983</a>.</p>
        <p className="py-2">Run <span className="bg-gray-700 font-mono">node server.mjs</span> in separate terminal and then visit <a className="underline" href="/api/stream">/api/stream</a>.</p>
        <p>This will only work locally. This bug does not appear to be present once deployed to Vercel.</p>
      </main>
    </div>
  );
}
