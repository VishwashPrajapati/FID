import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'home', component:HomeComponent
  },
  {
    path:'menu', component:MenuComponent
  },
  {
    path:'dishdetail/:id',
    component:DishdetailComponent
  },
  {
    path:'cart/:id',
    component:CartComponent
  },
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
    
  },
  {
    path:'contactus',
    component:ContactUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
