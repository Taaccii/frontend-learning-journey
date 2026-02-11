/* 
Aggiungere i seguenti elementi al contenitore utilizzando SOLO JavaScript e i metodi DOM mostrati sopra:

1 un <p>testo rosso che dice "Ehi, sono rosso!"

2 un <h3>testo blu che dice "Sono un h3 blu!"

3 un <div>con un bordo nero e uno sfondo rosa con i seguenti elementi al suo interno:

    un altro <h1>che dice "Sono in un tuffo"
    che <p>dice "Anch'io!"

    Suggerimento per questo: dopo aver creato <div>con createElement, 
    aggiungi <h1>e <p>prima di aggiungerlo al contenitore.
    */


const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Ehi, im red!";
document.body.appendChild(redParagraph);

const blueHeading = document.createElement("h3");
blueHeading.style.color = "blue";
blueHeading.textContent = "Im h3 blue!";
document.body.appendChild(blueHeading);

const content = document.createElement("div");
content.classList.add("content");
content.style.border = "2px solid black";
content.style.backgroundColor = "pink";

const divHeading = document.createElement("h1");
divHeading.textContent = "Im in a DIV";
content.appendChild(divHeading);

const divParagraph = document.createElement("p");
divParagraph.textContent = "Me Too!";
content.appendChild(divParagraph);

document.body.appendChild(content);