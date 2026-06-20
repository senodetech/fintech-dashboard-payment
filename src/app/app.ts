import { Component, signal } from '@angular/core';
import { PaymentListComponent } from './payments/components/payment-list/payment-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PaymentListComponent
  ],
  template: `<app-payment-list-component></app-payment-list-component>`,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fintech-payment-dashboard');
}
