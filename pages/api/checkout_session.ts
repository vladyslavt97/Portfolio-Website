import stripe from "@/util/get-stripejs";
import type { NextApiRequest, NextApiResponse } from 'next';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  currency: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("hello");

  const requestBody = req.body;

  const cartDetails = {
    "item1": {
      "id": "item1",
      "name": "Product A",
      "price": requestBody.price,
      "quantity": 1,
      "currency": "USD",
    },
  };

  const cartDetailsArray: CartItem[] = Object.values(cartDetails) as CartItem[];

  const lineItems = cartDetailsArray.map((item: CartItem) => {
    return {
      price_data: {
        currency: item.currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `https://${req.headers.host}/thank-you`,
      cancel_url: `https://${req.headers.host}/`,
    });

    return res.json({ sessionId: session.id });
  } catch (err) {
    console.error("Error creating checkout session:", err);
    return res.status(500).json({ error: "Error creating checkout session" });
  }
}
