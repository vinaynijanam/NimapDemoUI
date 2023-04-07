import { Component, Input, OnInit } from '@angular/core';
import { HomepageService } from '../service/homepage.service';
import { users } from '../homepage/model/user';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userprofiletamplate',
  templateUrl: './userprofiletamplate.component.html',
  styleUrls: ['./userprofiletamplate.component.css']
})
export class UserprofiletamplateComponent implements OnInit {
 @Input()fromParent: any;
 userlist:users[]=[];

  constructor(private service:HomepageService,private router:Router,private http:HttpClient){}
  ngOnInit(): void {
   // this.Edit(this.fromParent);
  }

  userobj:users=new users();

Edit(id:number):any
{
  this.service.EditUser("http://localhost:3000/users/"+id).subscribe(
    (response:any)=>{
    this.userobj=response;
    if(this.userobj.image)
    {
      this.userobj.image=this.userobj.image;
    }
    else if(this.userobj.image==undefined){
      this.userobj.image="assets/man-person-icon.jpg";
    }else{
      this.userobj.image="assets/man-person-icon.jpg";
    }
    this.gotonextpage();
  })
}

gotonextpage(){
  this.router.navigate(["/homepage",this.userobj.id])
}
}
