import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { GeolocationService } from '../geolocation.service';
import { DialogService } from '../dialog.service';
import { Network } from '@capacitor/network';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  latitude: number = 0;
  longitude: number = 0 ;
  conectado: boolean = false;
  tipoConexion: string = '';

  constructor(private geolocationService: GeolocationService, private dialogservice: DialogService) {}

  async getCurrentLocation() {
    try {
      const coordinates = await this.geolocationService.getPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    } catch (error) {
      console.error('Error getting location:', error);
    }
  }
  showAlert() {
    this.dialogservice.showAlert('Alerta', 'Esta es una alerta ');
  }

  
  async checkConnection() {
    const status = await Network.getStatus();
    this.conectado = status.connected;
    this.tipoConexion = status.connectionType;
    console.log('Conectado:', status.connected);     
    console.log('Tipo de conexión:', status.connectionType); 
  }
}