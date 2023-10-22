import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent {

  @Input() public playlistThumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public link: string | undefined;
  @Input() public id!: number;

  constructor(private router: Router){

  }

  OnNavigateToSong(){
    this.router.navigate(['/song', this.id], {
      state: {
        thumbnail: this.playlistThumbnail,
        title: this.title,
        description: this.description,
        link: this.link
      }
    });
  }

}
