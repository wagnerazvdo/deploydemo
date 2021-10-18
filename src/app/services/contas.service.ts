import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { IExtrato } from '../interfaces/extrato';
import { ISaqueDeposito } from '../interfaces/saqueDeposito';
import { ITransferencia } from '../interfaces/transferencia';


@Injectable({
  providedIn: 'root'
})
export class ContaService {


  constructor(private http: HttpClient) { }


}
