import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // auth necessário para saber se existe alguém logado ou não
  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }

}
