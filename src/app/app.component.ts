import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameDetailsComponent } from './game-details/game-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OWEB';
  games: Game[] = [];

constructor(public dialog: MatDialog) {
  this.games = [
    { id: 1,  photoUrl:  'https://dmarket.com/blog/best-csgo-wallpapers/CS-GO-wallpaper-HD-art_hue3ed7aeab8fceb3ccf3a35de14fc82fb_1114369_1920x1080_resize_q90_box.jpg' },
    { id: 2,  photoUrl:  'https://wallpaperaccess.com/full/671214.jpg'},
    { id: 3,  photoUrl:  'https://i.pinimg.com/originals/0f/1e/47/0f1e47f3f9daff00feafc4fc7b242355.jpg'},
    { id: 4,  photoUrl:  'https://i.redd.it/drlt7nnisai31.jpg'},
    { id: 5,  photoUrl:  'https://wallpaperaccess.com/full/1105795.jpg'},
    { id: 6,  photoUrl:  'https://images8.alphacoders.com/102/1021604.png'},
    { id: 7,  photoUrl:  'https://wallpaperplay.com/walls/full/9/2/0/271036.jpg'},
    { id: 8,  photoUrl:  'https://www.itl.cat/pngfile/big/126-1265280_dota-2-terrorblade-wallpaper-hd-starcraft-2-wings.jpg'},
    { id: 9,  photoUrl:  'https://www.itl.cat/pics/b/16/163620_call-of-duty-mw2-wallpaper.jpg'},
    { id: 10, photoUrl:  'https://merric-gaming.co.uk/wp-content/uploads/2019/07/minecraft.jpg'}
  ];
}

onClick(game: Game){
  const dialogRef = this.dialog.open(GameDetailsComponent, {
    width: '750px',
    height: '700px',
    data: {clickedGame: game}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    // // this.animal = result;
  });
}
}