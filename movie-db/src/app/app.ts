import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tile } from './tile/tile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  items = [
   { id:  0, y: 1956, watched: '2025-06', culture: 'jp', title: 'Ikiru', description: 'A movie asking the question of how to give our lives meaning.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/dgNTS4EQDDVfkzJI5msKuHu2Ei3.jpg' },
   { id:  1, y: 1957, watched: '2024-01', culture: 'us', title: '12 Angry Men', description: 'A movie about humanity and everything which is important for human life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg' },
   { id:  2, y: 1961, watched: '2024-01', culture: 'jp', title: 'Yojimbo', description: 'One of the most beautifully told stories.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg' },
   { id:  3, y: 1968, watched: '2026-02', culture: 'us', title: 'Guess Who is Coming to Dinner', description: 'A great historic movie about how skin differences were overcome.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/fkHeYWahNbhxhuLefaAg553lYo5.jpg' },
   { id:  4, y: 1981, watched: '2025-08', culture: 'de', title: 'Das Boot', description: 'A great movie about the reality of war.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/arqCQXHqgzZG2m5111FV4nA13RN.jpg' },
   { id:  5, y: 1985, watched: '2024-02', culture: 'us', title: 'The Karate Kid', description: 'A movie with many lessons which kids and adults have to learn.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/1mp4ViklKvA0WXXsNvNx0RBuiit.jpg' },
   { id:  6, y: 1988, watched: '2025-06', culture: 'it', title: 'Nuovo Cinema Paradiso', description: 'A great movie teaching us about life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/gCI2AeMV4IHSewhJkzsur5MEp6R.jpg' },
   { id:  7, y: 1994, watched: '2024-10', culture: 'us', title: 'Shawshank Redemption', description: 'A classic, one of the best underdog tales.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg' },
   { id:  8, y: 1999, watched: '2024-12', culture: 'us', title: 'The Matrix', description: 'Great modern fantasy story.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/p96dm7sCMn4VYAStA6siNz30G1r.jpg' },
   { id:  9, y: 2003, watched: '2023-07', culture: 'us', title: 'Holes', description: 'Wow, the book was good and the film is equally good.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/o2Dm2mcE1qW8vT0bpsJO5OMBbqa.jpg' },
   { id: 10, y: 2003, watched: '2026-02', culture: 'sv', title: 'Evil (Ondskan)', description: 'An amazing movie about what it means for a person to be evil.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/1qqI4qh3VP7jUBRTGsIxh1miNKJ.jpg' },
   { id: 11, y: 2003, watched: '2026-02', culture: 'us', title: 'Ratatouille', description: 'Well-known movie, sweet story about food, love and talent.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg' },
   { id: 12, y: 2007, watched: '2023-08', culture: 'fr', title: 'Hunting and Gathering (Ensemble, Cest Tout)', description: 'A movie about friendship, the relationship of parents to their kids.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/dNgTyFxp84SWeOkgdWeZDiXsADG.jpg' },
   { id: 13, y: 2008, watched: '2025-06', culture: 'us', title: 'Wall-e', description: 'Great, positive and cute movie.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg' },
   { id: 14, y: 2009, watched: '2025-10', culture: 'ko', title: 'Castaway on the Moon', description: 'A movie about two lost souls in the modern world.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/gGzovvmOEyNVUu4WEHtw9wfDsqI.jpg' },
   { id: 15, y: 2011, watched: '2025-02', culture: 'fr', title: 'Intouchables', description: 'A great movie, even a very spiritual movie.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/1QU7HKgsQbGpzsJbJK4pAVQV9F5.jpg' },
   { id: 16, y: 2012, watched: '2023-07', culture: 'us', title: 'The Dictator', description: 'A masterpiece by Sacha Baron Cohen.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/n0W7kajF4GFMRk2c0wWwMQqTaDM.jpg' },
   { id: 17, y: 2013, watched: '2025-06', culture: 'mx', title: 'Instructions Not Inclucded', description: 'A great movie with lots of lessons.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/x3Ygv0aZbZ3iUMeXyIlSu0Ugyp5.jpg' },
   { id: 18, y: 2015, watched: '2023-05', culture: 'de', title: 'Heidi', description: 'A wonderful movie teaching the most beautiful things in life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/ue6L0x3C9V4c5kIiWnEIOPwtGhw.jpg' },
   { id: 19, y: 2015, watched: '2025-10', culture: 'jp', title: 'Wood Job', description: 'An amazing Japanese movie about differences of city life and country life.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/gvo0367R3pWJJrwGDRMMOCZnSwY.jpg' },
   { id: 20, y: 2021, watched: '2024-11', culture: 'us', title: 'Coda', description: 'A movie about a fisher family of who parents and son are deaf.', img: 'https://image.tmdb.org/t/p/w600_and_h900_face/BzVjmm8l23rPsijLiNLUzuQtyd.jpg' },
  ];
  protected readonly title = signal('movie-db');
}
