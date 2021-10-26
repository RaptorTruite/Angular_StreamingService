import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { AddSerieComponent } from './views/add-serie/add-serie.component';
import { EditSerieComponent } from './views/edit-serie/edit-serie.component';
import { ListSerieComponent } from './views/list-serie/list-serie.component';
import { SingleSerieComponent } from './views/single-serie/single-serie.component';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth/auth.service';
import { SerieService } from './services/serie/serie.service';
import { CommentaryService } from './services/commentary/commentary.service';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    SerieFormComponent,
    ErrorsFormComponent,
    AddSerieComponent,
    EditSerieComponent,
    ListSerieComponent,
    SingleSerieComponent,
    LoginComponent,
    ErrorComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    SerieService,
    CommentaryService,
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
