import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRandomContact, Results } from 'src/app/models/contact.interface';
import { RandomContactService } from 'src/app/services/random-contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{

  contact:IRandomContact | undefined; //con este input ahora lo tendriamos que hacer desde la pagina

  showRandomC:boolean=false;

  constructor(private router:Router, private randomContactService:RandomContactService){}

  ngOnInit(): void {

    this.randomContactService.obtenerRandomContact().subscribe((response:Results)=>{

      this.contact = response.results[0];//Se lo pasariamos al RandomContact

      console.table(this.contact.name);

      setTimeout(() => {
        this.showRandomC = true;
      }, 1000); // Show after 1 second

    });
      
  }

  obtenerListaContactos(num:number,sexo?:string){

    this.randomContactService.obtenerRandomContacts(num,sexo).subscribe({
      next:(response:Results[])=>{

        console.log(response);

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }

  volverHome(){
    this.router.navigate([''])
  }

}
