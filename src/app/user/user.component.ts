// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from "@angular/router";
// import { AppService } from "src/app/app.service";

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//    res:any[];
//   constructor(private service:AppService, private route:ActivatedRoute) { }
//    lang = this.route.snapshot.params['name'];
 
//    getUser(){
//      this.service.getData(this.lang).subscribe((response)=>this.res=response.json());
//      console.log(this.res);
//    }
// }
import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  lang = this.route.snapshot.params['name'];
  loading: boolean = false;
  results:Object[];
  repos;
  searchField: FormControl;
  dataFromChild: any;
  
  constructor(private service: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.service.getData(this.lang).subscribe((data) => {
      console.log((data.items).slice(1,11));
      this.loading = false
      this.results = (data.items).slice(1,11);

    });
}
handleNotify(eventData : any){
     this.dataFromChild = eventData;
}
}

