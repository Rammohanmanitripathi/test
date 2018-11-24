import { Component, OnInit } from '@angular/core';

import { FormDataService } from '../form-data.service';
@Component({
  selector: 'app-formdetails',
  templateUrl: './formdetails.component.html',
  styleUrls: ['./formdetails.component.scss']
})
export class FormdetailsComponent implements OnInit {
  submitedData;
  email;
  sbscrptn;
  constructor(private formDataSer: FormDataService) {
    this.submitedData = this.formDataSer.formData;
    console.log("this.submitedData");
    console.log(this.submitedData);
    this.email = this.submitedData.email;
    this.sbscrptn = this.submitedData.subscrptn;

  }

  ngOnInit() {
  }

}
