import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the PaystackButton with no SSR
const PaystackButton = dynamic(() =>
  import("react-paystack").then((mod) => mod.PaystackButton), { ssr: false });

const App = () => {
  const publicKey = "pk_test_61a08832a0c3f18823794cae7ab941a39c6b01f6"; // Replace with your actual public key

  const amount = 1000; // Amount in pesewas (10 GHS = 1000 pesewas)

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency: "GHS", // Set the currency to Ghanaian Cedis
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="item-details">
            <p>Dancing Shoes</p>
            <p>{amount / 100} GHS</p> {/* Displaying the correct amount */}
          </div>
        </div>

        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email" // Changed type to 'email' for validation
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Phone</label>
            <input
              type="tel" // Changed type to 'tel' for phone number input
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>

          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default App;
