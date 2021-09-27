import { parseUrl } from "../../utils/utils";
import { Component } from '../../utils/component';
import { CardComponent } from "./card/card.component";
import template from "./game.component.html";

let environment = {
    api: {
        host: 'http://localhost:8081'
    }
};

export class GameComponent extends Component {
    getTemplate() {
        return template;
    }
    constructor() {
        // gather parameters from URL
        super("game");
        let params = parseUrl();

        // save player name & game ize
        console.log(this)
        this._name = params.name;
        this._size = parseInt(params.size) || 9;
        this._flippedCard = null;
        this._matchedPairs = 0;
    }

    async init() {
        const config = await this.fetchConfig();
        this._config = config;

        this._cards = this._config.ids
            .map(id => new CardComponent(id));

        this._boardElement = document.querySelector('.cards');

        this._cards.forEach((card) => {
            this._boardElement.appendChild(card.getElement());
            card.getElement().addEventListener('click', () => { this._flipCard(card) });
        })
        this.start();
    }

    start() {
        this._startTime = Date.now();
        let seconds = 0;
        document.querySelector('nav .navbar-title').innerHTML = `Joueur : ${this._name} <br>Temps écoulé : ${seconds++}`;

        this._timer = setInterval(() => {
            document.querySelector('nav .navbar-title').innerHTML = `Joueur : ${this._name} <br>Temps écoulé : ${seconds++}`;
        }, 1000);
    }

    gotoScore() {
        clearInterval(this._timer);
        const timeElapsedInSeconds = Math.floor(
            (Date.now() - this._startTime) / 1000
        );
        setTimeout(() => window.location.hash = `score?name=${this._name}&size=${this._size}'&time=${timeElapsedInSeconds}`, 750);
    }


    async fetchConfig() {
        return fetch(`${environment.api.host}/board?size=${this._size}`, {
            method: "GET"
        })
            .then(response => response.json())
            .catch(error => console.log("Fetch config error", error));
    }

    _flipCard(card) {
        if (this._busy) {
            return;
        }

        if (card.flipped) {
            return;
        }
        // flip the card
        card.flip();

        // if flipped first card of the pair
        if (!this._flippedCard) {
            // keep this card flipped, and wait for the second card of the pair
            this._flippedCard = card;
        } else {
            // second card of the pair flipped...

            // if cards are the same
            if (card.equals(this._flippedCard)) {
                this._flippedCard.matched = true;
                card.matched = true;
                this._matchedPairs += 1;

                // reset flipped card for the next turn.
                this._flippedCard = null;

                if (this._matchedPairs === this._size) {
                    this.gotoScore();
                }
            } else {
                this._busy = true;

                // cards did not match
                // wait a short amount of time before hiding both cards
                setTimeout(() => {
                    // hide the cards
                    this._flippedCard.flip();
                    card.flip();
                    this._busy = false;

                    // reset flipped card for the next turn.
                    this._flippedCard = null;
                }, 500);
            }
        }
    }
}

