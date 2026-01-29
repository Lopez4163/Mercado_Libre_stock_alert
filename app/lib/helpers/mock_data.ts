import { SellerInventory } from '../types/data_types'; // or wherever your type is defined

export const MOCK_INVENTORY: SellerInventory = [
  {
    title: "Vintage Mechanical Keyboard",
    price: 150.00,
    currency_id: "USD",
    available_quantity: 5,
    sold_quantity: 12
  },
  {
    title: "Wireless Ergonomic Mouse",
    price: 89.99,
    currency_id: "USD",
    available_quantity: 25,
    sold_quantity: 140
  },
  {
    title: "Ultra-Wide 34-inch Monitor",
    price: 499.00,
    currency_id: "USD",
    available_quantity: 2,
    sold_quantity: 8
  },
  {
    title: "Noise Cancelling Headphones",
    price: 299.00,
    currency_id: "USD",
    available_quantity: 15,
    sold_quantity: 45
  }
];