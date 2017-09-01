import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FirebaseAuthService } from './providers/firebase-auth.service';
import { FirebaseStorageService } from './providers/firebase-storage.service';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { RouterModule, Routes, Route } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { FirebaseDatabaseService } from './providers/firebase-database.service';

import * as env from '../environments/environment';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';

const config = env.environment.config;

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'create', component: CreatePageComponent },
  { path: 'list', component: ListPageComponent },
  { path: 'profile/:key', component: ProfileViewComponent },
  { path: '', component: ListPageComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    CreatePageComponent,
    ListPageComponent,
    ProfileViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
  ],
  providers: [FirebaseAuthService, FirebaseStorageService, FirebaseDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
