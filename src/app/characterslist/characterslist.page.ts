import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-characterslist',
  templateUrl: './characterslist.page.html',
  styleUrls: ['./characterslist.page.scss'],
})
export class CharacterslistPage implements OnInit {

  charcaters:any[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character').subscribe(data => {
      console.log(data);
      this.charcaters = data.results;
    });
  }

}
