import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-list-serie',
  templateUrl: './list-serie.component.html',
  styleUrls: ['./list-serie.component.css']
})
export class ListSerieComponent implements OnInit, OnDestroy {

  series: Array<Serie>;
  seriesSub: Subscription;
  constructor(private serieService: SerieService) {
    this.series = [];
    this.seriesSub = new Subscription();
  }

  ngOnInit(): void {
    this.seriesSub = this.serieService
    .series.subscribe(series =>{
      this.series = series;
    })
  }

  onClickDeleteSerie(serie: Serie){
    this.serieService.deleteSerie(serie);
  }

  ngOnDestroy(): void {
    this.seriesSub.unsubscribe();
  }
}
