export const initialAddons = [
  {
    name: "Online service",
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
    isSelected: false,
  },
  {
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
    isSelected: false,
  },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
    isSelected: false,
  },
];

export const initialFormData = [
  { type: "name", text: "Your name", value: "", isValid: false },
  {
    type: "email",
    text: "Your email address",
    value: "",
    isValid: false,
  },
  {
    type: "phone",
    text: "Your phone number",
    value: "",
    isValid: false,
  },
];

export const initialPackages = [
  {
    name: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
    isSelected: false,
    icon: "icon-arcade.svg",
  },
  {
    name: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
    isSelected: false,
    icon: "icon-advanced.svg",
  },

  {
    name: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    isSelected: false,
    icon: "icon-pro.svg",
  },
];

export const initialSteps = [
  { value: 1, name: "Your info" },
  { value: 2, name: "Select plan" },
  { value: 3, name: "Add-ons" },
  { value: 4, name: "Summary" },
];
