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
                        name:" ",
                        photoid: " ",
                        year: 0,
                        rating: 0,};
    this.gameDetails = [
      {id: 1, rating: 10, name: 'CSGO', year: 2012,photoid:"https://ih1.redbubble.net/image.286894384.7375/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"},
      {id: 3, rating: 10, name: 'DotA 2', year: 2013, photoid:"https://cdn.vox-cdn.com/thumbor/KSFusNAEyV1TupIMbIXv7N2qs04=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6645195/dota-2-logo.0.jpg"},
      {id: 2, rating: 10, name: 'LoL', year: 2009,photoid:"http://www.macupdate.com/images/icons256/47210.png"}, 
      {id: 4, rating: 10, name: 'NFS Heat', year: 2019,photoid:"https://preview.redd.it/eag3umfl70h31.png?width=1920&format=png&auto=webp&s=529a9dc1e0a26faa4229c50a6ced64de7c6140b5"},
      {id: 5, rating: 10, name: 'GTA SA', year: 2004,photoid:"https://www.igrandtheftauto.com/img/content/640x0/1953.jpg"},
      {id: 6, rating: 10, name: 'GTA IV', year: 2007,photoid:"https://seeklogo.com/images/G/grand-theft-auto-iv-logo-D6536C9797-seeklogo.com.png"},
      {id: 7, rating: 10, name: 'Skyrim', year: 2011,photoid:"https://i.ebayimg.com/images/g/kYsAAOSwTxhcHX-Y/s-l400.jpg"},
      {id: 8, rating: 10, name: 'Starcraft', year: 2009,photoid:"https://www.pngitem.com/pimgs/m/277-2774544_starcraft-2-heart-of-the-swarm-logo-hd.png"},
      {id: 9, rating: 10, name: 'CoD:MW2', year: 2012,photoid:"https://cpng.pikpng.com/pngl/s/304-3048460_call-of-duty-modern-warfare-2-logo-png.png"},
      {id: 10, rating: 10, name: 'Minecraft', year: 2012,photoid:"https://p1.hiclipart.com/preview/59/180/937/minecraft-logo-minecraft-text-png-clipart.jpg" },
    ];
  }
}
