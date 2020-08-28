import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  url: string = 'https://api.themoviedb.org/3/discover/movie';
  keywordUrl: string = 'https://api.themoviedb.org/3/search/keyword';
  key: string = '774dc051d9e43ff6c87c14a756a1fabc';

  favs: any = [];
  constructor(private http: HttpClient) {}

  getKeywords = (keyword: string): any => {
    return this.http.get(this.keywordUrl, {
      params: {
        api_key: this.key,
        query: keyword,
      },
    });
  };

  getData: any = (
    language: string,
    decadeGTE: string,
    decadeLTE: string,
    keyword: string
  ): any => {
    return this.http.get(this.url, {
      params: {
        api_key: this.key,
        with_original_language: language,
        'primary_release_date.gte': decadeGTE,
        'primary_release_date.lte': decadeLTE,
        with_keywords: keyword,
      },
    });
  };

  addFav = (movie: any) => {
    this.favs.push(movie);
  };

  getFavs = () => {
    return this.favs;
  };
}
