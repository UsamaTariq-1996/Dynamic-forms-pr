import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { NavlinksService } from './navlinks.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  items: MenuItem[];
  visibleSidebar1: boolean;
  constructor(private router:Router,private navlinkservice: NavlinksService) { }
  navbarOpen = false;
  public links = [];
 
  ngOnInit() {
    
this.getLinks();
}

getLinks() {
  this.navlinkservice
    .getLinks()
    .subscribe(res => {
      console.log("Eae", res);
      this.links = res;
    });
}
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
logout() {
  // remove user from local storage to log user out
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('username');
  this.router.navigateByUrl("");
  //this.currentUserSubject.next(null);
}
adminpage(){
  this.router.navigateByUrl("adminpage");
}
}
