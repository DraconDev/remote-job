// import { NextApiRequest, NextApiResponse } from "next";
// import { stripe } from "../../utils/stripe";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     switch (req.method) {
//         case "POST":
//             try {
//                 // Create Checkout Sessions from body params.
//                 const session = await stripe.checkout.sessions.create({
//                     ui_mode: "embedded",
//                     line_items: [
//                         {
//                             // Provide the exact Price ID (for example, pr_1234) of
//                             // the product you want to sell
//                             price: "{{PRICE_ID}}",
//                             quantity: 1,
//                         },
//                     ],
//                     mode: "payment",
//                     return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
//                 });

//                 return res
//                     .status(200)
//                     .json({ clientSecret: session.client_secret });
//             } catch (err) {
//                 return res.status(err.statusCode || 500).json(err.message);
//             }
//         case "GET":
//             try {
//                 const session = await stripe.checkout.sessions.retrieve(
//                     req.query.session_id as string
//                 );

//                 return res.status(200).json({
//                     status: session.status,
//                     customer_email: session.customer_details.email,
//                 });
//             } catch (err) {
//                 return res.status(err.statusCode || 500).json(err.message);
//             }
//         default:
//             return res
//                 .setHeader("Allow", req.method)
//                 .status(405)
//                 .end("Method Not Allowed");
//     }
// }
