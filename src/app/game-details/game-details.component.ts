import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { FeitGamingApiService } from '../feitApi.service';

export interface DialogData {
  clickedGame: Game;
}

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  gameComments: GameComment[] = [];
  newComment: GameComment;
  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<GameDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: FeitGamingApiService) { 

    this.newComment = {id: this.data.clickedGame.id,
                      accountName: '@naumoskiv @tode^', 
                      comment: '',
                      photoUrl: 'https://p7.hiclipart.com/preview/312/283/679/avatar-computer-icons-user-profile-business-user-avatar.jpg',
                      fullName: 'Viktor Naumoski - Nikola Nencev'};
                        
    // this.gameDetails = [
    //   {id: 1, rating: 10, name: 'Counter-Strike: Global Offensive', photoUrl: "https://ih1.redbubble.net/image.286894384.7375/flat,750x,075,f-pad,750x1000,f8f8f8.jpg", 
    //   description: "Counter-Strike: Global Offensive) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content (de_dust2, etc.)."},

    //   {id: 2, rating: 10, name: 'DotA 2', photoUrl: "https://cdn.vox-cdn.com/thumbor/KSFusNAEyV1TupIMbIXv7N2qs04=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6645195/dota-2-logo.0.jpg", 
    //   description: "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own."},

    //   {id: 3, rating: 10, name: 'League of Legends', photoUrl: "https://res.cloudinary.com/teepublic/image/private/s--QN-DWCA4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:48/co_000000,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1539296610/production/designs/3303813_0.jpg", 
    //   description: "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes."},

    //   {id: 4, rating: 10, name: 'Need For Speed Heat', photoUrl: "https://preview.redd.it/eag3umfl70h31.png?width=1920&format=png&auto=webp&s=529a9dc1e0a26faa4229c50a6ced64de7c6140b5", 
    //   description: "Hustle by day and risk it all at night in Need for Speed™ Heat, a white-knuckle street racer, where the lines of the law fade as the sun starts to set. By day, Palm City hosts the Speedhunter Showdown, a sanctioned competition where you earn Bank to customize and upgrade your high-performance cars. At night, ramp up the intensity in illicit street races that build your reputation, getting you access to bigger races and better parts. But stay ready – cops are waiting and not all of them play fair."},

    //   {id: 5, rating: 10, name: 'Grand Theft Auto San Andreas', photoUrl: "https://www.rockstargames.com/sanandreas/image/mobile_fob.png", 
    //   description: "Five years ago Carl Johnson escaped from the pressures of life in Los Santos, San Andreas... a city tearing itself apart with gang trouble, drugs and corruption. Where filmstars and millionaires do their best to avoid the dealers and gangbangers. Now, it's the early 90s. Carl's got to go home."},

    //   {id: 6, rating: 10, name: 'Grand Theft Auto IV', photoUrl: "https://i.pinimg.com/originals/79/52/9a/79529ac24d1ee55f2995b619194af26d.jpg", 
    //   description: "What does the American dream mean today? For Niko Bellic fresh off the boat from Europe, it is the hope he can escape from his past. For his cousin, Roman, it is the vision that together they can find fortune in Liberty City, gateway to the land of opportunity."},

    //   {id: 7, rating: 10, name: 'The Elder Scrolls Skyrim', photoUrl: "https://i.ebayimg.com/images/g/kYsAAOSwTxhcHX-Y/s-l400.jpg", 
    //   description: "The Elder Scrolls V: Skyrim is an action role-playing game, playable from either a first or third-person perspective. The player may freely roam over the land of Skyrim which is an open world environment consisting of wilderness expanses, dungeons, cities, towns, fortresses, and villages."},

    //   {id: 8, rating: 10, name: 'Starcraft II', photoUrl: "https://i.pinimg.com/originals/b4/cb/b9/b4cbb97f56d4f3ae5ea0814ec55bf2a7.jpg", 
    //   description: "With three races, four modes, and infinite ways to play, StarCraft II is the ultimate real-time strategy experience. Do you have what it takes to become the galaxy's greatest commander?"},

    //   {id: 9, rating: 10, name: 'F1 2019', photoUrl: "https://c4.wallpaperflare.com/wallpaper/810/337/220/racing-f1-formula-1-logo-wallpaper-preview.jpg", 
    //   description: "F1® 2019, the official videogame, challenges you to defeat your rivals in the most ambitious F1® game in Codemasters’ history. F1® 2019 features all the official teams, drivers and all 21 circuits from the season. This year sees the inclusion of F2™ with players able to compete in the 2018 season."},

    //   {id: 10, rating: 10, name: 'Minecraft', photoUrl: "https://static.planetminecraft.com/files/resource_media/screenshot/1606/photo9868183.jpg", 
    //   description: "Minecraft is a sandbox video game created by Swedish developer Markus Persson, released by Mojang in 2011 and purchased by Microsoft in 2014. It is the single best-selling video game of all time, selling over 180 million copies across all platforms by late 2019, with over 112 million monthly active players."},
    // ];

    this.apiService.getGameComments(this.data.clickedGame.id)
    .subscribe((comments)=>{
      this.gameComments = comments;
    });
  }

  onComment() {
    this.apiService.postComment(this.data.clickedGame.id,this.newComment)
      .subscribe(()=>{
        console.log("Posted new comment");
      });
      this.newComment.comment='';
  }

  onUpvote() {
    if (!this.data.clickedGame.isVoted) {
      this.data.clickedGame.rating++;
      this.data.clickedGame.isVoted = true;
    }
  }

  onDownvote() {
    if(!this.data.clickedGame.isVoted) {
      this.data.clickedGame.rating--;
      this.data.clickedGame.isVoted = true;
    }
  }
}
