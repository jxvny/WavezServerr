// JavaScript source code

//const stripe = require('stripe')('sk_test_51LtGMGIHN4Dc0qC8zTgllgzjUyn3oNwnZr0DySFZPJUnSDgFMlUcii1lypVXr67efQzv7Ik9gHVEPEBeDsuNR53Q00pJ1Dnghi');

// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

/*
  const accountLink = await stripe.accountLinks.create({
        account: 'acct_1032D82eZvKYlo2C',
        refresh_url: 'https://example.com/reauth',
        return_url: 'https://example.com/return',
        type: 'account_onboarding',
    });
  */
/*
var express = require('express');
var app = express();
var PORT = 80;



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

app.post('/payment-sheet', async (req, res) => {
    // Use an existing Customer ID if this is a returning customer.
    const customer = await stripe.customers.create(); 
    const ephemeralKey = await stripe.ephemeralKeys.create(
        { customer: customer.id },
        { apiVersion: '2022-08-01' }
    );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        customer: customer.id,
        automatic_payment_methods: {
        enabled: true,
        },
    });

    res.json({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey: 'pk_test_51LtGMGIHN4Dc0qC8nPgkPe0zlvJ1fcH7LTbRh44L6O02u99VxZ0uTE62864M9PLAKYBmYWFAmJ7yOo3CkIhSCQr700UCKJ2HwL'
    });
});

/*
const stripe = require('stripe')('sk_test_51LtGMGIHN4Dc0qC8zTgllgzjUyn3oNwnZr0DySFZPJUnSDgFMlUcii1lypVXr67efQzv7Ik9gHVEPEBeDsuNR53Q00pJ1Dnghi');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 3099,
                quantity: 1,
            },
        ],
        mode: 'payment',
       // success_url: `${YOUR_DOMAIN}?success=true`,
     //   cancel_url: `${YOUR_DOMAIN}?canceled=true`,
      //  automatic_tax: { enabled: true },
    });

    res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));

*/


/*
(async () => {
const stripe = require('stripe')('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');
        const customers = await stripe.customers.retrieve('cus_Mllw7SSWErtz0w', {
            stripeAccount: 'acct_1LtGMGIHN4Dc0qC8'
        });

        console.log(customers);

  
  
  })()


*/
/*

const stripe = require('stripe')('sk_test_51LtGMGIHN4Dc0qC8zTgllgzjUyn3oNwnZr0DySFZPJUnSDgFMlUcii1lypVXr67efQzv7Ik9gHVEPEBeDsuNR53Q00pJ1Dnghi');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        automatic_tax: { enabled: true },
    });

    res.redirect(303, session.url);
});
*/
var express = require('express');
var app = express();
var PORT = 80;

const stripe = require('stripe')('sk_test_51LtGMGIHN4Dc0qC8zTgllgzjUyn3oNwnZr0DySFZPJUnSDgFMlUcii1lypVXr67efQzv7Ik9gHVEPEBeDsuNR53Q00pJ1Dnghi');

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});



//nst stripe = require('stripe')('sk_test_51LtGMGIHN4Dc0qC8zTgllgzjUyn3oNwnZr0DySFZPJUnSDgFMlUcii1lypVXr67efQzv7Ik9gHVEPEBeDsuNR53Q00pJ1Dnghi');
// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

app.post('/payment-sheet', async (req, res) => {
    // Use an existing Customer ID if this is a returning customer.
    const customer = await stripe.customers.create();

    if (!customer) {
        return res.send({
            error: 'You have no customer created',
        });
    }

    const ephemeralKey = await stripe.ephemeralKeys.create(
        { customer: customer.id },
        { apiVersion: '2022-08-27' }
    );
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1099,
        currency: 'usd',
        customer: customer.id,
        payment_method_types: [
            'card',
        ],

    });

    res.json({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey: 'pk_test_51LtGMGIHN4Dc0qC8nPgkPe0zlvJ1fcH7LTbRh44L6O02u99VxZ0uTE62864M9PLAKYBmYWFAmJ7yOo3CkIhSCQr700UCKJ2HwL'
    });
});


