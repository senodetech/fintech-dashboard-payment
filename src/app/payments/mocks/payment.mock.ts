import { Payment } from '../models/payment.model';

export const MOCK_PAYMENTS: Payment[] = [
    {
        id: 1,
        referenceNo: 'PAY1001',
        beneficiaryName: 'John Smith',
        amount: 5000,
        currency: 'USD',
        status: 'SUCCESS',
        paymentDate: '2022-01-01'
    },
    {
        id: 2,
        referenceNo: 'PAY1002',
        beneficiaryName: 'Mary Jane',
        amount: 10000,
        currency: 'USD',
        status: 'PENDING',
        paymentDate: '2022-01-01'
    }
]