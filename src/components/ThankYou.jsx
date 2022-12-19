import React from "react";

export default function ThankYou({ formData }) {
  const base_URL = import.meta.env.BASE_URL;

  return (
    <div className="main thank-you">
      <img src={`${base_URL}/images/icon-thank-you.svg`} />
      <h1 className="main-title">Thank you!</h1>
      <p className="main-description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@lorem-gaming.com
      </p>
      <h2>Your entered information:</h2>
      <div className="order-details">
        {formData.map((item) => {
          return (
            <p key={item.type}>
              <span>{item.text}:</span> {item.value}
            </p>
          );
        })}
      </div>
    </div>
  );
}
