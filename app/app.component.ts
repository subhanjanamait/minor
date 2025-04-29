import { Component } from '@angular/core';
import { PropertyTypeService } from './services/property-type.service';
import { PropertyType } from './models/property-type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  propertyTypes: PropertyType[];
  selectedType: string;

  constructor(private propertyTypeService: PropertyTypeService) {
    this.propertyTypes = this.propertyTypeService.getPropertyTypes();
    this.selectedType = this.propertyTypes[0].name;
  }

  submit() {
    alert('Selected Home Type: ' + this.selectedType);
  }
}
