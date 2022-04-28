import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import App, { getInitialProps } from "./src/index";
import { resolve } from "path";

const server = express();

server.use(
  express.static(
    resolve(process.cwd(), 'assets/')
  )
)

server.get('/',  async (req, res) => {
  const props = await getInitialProps()
  const app = renderToString(<App {...props} />)

  const tmplt = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      </head>
      <script>
      console.log('critical scripts')
      </script>
      <body>
      <div id="app">${app}</div>
      </body>
      <script src="//localhost:3001/main.js"></script>
</html>
`

  res.send(tmplt);
});

server.listen(3001);
