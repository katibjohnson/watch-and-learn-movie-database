import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies: any;
  showIndex: number;
  baseUrl: string = 'https://image.tmdb.org/t/p/w300';
  favorites: any = [];
  constructor(
    private service: SubmissionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchMovies();
  }

  searchMovies = () => {
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);
      let language = params.get('language');
      let decadeGTE = params.get('decadeGTE');
      let decadeLTE = params.get('decadeLTE');
      let keyword = params.get('keyword');
      this.service
        .getData(language, decadeGTE, decadeLTE, keyword)
        .subscribe((results) => {
          console.log(results.results);
          this.movies = results.results;
        });
    });
  };

  setShowIndex = (index: number) => {
    this.showIndex = index;
    console.log(this.showIndex);
  };

  sendFav = (movie: any) => {
    this.service.addFav(movie);
    console.log(movie);
  };
}
