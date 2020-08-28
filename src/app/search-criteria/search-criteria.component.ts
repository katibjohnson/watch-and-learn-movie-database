import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubmissionService } from '../submission.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  keywords: any;

  constructor(private service: SubmissionService, private router: Router) {}

  ngOnInit(): void {}
  getKeywords = (form: NgForm) => {
    let keyword = form.value.keyword.trim().toLowerCase();
    this.service.getKeywords(keyword).subscribe((response) => {
      console.log(response);
      this.keywords = response.results;
    });
  };

  search = (form: NgForm) => {
    console.log(form);
    this.router.navigate(['home'], {
      queryParams: {
        language: form.value.language,
        decadeGTE: form.value.decadeFrom,
        decadeLTE: form.value.decadeTo,
        keyword: form.value.keywordOption,
      },
    });
  };

  openWatchlist = () => {
    this.router.navigate(['watchlist']);
  };
}
