import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormDataService } from '../form-data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('form') public createForm: NgForm;
  subscriptions: string[] = ['Advanced', 'Basic', 'Pro'];
  email: any = '';

  constructor(private router: Router, private formDataSer: FormDataService) {
  }


  ngOnInit() {
  }

  save(form) {
    console.log(form.value)
    this.formDataSer.formData = form.value;
    this.router.navigate(['/formdetails'])
  }
  clear() {
    if (this.createForm.dirty) {
      confirm('you want to discard the changes')
      this.createForm.reset();
    }
    return true;
  }

}
