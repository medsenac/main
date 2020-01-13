import { PacienteService } from 'src/app/services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Paciente } from '../interfaces/paciente';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-pacientedetalhe',
  templateUrl: './pacientedetalhe.page.html',
  styleUrls: ['./pacientedetalhe.page.scss'],
})
export class PacientedetalhePage implements OnInit {

  public paciente :Paciente = {};
private loading:  any;
private pacienteSubscription: Subscription;
public pacienteId: any;

  constructor( private PacienteService: PacienteService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private ToastCtrl:ToastController) {
      
      this.pacienteId = this.activatedRoute.snapshot.params["id"];
    if (this.pacienteId) this.loadPaciente();
  
  }

  ngOnInit() {
  }

  loadPaciente(){
    this.pacienteSubscription = this.PacienteService
    .getPaciente(this.pacienteId)
    .subscribe(data =>{
      this.paciente = data;
    })
  }

  abrirDetalhe(paciente){

    this.navCtrl.navigateRoot(['/editsujeito'])
    
  }
  back(){
    this.navCtrl.navigateBack('/tabs/list-paciente')
  }
}
