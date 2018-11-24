import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { FormdetailsComponent } from './formdetails/formdetails.component';
import { FormDataService } from './form-data.service';

@NgModule({
  declarations: [
    AppComponent, 
    FormComponent,
    FormdetailsComponent,
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path : '' , component : FormComponent },
      { path : 'formdetails' , component : FormdetailsComponent}
    ])
  ],
  providers: [FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
