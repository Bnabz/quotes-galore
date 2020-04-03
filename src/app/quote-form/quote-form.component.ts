import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
