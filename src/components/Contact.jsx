import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data submitted successfully");
        // You can add additional logic here for success handling
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div className="p-8 max-w-[1600px] m-auto">
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          Name:
          <br/>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded p-2 max-w-[600px] "
            required
          />
        </label>
        <label className="block mb-4">
          Email:
          <br/>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded p-2 max-w-[600px] "
            required
          />
        </label>
        <label className="block mb-4">
          Phone Number:
          <br/>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded p-2 max-w-[600px] "
            required
          />
        </label>
        <label className="block mb-4">
          Custom Message:
          <br/>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded p-2 max-w-[600px] "
            rows="4"
            required
          ></textarea>
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 max-w-[600px]  rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
