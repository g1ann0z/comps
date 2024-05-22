import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css'
})
export class CollectionsHomeComponent {
  data = [
    { name: 'Gianni', surname: 'Rossi', age: 47, job: 'Developer', employed: true },
    { name: 'Piero', surname: 'Bianchi', age: 40, job: 'Designer', employed: false},
    { name: 'Sandra', surname: 'Verdi', age: 37, job: 'Project Manager', employed: true},
  ];

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'surname', label: 'Surname'},
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job'},
    { key: 'employed', label: 'Employed'}
  ];
}
