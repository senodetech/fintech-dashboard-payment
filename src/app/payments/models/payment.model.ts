export interface Payment {
    id: number;
    referenceNo: string;
    beneficiaryName: string;
    amount: number;
    currency: string;
    status: string;
    paymentDate: string;
}