import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-serie-form',
  templateUrl: './serie-form.component.html',
  styleUrls: ['./serie-form.component.css']
})
export class SerieFormComponent implements OnInit {

  @Input() serieToEdit: Serie | undefined;
  @Input() submitLabel: string;
  @Output() formSubmitted: EventEmitter<Serie>;

  form: FormGroup;

  serie: Serie;

  constructor(private fb: FormBuilder) {
    this.submitLabel = '';
    this.serie = new Serie(0, '', new Date(), 0, '', '', '');
    this.form = new FormGroup({});

    this.formSubmitted = new EventEmitter<Serie>();
  }

  ngOnInit(): void {
    if (this.serieToEdit) this.serie = this.serieToEdit;

    this.initForm();
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: new FormControl(
        null,
        [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(25)
      ]),

      dateFirstSeason: new FormControl(
        null,
        [Validators.required
      ]),

      numberOfSeason: new FormControl(
        null,
        [Validators.required,
        Validators.min(1)
      ]),

      description: new FormControl(
        null,
        [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250)
      ]),

      critic: new FormControl(
        null,
        [Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),

      picture: new FormControl(
        null,
        [Validators.required
      ])
  });

}

  onSubmitForm(): void {
    if(this.form.valid) this.formSubmitted.emit(this.serie);
  }
}
