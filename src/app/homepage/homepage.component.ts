import { Component,OnInit } from '@angular/core';
import { HomepageService } from '../service/homepage.service';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { users } from './model/user';
import { UserprofiletamplateComponent } from '../userprofiletamplate/userprofiletamplate.component';
//import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  invalid!:false;
  userobj:users=new users();
  userlist:users[]=[];


  formvalue!:FormGroup;
  firstname!: string;
constructor(private formbuilder:FormBuilder,private service:HomepageService ,private router:Router ,private active:ActivatedRoute){}

  ngOnInit(): void {
    this.active.snapshot.paramMap.get("id")
    
    this.formvalue=this.formbuilder.group({

      firstname:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      mobileno:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      image:new FormControl('',Validators.required)


    })




  }

  goToNextpage(){
    this.router.navigate(['/user'])
  }

onfiletolink(e:any){
  if(e.target.files){
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.userobj.image=event.target.result;
    }
  }
}
isChecked:boolean=true;
onsubmit(e:any){
  if(this.isChecked==false){
    this.isChecked=true;
  }
  else{
    this.isChecked=false;
  }
}
age!:number;
valueChanged(e:any){
  this.age=e.target.value;
}
  aa!: UserprofiletamplateComponent;
  clicked=false;
  userobjid!:number;
postUser():any
{
  // this.userobjid=ID;
  // this.clicked=true;
  this.service.postUser("http://localhost:3000/users",this.userobj).subscribe(
    (response:any)=>{
    if(response !=null){
      
      alert("data save")
    this.goToNextpage();
      
    }
    else{
      alert("data not save");
    }
  })
  this.formvalue.reset();
  this.aa.Edit(this.userobj.id);
}

}
