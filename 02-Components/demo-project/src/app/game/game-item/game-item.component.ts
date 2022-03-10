import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from "@angular/core";

export interface Game {
    title: string,
    price: number,
    img: string
}

@Component({
    selector: 'su-game-item',
    templateUrl: './game-item.component.html'
})

export class GameItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
    @Input() game: any;

    ngOnInit(): void {
        console.log('GameItemComponent created!');
    }

    ngDoCheck(): void {
        console.log('GameItemComponent checking!');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('GameItemComponent input changes!', changes);
    }

    ngOnDestroy(): void {
        console.log('GameItemComponent destroyed!');
    }
}