import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LugarComponent } from './pages/lugar/lugar.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'lugar',
      component: LugarComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
