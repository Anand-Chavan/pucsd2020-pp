import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './get/get.component';
import { PutComponent } from './put/put.component';
import { PostComponent } from './post/post.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
{ path: 'get', component:GetComponent},
{ path: 'put', component:PutComponent},
{ path: 'post', component:PostComponent},
{ path: 'delete', component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
