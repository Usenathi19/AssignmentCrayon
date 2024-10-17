import { Component } from '@angular/core';
import { ClientService } from '../client.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent {
  meetingTopic: string = '';
  numberOfPeople: number = 0;
  meetingDate: string = '';
  meetingTime: string = '';
  client_id: number = 1; 

  constructor(private clientService: ClientService) {}

  
  onSubmit() {
    const meetingData = {
      client_id: this.client_id,
      topic: this.meetingTopic,
      number_of_people: this.numberOfPeople,
      meeting_date: this.meetingDate,
      meeting_time: this.meetingTime,
    };

    this.clientService.addMeeting(meetingData).subscribe(response => {
      console.log('Meeting Scheduled: ', response);
      
      this.resetForm();
    }, error => {
      console.error('Error scheduling meeting:', error);
    });
  }

  
  private resetForm() {
    this.meetingTopic = '';
    this.numberOfPeople = 0;
    this.meetingDate = '';
    this.meetingTime = '';
  }
}
