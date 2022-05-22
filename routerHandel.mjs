

import { title } from 'process';
import { fileURLToPath,URL } from 'url';

export function routerHandel(req){

    let url = new URL(`http://${req.headers.host}${req.url}`);
    let route= url.pathname
    
    let fileName;
    switch(route){
        case'/':
        fileName="index.html";
        break;
        case'/about':
        fileName="about.html";
        break;
        case'/contact':
        fileName="contact.html";
        break;
        default:
            fileName="error File";
    }

    return fileName;
}

export function handelTitle(req){
    let url = new URL(`http://${req.headers.host}${req.url}`);
    let title=url.searchParams.get('title')
    title = title==undefined? "Home Page" : (title+' Page');
    return title;
}

