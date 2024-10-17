import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  standalone: true,
  imports: [FormsModule, NgIf],
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  clientName: string = '';
  clientEmail: string = '';
  clientAddress: string = '';
  clientPassword: string = '';
  clientRepeatPassword: string = '';
  registrationMessage: string = '';

  constructor(private clientService: ClientService) {}

  onSubmit() {
    if (this.clientPassword !== this.clientRepeatPassword) {
      alert('Passwords do not match');
    } else {
      this.registrationMessage = 'Registering...'; 
      const clientData = {
        name: this.clientName,
        email: this.clientEmail,
        address: this.clientAddress,
        password: this.clientPassword,
      };

      this.clientService.addClient(clientData).subscribe(response => {
        console.log('Client Registered: ', response);
        this.registrationMessage = 'Client Registered Successfully!';
      }, error => {
        console.error('Error registering client:', error);
        this.registrationMessage = 'Registration failed, please try again.'; 
      });
    }
  }
}
