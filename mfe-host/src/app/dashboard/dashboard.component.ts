import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import { CommonsService, CommonsComponent } from 'commons';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [AsyncPipe, CommonsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  router: Router = inject(Router);
  commonsService: CommonsService = inject(CommonsService);
  data$ = this.commonsService.getData();
  launchMfe() {
    this.commonsService.addData('Hello from Host');
    this.router.navigate(['login']);
  }

}
