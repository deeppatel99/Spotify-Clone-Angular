import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  public isSearchFieldVisible = false;

  constructor(private router: Router, private sb: SearchBarService){}

  ngOnInit(){
    this.sb.isSearchVisible.subscribe(status => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateToLogin(){
    this.router.navigate(['/','login']);
  }
}
