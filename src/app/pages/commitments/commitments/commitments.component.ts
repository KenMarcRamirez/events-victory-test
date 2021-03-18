import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commitments',
  templateUrl: './commitments.component.html',
  styleUrls: ['./commitments.component.scss']
})
export class CommitmentsComponent implements OnInit {

  testForm: FormGroup
  headerContent = {
    title: 'Sign Up',
    subtitle: ''
  }

  constructor(
    private route: Router
  ) {
   }

  ngOnInit() {
  }

  contact() {
    this.route.navigate(['/question'])
  }

}
