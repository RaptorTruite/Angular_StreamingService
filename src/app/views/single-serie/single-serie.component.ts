import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/services/serie/serie.service';

@Component({
  selector: 'app-single-serie',
  templateUrl: './single-serie.component.html',
  styleUrls: ['./single-serie.component.css']
})
export class SingleSerieComponent implements OnInit {

  serie: Serie | undefined;
  showCommentForm: boolean;

  constructor(private serieService: SerieService, private route: ActivatedRoute) {
    this.showCommentForm = true;
   }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params.id);

    this.serieService
    .getSerieById(id)
    .then(serie => this.serie = serie);
  }

  onClickAddCommentBtn(): void {
    this.showCommentForm = !this.showCommentForm;
  }
}
