 
## Features

- Responsive
- Real Time and Dynamic
- Progressive Web App (PWA)
- Payment Gateway integration
-  Admin Dashboard with functionalities like adding products, deleting a product, updating products, adding a category, viewing users registered, updating order status, and canceling orders.
- State management using Redux
- Google authentication
- Track order status real time
- Cancel orders


## Run Locally

Clone the project

```bash
  git clone https://github.com/Mateen2002/Food-Delivery-Web-Application.git
```

Go to the project directory

```bash
  cd Food-Delivery-Web-Application
```

Install dependencies

```bash
  npm install or  yarn install
```

Create a **.env.local** file inside project directory with fields given below.

```bash
  # Authentication
  GOOGLE_ID=
  GOOGLE_SECRET=

  # Need to add this to... google cloud
  # http://localhost:3000/api/auth/callback/google


  NEXTAUTH_URL=http://localhost:3000


  HOST=http://localhost:3000


  # Stripe
  STRIPE_PUBLIC_KEY=
  STRIPE_SECRET_KEY=


  # Stripe Terminal/CLI
  STRIPE_SIGNING_SECRET=

  # Testing Webhook
  # stripe listen --forward-to localhost:3000/api/webhook


  # Mongodb Database
  
  # Your database name
  MONGODB_DB=
  # Add monogdb connection url 
  MONGO_URI=
  # Add mongodb connection url but with driver node.js and version 2.2.12 or later 
  MONGODB_URI=
  
```

Start the server

```bash
  npm run dev
```
 
Admin Access 

```
 To gain admin access, you need to add your email ID to the admin collection in MongoDB.
 After adding it, try logging in with the same email ID, and you should see the dashboard option.
```




## Stripe Payment Gateway

Test Stripe payment gateway with these card details.

```
  BRAND - VISA
  CARD NUMBER - 4242424242424242
  CVC - Any 3 digits
  DATE - Any future date
```

See details: https://stripe.com/docs/testing
  




<br/>
<br/>


  
