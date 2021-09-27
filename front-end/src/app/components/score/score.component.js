import { Component } from '../../utils/component';
import template from "./score.component.html";
import { parseUrl } from "../../utils/utils";

    export class ScoreComponent extends Component{
        getTemplate() {
            return template;
        }
        constructor() {
            super("score");
            let params = parseUrl();
            this.name = params.name;
            this.size = parseInt(params.size);
            this.time = parseInt(params.time);
        }

        init() {
            document.getElementById('name').innerText = this.name;
            document.getElementById('size').innerText = this.size;
            document.getElementById('time').innerText = this.time;
        }
    }
