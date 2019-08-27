import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component'; // 导入刚才新建的模块

import { UserListComponent } from './user-list';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'list',
                component: UserListComponent
            },
            { 
                path: 'add',
                component: UserAddComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class routing{}