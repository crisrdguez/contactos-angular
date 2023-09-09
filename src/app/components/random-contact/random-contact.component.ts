import { Component, OnInit, Input, AfterViewInit , ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { IRandomContact, Results } from 'src/app/models/contact.interface';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactosService } from 'src/app/services/contactos.service';
import { RandomContactService } from 'src/app/services/random-contact.service';
import { tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-random-contact',
  templateUrl: './random-contact.component.html',
  styleUrls: ['./random-contact.component.scss']
})
export class RandomContactComponent implements OnInit, AfterViewInit{
  


  @Input() randomContact:IRandomContact | undefined; //con este input ahora lo tendriamos que hacer desde la pagina
  @Input() showRandomContact:boolean=false;

  //Datos que quiero guardar en la bbdd, los cojo del IRandomContact si le doy a YES
  id:string | undefined;
  nombre:string | undefined;
  apellido:string | undefined;
  localidad:string | undefined;
  email:string | undefined;
  edad:number | undefined;
  genero:string | undefined;

  //Necesito un string de contactos
  contactos:Contacto[]=[];

  //Para la tabla
  displayedColumns: string[] = ['nombre', 'apellido', 'localidad','email','edad','genero','acciones'];
  //dataSource = new MatTableDataSource(this.contactos);
  //dataSource= this.contactos;//Esto esta vacio
  dataSource!: MatTableDataSource<any>;
  
  //Para el filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

   //Paginacion
   @ViewChild(MatPaginator) paginator!: MatPaginator; //indico con ! que tiene que tener algun valor

   /*
   ngAfterViewInit() {
       this.dataSource.paginator = this.paginator;   
   }*/

   //Para que funcione el paginador, tengo que asegurarme que los datos (que se cargan de manera asincrona) se cargan antes de usar el paginator
   ngAfterViewInit() {
    /* ESTO LO USABA CON BBDD, USANDO OBSERVABLE
    // Utiliza switchMap para manejar datos asíncronos y evitar inicialización prematura del paginador
    this.contactoService.obtenerContactosBBDD().pipe(
      tap((misContactos: Contacto[]) => {
        
        this.contactos = Object.values(misContactos);
        this.contactoService.setContactos(this.contactos);
        this.dataSource = new MatTableDataSource(this.contactos);
        
      })
    ).subscribe(() => {
      // El paginador se inicializará después de que los datos se hayan cargado en el dataSource
      this.dataSource.paginator = this.paginator;
    });*/
    // Obtiene los contactos directamente del servicio
    this.contactos = this.contactoService.obtenerContactosBBDD();

    // Crea el MatTableDataSource a partir del array de contactos
    this.dataSource = new MatTableDataSource(this.contactos);

    // Configura el paginador después de cargar los datos
    this.dataSource.paginator = this.paginator;
  }

  constructor(private randomContactService:RandomContactService, private contactoService:ContactosService){

  }

  

  ngOnInit(): void {

    /* ESTO LO USABA PARA LA BBDD CON FIREBASE, ANTES EL METODO ME DEVOLVIA UN OBSERVABLE
    const self=this; //Capturar el contexto actual, Al capturar el contexto actual en la variable self, aseguras que puedes acceder correctamente a las propiedades y métodos del componente en el contexto de la función subscribe.

    this.contactoService.obtenerContactosBBDD().subscribe({
      next(misContactos: Contacto[]) {
        console.log("misContactos:")
          console.log(misContactos);
          
          self.contactos=Object.values(misContactos);//extraigo los valores de ese Observable y lo meto en mi array contactos, con lo cual este array tiene un registro
          //este array se lo quiero pasar(con este registro que tiene) al metodo

          self.contactoService.setContactos(self.contactos);//Sin esto, antes cuando agregaba un nuevo contacto todo lo anterior era sustituido por este nuevo registro
          //Cada vez que agreguemos un registro, se llama al metodo setEmpleados, se le pasa el registro, y se va agregando a los empleados
          //self.dataSource = self.contactos;//Meto en datasource los contactos que obtengo de la bbdd
          console.log("selfContactos:")
          console.log(self.contactos);
          self.dataSource = new MatTableDataSource(self.contactos);

          
      },
    })*/
    this.contactos = this.contactoService.obtenerContactosBBDD(); // Asigna el array directamente
    this.dataSource = new MatTableDataSource(this.contactos);
      
  }

