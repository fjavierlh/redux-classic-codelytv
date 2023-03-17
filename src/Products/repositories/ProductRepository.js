let PRODUCTS_DATA = [
  { id: 1, title: "Alpargatas de pelo de llama", price: 99.99 },
  { id: 2, title: "Sombrero de piel de político neoliberal", price: 999.99 },
  { id: 3, title: "Bufanda de pelotillas del ombligo", price: 99.99 },
];

// export async function retrieveProducts() {
//   return new Promise((resolve) => { setTimeout(() => resolve(PRODUCTS_DATA), 100) })
// }

export function retrieveProducts() {
  return PRODUCTS_DATA;
}