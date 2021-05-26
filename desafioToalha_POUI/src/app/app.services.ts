import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, retry } from 'rxjs/operators';
import { dadosToalha} from './entidades/dadosToalha.component';

@Injectable()
export class appServices {

    constructor(private http: HttpClient) { }

    enviarDados(List: dadosToalha) {
        let aDados = { 
            codigo: List.codigo,
            nome: List.nome,
            nomereduzido: List.nomereduzido,
            loja: List.loja,
            endereco: List.endereco,
            tipo: List.tipo,
            estado:List.estado,
            municipio:List.municipio,

        };
    
        this.http.post(`${ environment.apiUrl }/desafioToalha`, aDados)
        .subscribe(
          resultado => {
            console.log(resultado)
          },
          erro => {
            if(erro.status == 400) {
              console.log(erro);
            }
          }
        );
      }
    
}
