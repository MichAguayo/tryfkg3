import { Injectable } from '@angular/core';
import { Dialog } from '@capacitor/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  
  async showAlert(title: string, message: string) {
    await Dialog.alert({ title, message });
  }
}