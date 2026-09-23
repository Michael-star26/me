import { Component, inject } from '@angular/core';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { RouterLink,Router } from '@angular/router';
import { ContactTab } from '../contact-tab/contact-tab';
@Component({
  selector: 'app-software-dev',
  imports: [NzAnchorModule, RouterLink,ContactTab],
  templateUrl: './software-dev.html',
  styleUrl: './software-dev.css',
})
export class SoftwareDev {
  private router = inject(Router);
}
