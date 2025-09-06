import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
