import Stripe from "stripe";

export interface UserDetails {
    id: string;
    first_name: string;
    last_name:string;
    full_name?:string;
    avatar_url?:string;
    billing_address?: Stripe.Address;
    payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
};

export interface price {
    
}

export interface Subcription {
    id: string;
    user_id: string;
    status?: Stripe.Subcription.status;
    metadata?: Stripe.metadata;
    price_id?: string;
    quantity?: string;
    cancel_at_period_end?: Boolean;
    created: string;
    current_period_start: string;
    current_period_end: string;
    ended_at?: string;
    cancel_at?: string; 
    canceled_at?: string;
    trial_start?: string;
    trial_end?: string;
    price?:

}