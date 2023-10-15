import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  public isSearchFieldVisible = false;

  constructor(private router: Router){}

  onNavigateToLogin(){
    this.router.navigate(['/','login']);
  }
}
