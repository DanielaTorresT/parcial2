import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-detail',
  templateUrl: './cursos-detail.component.html',
  styleUrls: ['./cursos-detail.component.css']
})
export class CursosDetailComponent implements OnInit {
  cursoId!: string;
  constructor(
    private cursosService:CursosService,
  ) { }
  getCurso(){
    // this.cursosService.getCurso(this.cursoId)
  }

  ngOnInit() {
  }

}
