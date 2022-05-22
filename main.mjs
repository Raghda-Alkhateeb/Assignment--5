import http, { request } from 'http';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath, URL } from 'url';
import { handelTitle, routerHandel } from './routerHandel.mjs';


const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 4000;

const server = http.createServer(async (req, res) => {

    res.setHeader('Content-Type', 'text/html');
     let fileName= routerHandel(req)
    //  let titlePage= routerHandel(req).title
    if (fileName == "error File") {
        res.end("This Page Not Found!!!!");
    }
    else {
        const filePath = path.join(__dirname, "public", fileName)
        let title=handelTitle(req);
        console.log(title)
        let content = await fs.readFile(filePath, { encoding: "utf8" });
        content=content.replace('{TITLEPAGE}',title)
        res.rnder
        res.end(content);
    }

})

server.listen(port, () => {
    // console.clear();
    console.log("Server is running...");

    console.log(`http://localhost:${port}`);
});
