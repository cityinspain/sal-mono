import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sal-mono-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  expanded = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  toggleSidenavExpanded() {
    this.expanded = !this.expanded;
  }

  toLogin() {
    this.router.navigate(['/auth/login']);
  }
}
