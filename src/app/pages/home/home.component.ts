import { Component } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public songCards = [
    {
      song_id: 1,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: 'Romantic Songs',
      description: 'Relax with beautiful tunes',
      song_link: 'assets/mj_dangerous.mp3'
    },
    {
      song_id: 2,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: 'Workout Songs',
      description: 'Focus and work hard',
      song_link: ''
    },
    {
      song_id: 3,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: '80\'s Songs',
      description: 'Listen to the best music',
      song_link: ''
    },
    {
      song_id: 4,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: 'Peaceful Songs',
      description: 'Enjoy the silence',
      song_link: 'assets/mj_dangerous.mp3'
    },
    {
      song_id: 5,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: 'Mindful Songs',
      description: 'Listen with your mind',
      song_link: 'assets/mj_dangerous.mp3'
    },
    {
      song_id: 6,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: 'Workout Songs',
      description: 'Focus and work hard',
      song_link: ''
    },
    {
      song_id: 7,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: '80\'s Songs',
      description: 'Listen to the best music',
      song_link: 'assets/mj_dangerous.mp3'
    },
    {
      song_id: 8,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: 'Peaceful Songs',
      description: 'Enjoy the silence',
      song_link: 'assets/mj_dangerous.mp3'
    },
    {
      song_id: 9,
      thumbnail: 
      'https://www.seekpng.com/png/full/15-154312_apple-music-logo-png-png-available-on-tidal.png',
      title: 'Mindful Songs',
      description: 'Listen with your mind',
      song_link: 'assets/mj_dangerous.mp3'
    }
  ];

  constructor(private sb: SearchBarService) { }

  onNavigation(pageName: string){
    if(pageName == 'search'){
      this.sb.isSearchVisible.next(true);
    }else{
      this.sb.isSearchVisible.next(false);
    }
  }
}
