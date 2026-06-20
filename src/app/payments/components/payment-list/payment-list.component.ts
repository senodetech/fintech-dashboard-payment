import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Payment } from '../../models/payment.model';
import { PaymentService } from '../../services/payment.service';
import { PaymentFormComponent } from '../payment-form/payment-form.component';

@Component({
  selector: 'app-payment-list-component',
  standalone: true,
  imports: [CommonModule,PaymentFormComponent],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.scss',
})
export class PaymentListComponent implements OnInit {

  payments: Payment[] = [];

  constructor(
    private paymentService: PaymentService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {

  this.paymentService
      .getPayments()
      .subscribe({

        next: (payments) => {

          console.log('Received', payments);

          this.payments = payments as any;

          this.cdr.detectChanges();

          console.log(
            'Component Property',
            this.payments
          );

        },

        error: (err) => {

          console.error(err);

        }

      });

  }

 
}
