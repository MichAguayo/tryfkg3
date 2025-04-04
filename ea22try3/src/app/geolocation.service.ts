import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Coordinates:', coordinates); 
      return coordinates; 
    } catch (error) {
      console.error('Error getting location', error);
      throw error; 
    }
  }
}