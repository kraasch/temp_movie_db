
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tile } from './tile/tile';
import { TopNav } from './topnav/topnav';
import { BotFooter } from './botfooter/botfooter';
import { CookieBar } from './cookiebar/cookiebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tile, TopNav, BotFooter, CookieBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  items = [
   { id:  0, yr: 1956, watched: '2025-06', culture: 'jp', rating: '8.3', imdb: 'https://www.imdb.com/title/tt0044741/',  title: 'Ikiru', description: 'A movie asking the question of how to give our lives meaning.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/dgNTS4EQDDVfkzJI5msKuHu2Ei3.jpg' },
   { id:  1, yr: 1957, watched: '2024-01', culture: 'us', rating: '9.0', imdb: 'https://www.imdb.com/title/tt0050083/',  title: '12 Angry Men', description: 'A movie about humanity and everything which is important for human life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg' },
   { id:  2, yr: 1961, watched: '2024-01', culture: 'jp', rating: '8.2', imdb: 'https://www.imdb.com/title/tt0055630/',  title: 'Yojimbo', description: 'One of the most beautifully told stories.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg' },
   { id:  3, yr: 1968, watched: '2026-02', culture: 'us', rating: '7.8', imdb: 'https://www.imdb.com/title/tt0061735/',  title: 'Guess Who\'s Coming to Dinner', description: 'A great historic movie about how skin differences were overcome.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/fkHeYWahNbhxhuLefaAg553lYo5.jpg' },
   { id:  4, yr: 1981, watched: '2025-08', culture: 'de', rating: '8.3', imdb: 'https://www.imdb.com/title/tt0082096/',  title: 'Das Boot', description: 'A great movie about the reality of war.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/arqCQXHqgzZG2m5111FV4nA13RN.jpg' },
   { id:  5, yr: 1985, watched: '2024-02', culture: 'us', rating: '7.3', imdb: 'https://www.imdb.com/title/tt0087538/',  title: 'The Karate Kid', description: 'A movie with many lessons which kids and adults have to learn.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/1mp4ViklKvA0WXXsNvNx0RBuiit.jpg' },
   { id:  6, yr: 1988, watched: '2025-06', culture: 'it', rating: '8.5', imdb: 'https://www.imdb.com/title/tt0095765/',  title: 'Nuovo Cinema Paradiso', description: 'A great movie teaching us about life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg' },
   { id:  7, yr: 1994, watched: '2024-10', culture: 'us', rating: '9.3', imdb: 'https://www.imdb.com/title/tt0111161/',  title: 'Shawshank Redemption', description: 'A classic, one of the best underdog tales.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg' },
   { id:  8, yr: 1999, watched: '2024-12', culture: 'us', rating: '8.7', imdb: 'https://www.imdb.com/title/tt0133093/',  title: 'The Matrix', description: 'Great modern fantasy story.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/p96dm7sCMn4VYAStA6siNz30G1r.jpg' },
   { id:  9, yr: 2003, watched: '2023-07', culture: 'us', rating: '7.0', imdb: 'https://www.imdb.com/title/tt0311289/',  title: 'Holes', description: 'Wow, the book was good and the film is equally good.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/o2Dm2mcE1qW8vT0bpsJO5OMBbqa.jpg' },
   { id: 10, yr: 2003, watched: '2026-02', culture: 'sv', rating: '7.7', imdb: 'https://www.imdb.com/title/tt0338309/',  title: 'Evil (Ondskan)', description: 'An amazing movie about what it means for a person to be evil.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/1qqI4qh3VP7jUBRTGsIxh1miNKJ.jpg' },
   { id: 11, yr: 2003, watched: '2026-02', culture: 'us', rating: '8.1', imdb: 'https://www.imdb.com/title/tt0382932/',  title: 'Ratatouille', description: 'Well-known movie, sweet story about food, love and talent.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg' },
   { id: 12, yr: 2007, watched: '2023-08', culture: 'fr', rating: '6.7', imdb: 'https://www.imdb.com/title/tt0792965/',  title: 'Hunting and Gathering (Ensemble, C\'est Tout)', description: 'A movie about friendship, the relationship of parents to their kids.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/dNgTyFxp84SWeOkgdWeZDiXsADG.jpg' },
   { id: 13, yr: 2008, watched: '2025-06', culture: 'us', rating: '8.4', imdb: 'https://www.imdb.com/title/tt0910970/',  title: 'Wall-e', description: 'Great, positive and cute movie.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg' },
   { id: 14, yr: 2009, watched: '2025-10', culture: 'ko', rating: '7.9', imdb: 'https://www.imdb.com/title/tt1499666/',  title: 'Castaway on the Moon', description: 'A movie about two lost souls in the modern world.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/gGzovvmOEyNVUu4WEHtw9wfDsqI.jpg' },
   { id: 15, yr: 2011, watched: '2025-02', culture: 'fr', rating: '8.5', imdb: 'https://www.imdb.com/title/tt1675434/',  title: 'Intouchables', description: 'A great movie, even a very spiritual movie.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg' },
   { id: 16, yr: 2012, watched: '2023-07', culture: 'us', rating: '6.5', imdb: 'https://www.imdb.com/title/tt1645170/',  title: 'The Dictator', description: 'A masterpiece by Sacha Baron Cohen.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/n0W7kajF4GFMRk2c0wWwMQqTaDM.jpg' },
   { id: 17, yr: 2013, watched: '2025-06', culture: 'mx', rating: '7.5', imdb: 'https://www.imdb.com/title/tt2378281/',  title: 'Instructions Not Inclucded', description: 'A great movie with lots of lessons.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/x3Ygv0aZbZ3iUMeXyIlSu0Ugyp5.jpg' },
   { id: 18, yr: 2015, watched: '2023-05', culture: 'de', rating: '7.4', imdb: 'https://www.imdb.com/title/tt3700392/',  title: 'Heidi', description: 'A wonderful movie teaching the most beautiful things in life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/ue6L0x3C9V4c5kIiWnEIOPwtGhw.jpg' },
   { id: 19, yr: 2015, watched: '2025-10', culture: 'jp', rating: '7.5', imdb: 'https://www.imdb.com/title/tt2964120/',  title: 'Wood Job!', description: 'An amazing Japanese movie about differences of city life and country life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/gvo0367R3pWJJrwGDRMMOCZnSwY.jpg' },
   { id: 20, yr: 2021, watched: '2024-11', culture: 'us', rating: '8.0', imdb: 'https://www.imdb.com/title/tt10366460/', title: 'CODA', description: 'A movie about a fisher family of who parents and son are deaf.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/BzVjmm8l23rPsijLiNLUzuQtyd.jpg' },
  ];
  protected readonly title = signal('movie-db');
}
