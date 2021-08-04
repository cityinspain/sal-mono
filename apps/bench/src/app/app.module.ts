import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UiModule } from '@sal-mono/ui';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@sal-mono/auth').then((m) => m.AuthModule),
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
