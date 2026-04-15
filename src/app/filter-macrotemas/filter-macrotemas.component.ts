import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-macrotemas',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './filter-macrotemas.component.html',
  styleUrl: './filter-macrotemas.component.css',
})
export class FilterMacrotemasComponent {
  years = [
    { value: 2023, label: '2023' },
    { value: 2024, label: '2024' }
  ];

  regions = ['N', 'NE', 'CO', 'SE', 'S'];

  isDropdownYearOpen = false;
  selectedYear = this.years[0];
  //selectedLabel = '';

  isDropdownRegionOpen = false;
  selectedRegion = 'Todas';

  toggleDropdownYear(event: Event) {
    event.stopPropagation(); // Evita que o evento de clique feche o menu imediatamente
    this.isDropdownYearOpen = !this.isDropdownYearOpen;
  }

  selectYear(item: any) {
    this.selectedYear = item;
    this.isDropdownYearOpen = false;
  }


  toggleDropdownRegion(event: Event) {
    event.stopPropagation(); // Evita que o evento de clique feche o menu imediatamente
    this.isDropdownRegionOpen = !this.isDropdownRegionOpen;
  }

  selectRegion(item: any) {
    this.selectedRegion = item;
    this.isDropdownRegionOpen = false;
  }
}
