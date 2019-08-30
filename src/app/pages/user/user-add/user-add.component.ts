import { Component } from '@angular/core';
import { fruits } from './index';

@Component({
    selector: 'ngx-user-add',
    templateUrl: 'user-add.html', // Related HTML url
    styleUrls: ['user-add.component.scss']
})

export class UserAddComponent {
    fruits = fruits;

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];
}