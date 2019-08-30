import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { routing } from './user.routing';

@NgModule({
    imports: [
        FormsModule, 
        ReactiveFormsModule,
        ThemeModule,
        RouterModule,
        NbAccordionModule,
        NbButtonModule, 
        NbCardModule,
        NbListModule,
        NbRouteTabsetModule,
        NbStepperModule,
        NbTabsetModule, NbUserModule,
        CommonModule,
        routing
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserAddComponent
    ]
})

export class UserModule {}