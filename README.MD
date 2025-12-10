# Ngrok + Node.js Setup Guide

## **Step 1 — Create Ngrok Account & Add Auth Token**

1. Head to **[https://ngrok.com](https://ngrok.com)**
2. Create an account and log in.
3. Go to your **Ngrok Dashboard**
4. In the left sidebar, click **Get Started**
5. Under the section that displays **Your Auth Token**, copy the token.
6. Paste the auth token into your **.env** file:

```env
NGROK_AUTHTOKEN=your_token_here
```

---

## **Step 2 — Install Node Modules**

Open your **terminal** and run:

```bash
npm install
```

This installs all required packages from `package.json`.

---

## **Step 3 — Start the Server**

After installation, start your Node.js server using:

```bash
nodemon index.js
```

Your development server will now start and automatically reload when you make changes.

