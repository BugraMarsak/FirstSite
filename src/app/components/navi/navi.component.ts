import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private userService:UserService) { }
  users:User;
  ngOnInit(): void {
   // this.getById();
  }

  // getById(){
  //   let id = +localStorage.getItem("userId") 
  //   this.userService.getuserById(id).subscribe(response=>{
  //     this.users = response.data
  //   })
    
  // }
  checkUserId(){
    if(localStorage.getItem("token")){
      return false;
    }
    else{
      return true;
    }
  }
}
