import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {
  secretData = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() { }

  async getData() {
    this.secretData = null;

    this.apiService.getSecretData().subscribe((res: any) => {
      this.secretData = res.msg;
    });
  }

  logout() {
    this.apiService.logout();
  }
}
