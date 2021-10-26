import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.css']
})
export class AddSerieComponent implements OnInit {

  constructor(private serieService: SerieService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitAddSerie(serie: Serie): void {
    this.serieService.addSerie(serie)
    .then(() => {
      this.router.navigateByUrl('series');
    })
  }

}
