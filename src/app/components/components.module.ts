import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from '../components/header/header.component';
import { BannerComponent } from '../components/banner/banner.component';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    SideMenuComponent,
    ModalComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    SideMenuComponent,
    ModalComponent,
    FooterComponent,
  ],
  entryComponents: [],
  providers: [],
})
export class ComponentsModule { }
