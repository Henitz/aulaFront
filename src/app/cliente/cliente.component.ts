import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



import { Clientes } from './clientes'
import { ClientesService } from './clientes.service';
import { faSave, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  success: boolean = false;
  cliente: Clientes;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;

  //parte 2
  id!: number;



  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {
    this.cliente = new Clientes();
  }

  ngOnInit(): void {
  }


  save() {
    console.log("Salvar Aqui")
   // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
  // this.service.save(this.cliente, this.accountId).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
   if(!this.id){
    console.log(" NAO TEM ID PORTANTO EH NOVO POSTMAPPING")
    this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
    }
   if(this.id){
    console.log("  TEM ID PORTANTO EH ALTERACAO PUTMAPPING")
    this.service.update(this.id, this.cliente).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
    }
   //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
  }





}
