import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // @ts-ignore: Ignore API version type mismatch
  apiVersion: null,
});

export default stripe;