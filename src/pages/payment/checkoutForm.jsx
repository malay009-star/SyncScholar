import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address_line1: '',
    address_city: '',
    address_state: '',
    address_country: '',
    address_postal_code: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.name,
        email: formData.email,
        address: {
          line1: formData.address_line1,
          city: formData.address_city,
          state: formData.address_state,
          country: formData.address_country,
          postal_code: formData.address_postal_code,
        },
      },
    });

    if (error) {
      console.error(error);
    } else {
      console.log(paymentMethod);
      // Handle successful payment
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:w-2/4 mx-auto primary_shadow mt-[18vh] p-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder='Name'
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 mt-1 focus:outline-[#3388DD] block w-full shadow-sm sm:text-sm border-gray-300 rounded border"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder='Email'
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 mt-1 focus:outline-[#3388DD] block w-full shadow-sm sm:text-sm border-gray-300 rounded border"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address_line1" className="block text-sm font-semibold">
            Address Line 1
          </label>
          <input
            type="text"
            name="address_line1"
            id="address_line1"
            placeholder='Address'
            autoComplete="address-line1"
            value={formData.address_line1}
            onChange={handleChange}
            className="p-2 mt-1 focus:outline-[#3388DD] block w-full shadow-sm sm:text-sm border-gray-300 rounded border"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="address_city" className="block text-sm font-semibold">
              City
            </label>
            <input
              type="text"
              name="address_city"
              id="address_city"
              placeholder='City'
              autoComplete="address-level2"
              value={formData.address_city}
              onChange={handleChange}
              className="p-2 mt-1 focus:outline-[#3388DD] block w-full shadow-sm sm:text-sm border-gray-300 rounded border"
            />
          </div>
          <div>
            <label htmlFor="address_state" className="block text-sm font-semibold">
              State
            </label>
            <input
              type="text"
              name="address_state"
              id="address_state"
              placeholder='State'
              autoComplete="address-level1"
              value={formData.address_state}
              onChange={handleChange}
              className="p-2 mt-1 focus:outline-[#3388DD] block w-full shadow-sm sm:text-sm border-gray-300 rounded border"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="address_country" className="block text-sm font-semibold">
              Country
            </label>
            <input
              type="text"
              name="address_country"
              id="address_country"
              autoComplete="country"
              placeholder='Country'
              value={formData.address_country}
              onChange={handleChange}
              className="p-2 mt-1 focus:outline-[#3388DD] block w-full shadow-sm sm:text-sm border-gray-300 rounded border"
            />
          </div>
          <div>
            <label htmlFor="address_postal_code" className="block text-sm font-semibold">
              Postal Code
            </label>
            <input
              type="text"
              name="address_postal_code"
              id="address_postal_code"
              autoComplete="postal-code"
              placeholder='Postal Code'
              value={formData.address_postal_code}
              onChange={handleChange}
              className="p-2 mt-1 focus:outline-[#3388DD] block w-full shadow-sm sm:text-sm border-gray-300 rounded border"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="card-element" className="block text-sm font-semibold">
            Card Details
          </label>
          <div className="mt-1 border p-[6px]">
            <CardElement
              id="card-element"
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="bg-color text-white py-[5px] px-3 rounded"
        >
        Send Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
