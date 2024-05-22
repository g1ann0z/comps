import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    { name: 'Gianni', age: 47, job: 'Developer'},
    { name: 'Piero', age: 40, job: 'Designer'},
    { name: 'Sandra', age: 37, job: 'Project Manager'},
  ];

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job'}
  ];
}
