export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="mt-10">
        <p className="py-2">This repo reproduces <a className="underline" href="https://github.com/vercel/edge-runtime/issues/983">vercel/edge-runtime#983</a>.</p>
        <p className="py-2">Run <span className="bg-gray-700 font-mono">node server.mjs</span> in separate terminal and then visit <a className="underline" href="/api/stream">/api/stream</a>. This will only work locally.</p>
        <ol className="py-2">Or for a deployed version running on Vercel:
          <li className="p-2">1. Run <span className="bg-gray-700 font-mono">node server.mjs</span> in one terminal.</li>
          <li className="p-2">2. Run <span className="bg-gray-700 font-mono">ngrok http 3030</span> in another terminal.</li>
          <li className="p-2">3. Visit <a className="underline" href="https://vercel-edge-runtime-983.vercel.app/stream">this link</a> or /stream on your own deployment.</li>
          <li className="p-2">4. Submit your ngrok URL to start the test.</li>
        </ol>
      </main>
    </div>
  );
}
