import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from "./form/form.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormularioObservatorio';
}
