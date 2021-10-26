import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Serie } from 'src/app/models/serie.model';
import { CommentaryService } from 'src/app/services/commentary/commentary.service';
import { Commentary } from '../../models/commentary.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input() serie: Serie;
  commentary: Commentary;
  form: FormGroup;

  constructor(private fb: FormBuilder, private commentaryService: CommentaryService) {
    this.serie = new Serie(0, '', new Date(), 0, '', '', '');
    this.commentary = new Commentary(0, '', '');
    this.form = new FormGroup({});

    this.initForm();
   }

  ngOnInit(): void {
  }

  initForm(): void {
    this.form = this.fb.group({
      author: new FormControl(
        null,
        [Validators.required]
      ),

      content: new FormControl(
        null,
        [Validators.required,
        Validators.maxLength(150)
      ])
    });
  }

  onSubmitForm(): void {
    if(this.form.valid) {
    this.commentaryService.add(this.serie, this.form.value)
    .then(() => this.form.reset());
   }

  }

}
