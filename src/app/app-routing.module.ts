import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { LoginComponent } from './login/login.component';
import { NotesPageComponent } from './notes-page/notes-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'create-new-account', component: CreateNewAccountComponent },
  { path: 'notes', component: NotesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
