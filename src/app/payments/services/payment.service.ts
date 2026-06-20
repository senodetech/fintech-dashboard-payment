import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { Payment } from '../models/payment.model';

import { PaymentApiResponse } from '../models/payment-api-response.model';

import { HttpClient } from '@angular/common/http';
import { CreatePaymentDto } from '../models/create-payment.dto';

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    
    constructor(private http: HttpClient) {}

    getPayments(): Observable<Payment[]> {

        return this.http
        .get<PaymentApiResponse[]>(
            'http://localhost:3000/api/payments'
        )
        .pipe(

            map(rows => rows.map(row => ({
                id: row.id,
                referenceNo: row.reference_no,
                beneficiaryName: row.beneficiary_name,
                amount: Number(row.amount),
                currency: row.currency,
                status: row.status,
                paymentDate: row.payment_date
            })))

        );

    }

    createPayment(
        payload: CreatePaymentDto
    ): Observable<Payment> {

        return this.http.post<Payment>(
            'http:/localhost:3000/api/payments',
            payload
        );

    }
    
}
