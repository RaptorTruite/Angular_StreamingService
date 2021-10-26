import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Commentary } from 'src/app/models/commentary.model';
import { Serie } from 'src/app/models/serie.model';
import { CommentaryService } from '../commentary/commentary.service';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  series: BehaviorSubject<Array<Serie>>;

  constructor(private commentaryService: CommentaryService) {
    const serieToPush = [
      new Serie(0,
                'Le coeur a ses raisons',
                new Date('02/03/2005'),
                3,
                'A la mort du patriarche, les deux héritiers de la famille Montgomery, les jumeaux Brett et Brad, se déchirent pour prendre le contrôle de l\'empire familial. Amours, passions, trahisons, meurtres et complots rythment le quotidien de Saint-Andrews.',
                'Incroyable 9/10',
                'https://media.senscritique.com/media/000006491622/source_big/Le_coeur_a_ses_raisons.jpg'),
      new Serie(1,
        'The Good Place',
        new Date('09/19/2016'),
        4,
        'À sa mort, l\'égocentrique Eleanor Shellstrop se retrouve par erreur dans un monde paradisiaque. Déterminée à y rester, elle s\'efforce à devenir une meilleure personne, tout en s\'adaptant à ce nouveau monde.',
        'A mourir de rire 10/10',
        'https://fr.web.img6.acsta.net/pictures/18/11/16/15/20/4246939.jpg'),
      new Serie(2,
        'Community',
        new Date('09/17/2009'),
        4,
        'Jeff est avocat. Mais Jeff doit retourner à l\'université car son certificat a été invalidé.',
        'A regarder sans modération 11/10',
        'https://www.ecranlarge.com/uploads/image/001/150/accuy6pahegufvl30ognszpyw2y-085.jpg')
    ];
    this.series = new BehaviorSubject<Array<Serie>>(serieToPush);
    this.initComments(this.series.getValue());
   }

   initComments(series: Array<Serie>): void {
      this.series.next(this.commentaryService.setInitComments(series))
   }

   getSerieById(id: number): Promise<Serie>{
      return new Promise<Serie>((resolve, reject) => {
       const series = this.series.getValue();

       for(let serie of series){
         if(serie.id === id){
            resolve(serie);
            break;
         }
       }
     });
   }

   addSerie(serieToAdd: Serie): Promise<void>{
     return new Promise<void>((resolve, reject) => {
        const series = this.series.getValue();
        serieToAdd.id = series[series.length - 1].id + 1;
        series.push(serieToAdd);
        this.series.next(series);
        resolve();
     });
   }

   editSerie(serieToEdit: Serie): Promise<void>{
     return new Promise<void>((resolve, reject) => {
       const series = this.series.getValue();

       for(let [index, item] of series.entries()){
         if(item.id === serieToEdit.id){
            series[index] = serieToEdit;
            this.series.next(series);
            resolve();
            break;
          }
       }
     });
   }

   deleteSerie(serieToDelete: Serie){
     const series = this.series.getValue();

     for(let [index, item] of series.entries()){
       if(item.id === serieToDelete.id){
         series.splice(index, 1);
         this.series.next(series);
         break;
       }
     }
   }
}
