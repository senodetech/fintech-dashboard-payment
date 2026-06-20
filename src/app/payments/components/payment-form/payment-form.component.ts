import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-payment-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss',
})
export class PaymentFormComponent implements OnInit {
  paymentForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
      this.paymentForm = this.fb.group({
        referenceNo: [
          '',
          [
            Validators.required,
            Validators.minLength(5)
          ]
        ],
        beneficiaryName: [''],
        amount: [0],
        currency: ['USD'],
        status: ['PENDING']
    });

  }

  onSubmit(): void {
    if(this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }

    console.log(this.paymentForm.value);
  }

}
