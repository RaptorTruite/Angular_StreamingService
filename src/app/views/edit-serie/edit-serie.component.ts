import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.css']
})
export class EditSerieComponent implements OnInit {

  serie: Serie | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private serieService: SerieService) {
    const id = parseInt(this.route.snapshot.params.id);
    this.serieService
    .getSerieById(id)
    .then((serie:Serie) => this.serie = serie);
   }

  ngOnInit(): void {

  }

  onSubmitEditSerie(serieEdited: Serie): void{
    this.serieService
    .editSerie(serieEdited)
    .then(() => this.router.navigateByUrl('series'));
  }

}
