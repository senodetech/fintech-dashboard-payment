export interface PaymentApiResponse {

    id: number;
    reference_no: string;
    beneficiary_name: string;
    amount: string;
    currency: string;
    status: string;
    payment_date: string;

}