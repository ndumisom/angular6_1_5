import { Component } from '@angular/core';
import { CharactersService } from './characters.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private api:CharactersService){}
  name:string;
  characters:any;
  profile:any;

  getCharacters() {
    this.api.getAll().then(data => {
      this.characters = data.characters;
    })
    .catch(err => {
      console.log("errorrr", err);
    });
  }

  getProfile(name, event:any) {
    event.preventDefault();
    this.name = name;
    this.api.getProfile().then(data => {
      this.profile = data.characters;
    })
    .catch(err => {
      console.log("error ", err);
    });
  }
}
