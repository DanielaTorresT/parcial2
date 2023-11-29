import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {
  cursos:Array<Curso> = [];
  certfificado:boolean = true;
  ofrecen:string = "";
  constructor(private cursosService:CursosService) {} 
    getCursos() {
      this.cursosService.getCursos().subscribe(cursos => {
        // cursos.forEach(curso => { this.certfificado==curso.offers_certificate;})
        // this.ofrecen=this.ofrecen+","+cursos.id;
        
        this.cursos=cursos;
      });
       
        
       
      };
  
  
      
    
  
 

  ngOnInit() {
    this.getCursos();
  }

}
