import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{

  constructor(private router:Router){}

  ngOnInit(): void {
      
  }

  volverHome(){
    this.router.navigate([''])
  }

}
