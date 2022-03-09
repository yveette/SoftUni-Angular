import { Component } from "@angular/core";

interface Game {
    title: string,
    price: number,
    img: string
}

@Component({
    selector: 'su-game',
    // template:`<h2>This is game component</h2>`
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
})
export class GameComponent {
    shouldPriceByRed: boolean = false;
    shouldShowGameItemComponent:boolean  = false;
    searchText: string = 'Game';

    games: Game[] = [
        { title: 'Minecraft', price: 10, img: 'https://cdn.pixabay.com/photo/2013/07/12/19/25/minecraft-154749__480.png' },
        { title: 'Candy Crush', price: 0, img: 'https://apkmagic.com.ar/wp-content/uploads/2019/05/Candy-Crush-Saga-v1.150.1.2-Mod-APK.png' },
        { title: 'Counter Strike', price: 120 , img: 'https://gameday.bg/wp-content/uploads/2021/01/counter-strike-global-offensive-bezplatna-01.jpg'},
    ]

    handleExpandContentClick(gamesContainer: HTMLElement) :void{
        this.shouldPriceByRed = this.shouldPriceByRed ? false : true;
        // this.shouldPriceByRed = !this.shouldPriceByRed;

        console.log(gamesContainer.children);
    }

    handleSearchChange(event: Event){
        console.log(event)
    }

    handleCreateOrDestroyGameItem(): void{
        this.shouldShowGameItemComponent = !this.shouldShowGameItemComponent;
    }
}