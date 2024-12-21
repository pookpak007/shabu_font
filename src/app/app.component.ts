import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaintComponent } from './layouts/maint/maint.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MaintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shabu';
}
