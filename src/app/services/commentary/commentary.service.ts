import { Injectable } from '@angular/core';
import { Commentary } from 'src/app/models/commentary.model';
import { Serie } from 'src/app/models/serie.model';

@Injectable({
  providedIn: 'root'
})
export class CommentaryService {
  firstComments = Array<Commentary>();
  secondComments = Array<Commentary>();
  thirdComments = Array<Commentary>();

  constructor() {

   }

  setInitComments(series: Array<Serie>): Array<Serie> {
    if(this.firstComments.length === 0) {
      this.firstComments = new Array<Commentary>();
      this.firstComments = [
        new Commentary(0,'Raptor Truite', 'Série complètement folle à l\'humour déjanté. Le cœur a ses raison, soap opéra québécois en 3 saison, parodie les séries américaines comme Les Feux de l\'amour. Fou rire garantie à chaque épisode de 20 minutes.', new Date('10/15/2017 12:34')),
        new Commentary(1,'Saumon Volant', 'Excellent. Tous les soap devraient être traités de la sorte. Anne Dorval et Marc Labrèche sont trop drôles.', new Date('08/07/2018 17:48')),
        new Commentary(2,'Baleine Salé', 'excellent ,trop drôle et déjanté, des acteurs à mourir de rire et des situations délirantes bref j\'adore!', new Date('02/09/2018 11:17')),
        new Commentary(3,'Brochet Con', 'Excellente série, très drôle et toujours surprenante même après plusieurs visionnages !', new Date('03/30/2019 15:57'))
      ]
      series[0].setCommentaries(this.firstComments);
    }

    if(this.secondComments.length === 0) {
      this.secondComments = new Array<Commentary>();
      this.secondComments = [
        new Commentary(0, 'Raptor Truite', 'Excellente ! Tout y est de l\'humour, de la bonne vibes et de la réflexion', new Date('10/05/2017 16:10')),
        new Commentary(1, 'Saumon Volant', 'trop bien comme série très original drôle et captivant a voir', new Date('01/14/2018 18:51')),
        new Commentary(2, 'Baleine Salé', 'J\'ai hâte de pouvoir voir les prochaines saisons.', new Date('08/11/2018 12:21')),
        new Commentary(3, 'Brochet Con', 'Une très bonne petite série avec des épisodes de 30 min environ, cela se regarde bien et l.humour est bien agréable. Ajouter que la série se termine complètement avec une fin qui n\'est pas bâclée, je la recommande.', new Date('02/20/2020 20:20')),
      ]
      series[1].setCommentaries(this.secondComments);
    }

    if(this.thirdComments.length === 0) {
      this.thirdComments = new Array<Commentary>();
      this.thirdComments = [
        new Commentary(0, 'Raptor Truite', 'Humour lourd, personnages stéréotypés, comédie forcée, je ne conseille cette série à personne ! série sur-estimée! (regardez plutôt brooklyn 99). Dommage qu\'on ne puisse pas mettre 0 étoiles, sinon je l\'aurais fait.', new Date('06/11/2021 10:37')),
        new Commentary(1, 'Saumon Volant', 'excellent, c\'est drole, fun. Quel dommage de voir certains acteurs partir vers la fin, mais malgré tout la série reste un must', new Date('06/30/2021 14:05')),
        new Commentary(2, 'Baleine Salé', 'C\'est nul. 1er épisode regardé : pas drôle, pas fin, pas original. 2eme épisode tenté (on ne sait jamais) : toujours aussi plat et pas drôle. Et dire qu\'il y a 6 saisons comme ça ...', new Date('08/06/2021 05:48')),
        new Commentary(3, 'Brochet Con', 'Les premières saisons sont drôles et les personnages deviennent attachant. Malheureusement, les 2 dernières saisons ne sont pas utiles et gâchent la fin de la série.', new Date('10/22/2021 11:11')),
      ]
      series[2].setCommentaries(this.thirdComments);
    }

    return series;
  }

  add(serie: Serie, comment: Commentary): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      comment.id = serie.commentaries.length
      comment.date = new Date();
      serie.commentaries.push(comment);
      resolve();
    })
  }
}
