/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: :avviso:non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
!-----------------------------# MILESTONE 1-----------------------------
Prepariamo "qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.
!-----------------------------# MILESTONE 2-----------------------------
Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti
!-----------------------------# MILESTONE 3-----------------------------
Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
!-----------------------------# MILESTONE 4-----------------------------
Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina. Raccogliamo quindi il messaggio è scriviamo un messaggio appropriato.
(Ma come stabiliamo quale sia il punteggio massimo?)
!-----------------------------# MILESTONE 5-----------------------------
Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.
TODO: BONUS DA FARE
#BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
#SUPER BONUS
Se avete finito tutti i bonus potete scrivere all'insegnante o ai tutor per ricevere delle sfide extra!
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/

// ! FASE PREPARATORIA-----------------------

// Recupero gli elementi in pagina:
const grid = document.getElementById('grid');
const playButton = document.getElementById('play-button');
const levelSelect = document.getElementById('select-level');
const result = document.getElementById('result')


function play() {
    // Creo una funzione nella funzione, la funzione play tanto verrà usata una sola volta;
    // ! Funzioni interne al gioco;
    const createCell = (number) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.append(number);
        return cell;
    }


    //? -----Cambio il testo del bottone in "RICOMINCIA!"------
    playButton.innerText = 'Ricomincia!';
    // Potevo usare anche il this o l'evento, vedi lezione, e mettere tutto all'interno di una funzione(lezione 19/12).

    // Svuotiamo la griglia
    grid.innerHTML = '';

    // !-------------------------
    // !SVOLGIMENTO ESERCIZIO
    // !-------------------------

    // Recupero il valore option della select:
    const level = levelSelect.value;

    // prendiamo le classi create sul css con lo stesso nome della mia variabile (solo per cmodità);
    grid.classList.add(level);
    // Calcolo righe e colonne
    let cols;
    let rows;
    switch (level) {
        case 'medium':
            cols = rows = 9;
            break;
        case 'hard':
            cols = rows = 7;
            break;
        case 'easy':
        default:
            cols = rows = 10;
    }
    const totalCells = rows * cols;

    for (let i = 1; i <= totalCells; i++) {

        // variabile datta dalla funzione createCell;
        const cell = createCell(i);

        // lista array per i numeri random
        let cellSelected;

        // creo un event listner della cella:
        cell.addEventListener('click', function () {
            cell.classList.add('clicked');
            console.log(i);


        })

        // TODO aggiungo un event listner alla cella prima di "appenderla", spostandola in una funzione (createCell):
        grid.appendChild(cell);
    }


}

// Creo la mia logica all'interno del 'click del bottone':
playButton.addEventListener('click', play);