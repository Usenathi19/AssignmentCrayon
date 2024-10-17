import { Routes } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';

export const routes: Routes = [
  { path: 'client-form', component: ClientFormComponent },
  { path: 'meeting-form', component: MeetingFormComponent },
  { path: '', redirectTo: '/client-form', pathMatch: 'full' }
];