  guardarContacto(){
    //guarda contacto, mensaje de contacto guardado y se ve en una lista con muchos muas datos(sacamos del api y guardamos en bbdd), por ultimo se genera usuario nuevo
    //uso de firebase.// schematics

    //Accedo a los datos de randomContact
    this.id = this.randomContact?.id.value;
    this.nombre = this.randomContact?.name.first;
    this.apellido = this.randomContact?.name.last;
    this.localidad = this.randomContact?.location.city;
    this.email = this.randomContact?.email;
    this.edad = this.randomContact?.dob.age;
    this.genero = this.randomContact?.gender;
    console.log("Dentro del metodo guardarContacto, tras pulsar en yes:");
    console.log(this.nombre);
    console.log(this.id);

    const contactoNuevo = new Contacto(this.id, this.nombre,this.apellido,this.localidad,this.email,this.edad,this.genero);

    this.contactoService.agregarContactoServicio(contactoNuevo);

    // Actualizamos el dataSource de la tabla con la nueva lista de contactos
    this.dataSource.data = this.contactos;

    // Actualizamos el paginador para que funcione con la nueva lista de contactos
    this.dataSource.paginator = this.paginator;

    
    

    //despues de agregar el contacto que quiero, tengo que generar nuevo contacto, por lo que llamo a obtener nuevo contacto
    this.obtenerNuevoContacto();
    
  }

  obtenerNuevoContacto(){

    this.randomContactService.obtenerRandomContact().subscribe({
      next:(response:Results)=>{

        this.randomContact = response.results[0];//Se lo pasariamos al RandomContact

      },
      error:(error:Error)=>{
        console.error(`Error ${error}`)
      },
      complete:()=>{console.info("Peticion completada")}
    
    });

  }

  //Modificar contacto
  modificarContacto(){
    alert("No tienes permisos para modificar el contacto");
  }

  //Eliminar Contacto
  eliminarContacto(id:string){
    //llamo al metodo que modifica empleados dentro de mi servicio
    if(id != undefined){
      this.contactoService.eliminarContacto(id);

      // Actualizamos la lista de contactos en este componente
  this.contactos = this.contactos.filter(contacto => contacto.id !== id);

  // Actualizamos el dataSource de la tabla con la nueva lista de contactos
  this.dataSource.data = this.contactos;

  // Actualizamos el paginador para que funcione con la nueva lista de contactos
  this.dataSource.paginator = this.paginator;

    }else{
      alert("ese id no existe");
    }
    
  }

 


  /*
  actualizarDatos(){
    const self=this; //Capturar el contexto actual, Al capturar el contexto actual en la variable self, aseguras que puedes acceder correctamente a las propiedades y métodos del componente en el contexto de la función subscribe.

    this.contactoService.obtenerContactosBBDD().subscribe({
      next(misContactos) {
          console.log(misContactos);
          
          self.contactos=Object.values(misContactos);//extraigo los valores de ese Observable y lo meto en mi array contactos, con lo cual este array tiene un registro
          //este array se lo quiero pasar(con este registro que tiene) al metodo

          self.contactoService.setContactos(self.contactos);//Sin esto, antes cuando agregaba un nuevo contacto todo lo anterior era sustituido por este nuevo registro
          //Cada vez que agreguemos un registro, se llama al metodo setEmpleados, se le pasa el registro, y se va agregando a los empleados
          //self.dataSource = self.contactos;//Meto en datasource los contactos que obtengo de la bbdd
          self.dataSource = new MatTableDataSource(self.contactos);

          
      },
    })
  }*/

}
