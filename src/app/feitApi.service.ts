import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeitGamingApiService {

  constructor(private http: HttpClient) { }

//   getRating():Observable<Game[]>{
//     return this.http.get<Game[]>(`https://5e2385f7afee990014e599fd.mockapi.io/api/posts`)
//   }  Proba dali moze da se iskoristi API samo za rating na Game za da bide random brojka i da ne se resetira

  getGameComments(postId: number):Observable<GameComment[]>{
    return this.http.get<GameComment[]>(`http://5e2385f7afee990014e599fd.mockapi.io/api/posts/${postId}/postComments`)
  }

  postComment(postId: number, comment: GameComment){
    return this.http
    .post(`http://5e2385f7afee990014e599fd.mockapi.io/api/posts/${postId}/postComments`, comment);
  }
}