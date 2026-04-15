import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FilterMacrotemasComponent } from '../filter-macrotemas/filter-macrotemas.component';
import { FilterTemasComponent } from "../filter-temas/filter-temas.component";

import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FilterMacrotemasComponent, FilterTemasComponent, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  // CRIANDO O FORMGROUP

  // 1. criando e inicializando o formgroup (que será o formulário inteiro)
  formEmail: FormGroup = new FormGroup([]);

  // 2. 
  


  data = [
    { value: 'temas-estrategicos', label: 'Temas Estratégicos' },
    { value: 'macrotemas', label: 'Macrotemas' },
  ];

  isDropdownOpen = false;
  selectedData: any[] = [];
  //selectedLabel = '';

  // COMUNICAÇÃO COM A API (BFF)
  private readonly API = 'http://127.0.0.1:8000/api';
  private http = inject(HttpClient);

    // 
  enviaEmail() {
    this.http.get(this.API).subscribe({
      next: (data) => console.log('Resposta do servidor:', data),
      error: (err) => console.error('Erro na requisição:', err),
    });
  }

  verDados(){
    console.log()
  }

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Evita que o evento de clique feche o menu imediatamente
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectData(item: any) {
    const ind = this.selectedData.findIndex((x) => x.value === item.value);

    if (ind == -1) {
      this.selectedData = [...this.selectedData, item];
    } else {
      this.selectedData = this.selectedData.filter(x => x.value !== item.value);
    }
  }

  isItemSelected(item: any): boolean {
    return this.selectedData.some((x) => x.value === item.value);
  }

  placeholderData():string{
    if (this.selectedData.length == 0){
      return "Selecione os conjuntos de dados desejados";
    }
    
    return this.selectedData.map(item => item.label).join(', ');
  }
}
