export type orderSummaryType = {
    subtotal: number;
    discount: number;
    deliveryFee: number;
    totalPrice: number;
}

export type cuponSuccessType = {
    cuponCode: string;
    cuponDiscount: number;
    cuponSuccessMessage: string;
}