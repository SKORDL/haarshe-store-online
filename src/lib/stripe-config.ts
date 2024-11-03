export const stripeCheckoutOptions = {
  billingAddressCollection: "required",
  shippingAddressCollection: {
    allowedCountries: ["US", "CA", "GB"],
  },
  phoneNumberCollection: {
    enabled: true,
  },
  customerEmail: "required",
  appearance: {
    theme: "stripe",
  },
  submitType: "pay",
  locale: "en",
} as const;
