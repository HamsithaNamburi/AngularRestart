import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuyerComponent } from './buyer/buyer.component';
import { BuyerItemComponent } from './Buyer/buyer-item/buyer-item.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PaymentComponent } from './Buyer/payment/payment.component';
import { SellerComponent } from './seller/seller.component';
import { ViewItemComponent } from './seller/view-item/view-item.component';
import { AddItemsComponent } from './seller/add-items/add-items.component';
import { AdminComponent } from './admin/admin.component';
import { AddcategoryComponent } from './Admin/addcategory/addcategory.component';
import { AddRemoveBuyerComponent } from './Admin/add-remove-buyer/add-remove-buyer.component';
import { AddRemovesellerComponent } from './Admin/add-removeseller/add-removeseller.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BuyerComponent,
    BuyerItemComponent,
    ViewCartComponent,
    PaymentComponent,
    SellerComponent,
    ViewItemComponent,
    AddItemsComponent,
    AdminComponent,
    AddcategoryComponent,
    AddRemoveBuyerComponent,
    AddRemovesellerComponent
  ],
  imports: [
    BrowserModule,
FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
