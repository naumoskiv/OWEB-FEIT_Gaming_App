import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  clickedGame: Game;
}

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  gameDetails: GameDetails[] = [];
  newDetails: GameDetails;
  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<GameDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { 
    this.newDetails = {id: this.data.clickedGame.id,
                        rating: 0,};
    this.gameDetails = [
      {id: 1, rating: 10},
      {id: 2, rating: 10},
      {id: 3, rating: 10},
      {id: 4, rating: 10},
      {id: 5, rating: 10},
      {id: 6, rating: 10},
      {id: 7, rating: 10},
      {id: 8, rating: 10},
      {id: 9, rating: 10},
      {id: 10, rating: 10},
    ];
  }
}
