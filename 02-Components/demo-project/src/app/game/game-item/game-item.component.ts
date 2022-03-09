import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'su-game-item',
    templateUrl: './game-item.component.html'
})

export class GameItemComponent implements OnInit, OnDestroy {
    game: any;

    ngOnInit(): void {
        console.log('GameItemComponent created!');
    }

    ngOnDestroy(): void {
        console.log('GameItemComponent destroyed!');
    }
}