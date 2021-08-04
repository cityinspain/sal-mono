import { Component } from '@angular/core';

@Component({
  selector: 'sal-mono-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bench';

  onLogin(creds: { username: string; password: string }) {
    console.log(creds);
  }
}
