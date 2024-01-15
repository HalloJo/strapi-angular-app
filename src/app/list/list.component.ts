import { Component, Input } from '@angular/core';
import { Data } from '../types/TypeData';

@Component({
  selector: 'list-component',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() restaurantData?: Data[];
}
