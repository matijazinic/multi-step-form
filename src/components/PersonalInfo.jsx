import React from "react";

export default function PersonalInfo({
  formData,
  handleFormData,
  displayErrors,
}) {
  return (
    <div className="main">
      <h1 className="main-title">Personal Info</h1>
      <p className="main-description">
        Please provide your name, email address and a phone number.
      </p>
      <form className="form">
        <div className="input-wrapper">
          <label htmlFor="#name">Name</label>
          <input
            style={{
              outline:
                (displayErrors && formData[0].value.length < 1) ||
                (displayErrors && formData[0].isValid === false)
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "",
              border:
                (displayErrors && formData[0].value.length < 1) ||
                (displayErrors && formData[0].isValid === false)
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "",
            }}
            type="text"
            id="name"
            onChange={handleFormData}
            placeholder="e.g. Stephen King"
            value={formData[0].value}
            required
          />
          <p className="error-message">
            {displayErrors && formData[0].value.length < 1
              ? "This field is required"
              : displayErrors && formData[0].isValid === false
              ? "Enter a valid name"
              : ""}
          </p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="#email">Email Address</label>
          <input
            style={{
              outline:
                (displayErrors && formData[1].value.length < 1) ||
                (displayErrors && formData[1].isValid === false)
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "",
              border:
                (displayErrors && formData[1].value.length < 1) ||
                (displayErrors && formData[1].isValid === false)
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "",
            }}
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleFormData}
            value={formData[1].value}
            required
          />
          <p className="error-message">
            {displayErrors && formData[1].value.length < 1
              ? "This field is required"
              : displayErrors && formData[1].isValid === false
              ? "Enter a valid email address"
              : ""}
          </p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="#phone">Phone Number</label>
          <input
            style={{
              outline:
                (displayErrors && formData[2].value.length < 1) ||
                (displayErrors && formData[2].isValid === false)
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "",
              border:
                (displayErrors && formData[2].value.length < 1) ||
                (displayErrors && formData[2].isValid === false)
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "",
            }}
            type="text"
            id="phone"
            placeholder="e.g. 1234567890"
            onChange={handleFormData}
            value={formData[2].value}
            required
          />
          <p className="error-message">
            {displayErrors && formData[2].value.length < 1
              ? "This field is required"
              : displayErrors && formData[2].isValid === false
              ? "Enter a valid phone number"
              : ""}
          </p>
        </div>
      </form>
    </div>
  );
}
