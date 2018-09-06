import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LeftSideNavComponent } from './layout/left-side-nav/left-side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent, LeftSideNavComponent]
})
export class CoreModule { }
