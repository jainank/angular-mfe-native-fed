import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonsService, CommonsComponent } from 'commons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [AsyncPipe, CommonsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private commonService: CommonsService, private router: Router) {}
  data$?: Observable<string>;

  ngOnInit(): void {
    this.data$ = this.commonService?.getData();
  }

  onBack() {
    this.commonService.addData('Bye from remote');
    this.router.navigate(['/dashboard']);
  }
}
