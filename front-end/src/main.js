// front-end/src/main.js

import "bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

import { Router } from "./app/utils/router";
import { GameComponent } from "./app/components/game/game.component";
import { WelcomeComponent } from "./app/components/welcome/welcome.component";
import { ScoreComponent } from "./app/components/score/score.component";

const outlet = document.querySelector("#content-outlet");

const router = new Router(outlet)
.register("welcome", WelcomeComponent)
.register("game", GameComponent)
.register("score", ScoreComponent); 
