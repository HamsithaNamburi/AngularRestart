import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerItemComponent } from './Buyer/buyer-item/buyer-item.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PaymentComponent } from './Buyer/payment/payment.component';
import { SellerComponent } from './seller/seller.component';
import { AddItemsComponent } from './seller/add-items/add-items.component';
import { ViewItemComponent } from './seller/view-item/view-item.component';
import { AdminComponent } from './admin/admin.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddRemoveBuyerComponent } from './Admin/add-remove-buyer/add-remove-buyer.component';
import { AddRemovesellerComponent } from './Admin/add-removeseller/add-removeseller.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'buyer',component:BuyerComponent,children:[
    {path:'buyer-item',component:BuyerItemComponent},{path:'view-cart',component:ViewCartComponent},
    {path:'payment',component:PaymentComponent}]},
    {path:'seller',component:SellerComponent,children:[
      {path:'add-items',component:AddItemsComponent},{path:'view-item',component:ViewItemComponent}]},
      {path:'admin',component:AdminComponent,children:[
        {path:'addcategory',component:AddcategoryComponent},{path:'add-remove-buyer',component:AddRemoveBuyerComponent},
        {path:'add-removeseller',component:AddRemovesellerComponent},
        {path:'',redirectTo:'login',pathMatch:"full"}]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
