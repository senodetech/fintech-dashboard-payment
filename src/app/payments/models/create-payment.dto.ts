export interface CreatePaymentDto {
    referenceNo: string;

    beneficiaryName: string;

    amount: number;

    currency: string;

    status: string;
}