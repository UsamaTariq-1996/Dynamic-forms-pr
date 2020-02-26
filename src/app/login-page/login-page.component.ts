import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { UserauthService } from "../userauth.service";
import { first } from 'rxjs/operators';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private router: Router,
    private authService: UserauthService
  ) {}

  userName:string;
  password:string;
  ngOnInit() {}


     loginUser() {
    this.authService.userAuth(this.userName, this.password).pipe(first()).subscribe(res => {

      console.log(res);
      if (res.code == "-1") {

        this.messageService.add({
          severity: "error",
          summary: "Login Failed",
          detail: "Invalid User ID and Password"
        });
     
      }
    
       else {
        this.messageService.add({
          severity: "success",
          summary: "Login Successfully",
          detail: "Welcome User"
        });
     sessionStorage.setItem('token', res.detailData.accessToken);
     sessionStorage.setItem('username', this.userName);
     var name = 'usama';
     localStorage.setItem('name',name);
         setTimeout(() => {
           this.router.navigateByUrl("/adminpage");
        }, 1000);
      }
    });
  }
  changePassword() {
    this.router.navigateByUrl("/changepassword");
  }
}
