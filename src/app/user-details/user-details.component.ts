import { Component, OnInit } from '@angular/core';
import { Input,Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() item :any;
  @Output()
  notify : EventEmitter<any>= new EventEmitter<any>();

 
  constructor() { }
 
  ngOnInit() {
     
  }
  handleClick(){
    this.notify.emit(this.item);
  }

}
