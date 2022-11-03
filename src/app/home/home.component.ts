import { Component, OnInit } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  isHideLoading = true;

  constructor(private poNotification: PoNotificationService) {}

  connectionTest() {
    const message = 'Analysis ok';

    this.isHideLoading = false;

    setTimeout(() => {
      this.isHideLoading = true;
      this.poNotification.success(message);
    }, 3000);
  }
}