import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { dadosToalha } from './entidades/dadosToalha.component'
import { appServices } from './app.services'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oDados:dadosToalha= new dadosToalha;

  oForm: FormGroup = this.fb.group({
            desafioToalha     :  this.fb.group({
            codigo            : this.fb.control(''),
            nome              : this.fb.control(''),
            nomereduzido      : this.fb.control(''),
            loja              : this.fb.control(''),
            endereco          : this.fb.control(''),
            tipo              : this.fb.control(''),
            estado            : this.fb.control(''),
            municipio         : this.fb.control('')
    })

  })
  constructor(
      private fb: FormBuilder,
      private service:appServices) {
  }

  add(){

    console.log(this.oForm);
  
     this.oDados.codigo       = this.oForm.value.desafioToalha.codigo
     this.oDados.nome         = this.oForm.value.desafioToalha.nome
     this.oDados.nomereduzido = this.oForm.value.desafioToalha.nomereduzido
     this.oDados.loja         = this.oForm.value.desafioToalha.loja
     this.oDados.endereco     = this.oForm.value.desafioToalha.endereco
     this.oDados.tipo     = this.oForm.value.desafioToalha.tipo
     this.oDados.estado     = this.oForm.value.desafioToalha.estado
     this.oDados.municipio     = this.oForm.value.desafioToalha.municipio
     
     this.service.enviarDados(this.oDados)

  }

}
