import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TextInputComponent, SidenavComponent],
  exports: [TextInputComponent, SidenavComponent],
})
export class UiModule {}
