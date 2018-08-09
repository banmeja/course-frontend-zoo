import { Component, OnInit } from '@angular/core';
import { User} from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    UserService
  ]
})
export class LoginComponent implements OnInit {

  
  public user: User;
  //otra forma de pulibcar un objeto, pero da error, por como se construye el objeto .>public user = new User();

  constructor(
    private _userService: UserService
  ) {

    //inicializar en blanco
    this.user = new User('','','','','','');
   }

  ngOnInit() {
    
  }
  onSubmit(){
    //es el evento que se ejecuta, y donde se invoca el servicio
    this._userService.login(this.user)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    ) 
  }

  

}