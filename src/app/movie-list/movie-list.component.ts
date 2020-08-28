import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubmissionService } from '../submission.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movieRef: any;
  @Output() detailEvent = new EventEmitter<void>();
  @Output() addMovieEvent = new EventEmitter<void>();
  baseUrl: string = 'https://image.tmdb.org/t/p/w154';

  constructor(private service: SubmissionService) {}

  ngOnInit(): void {}
  showDetails = () => {
    this.detailEvent.emit();
  };

  addMovie = () => {
    this.addMovieEvent.emit();
  };
}
