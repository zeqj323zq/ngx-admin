import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component'; // 导入刚才新建的模块

import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'user-list',
                component: UserListComponent
            },
            { 
                path: 'user-add',
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