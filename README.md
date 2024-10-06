This repo reproduces [vercel/edge-runtime#983](https://github.com/vercel/edge-runtime/issues/983).

Run `node server.mjs` in separate terminal and then visit `/api/stream`. 

This will only work locally. This bug does not appear to be present once deployed to Vercel.

