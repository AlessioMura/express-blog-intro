//1 Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
//2 Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
const express = require ('express');
const app = express();
const host = 'http://127.0.0.1';
const port = 3000;
//3 Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
//4 Creiamo poi una rotta /posts che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array locale.
//5 La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
//6 Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
//7 Testare nel browser.