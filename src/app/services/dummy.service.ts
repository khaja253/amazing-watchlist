import { Component, OnInit } from '@angular/core';
import {Show} from '../models/show.model';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  shows: Array<Show>;
  constructor(private dummyService: DummyService) {
    this.dummyService.getShows().subscribe((s) => {
      this.shows = s;
    });
  }

  ngOnInit(): void {
  }

}
