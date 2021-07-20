import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

   @Input() currentRoute: string;

  constructor(private router: Router) { 
    console.log(this.router.url);
    this.currentRoute = this.router.url;
  }

  ngOnInit(): void {
  }

}
