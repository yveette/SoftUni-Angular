import { Component } from "@angular/core";

interface Game {
    title: string,
    price: number,
}

@Component({
    selector: 'su-game',
    // template:`<h2>This is game component</h2>`
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
})
export class GameComponent {
    games: Game[] = [
        { title: 'Minecraft', price: 10 },
        { title: 'Candy Crush', price: 0 },
        { title: 'Counter Strike', price: 120 },
    ]
}