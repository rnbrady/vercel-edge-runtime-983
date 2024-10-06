"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Stream() {
  const [url, setUrl] = useState("ws://localhost:3030");
  
  const router = useRouter();

  return (
    <div className="min-h-screen p-8 bg-white">
      <main className="font-sans">
        <div>
          <div className="flex flex-col text-gray-500 gap-2">
            <a
              className="underline"
              href={`/api/stream/${encodeURIComponent(`ws://localhost:3030`)}`}
            >ws://localhost:3030</a>
            <a
              className="underline"
              href={`/api/stream/${encodeURIComponent(`ws://echo.websocket.org`)}`}
            >ws://echo.websocket.org</a>
            <a
              className="underline"
              href={`/api/stream/${encodeURIComponent(`wss://echo.websocket.org`)}`}
            >wss://echo.websocket.org</a>

            <div>or....</div>
          </div>
          <div className="mt-2">
            <input
              className="border-2 border-gray-300 rounded-md p-2 text-gray-600"
              type="text"
              name="url"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value.replace("https://", "wss://").replace("http://", "ws://"));
                e.preventDefault();
              }}
            />
            <a
              className="bg-blue-500 text-white p-2 rounded-md p-3 mx-2"
              href={`/api/stream/${encodeURIComponent(url)}`}
            >Stream</a>
          </div>
        </div>
      </main>
    </div>
  );
}