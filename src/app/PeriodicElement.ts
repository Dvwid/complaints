export const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, client: {name:"Elżbieta", email: "elzb@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "hammer", sku: "23152"}, date: "2021-05-01", done: true},
  {id: 2, client: {name:"Fijak", email: "fijak@example.com", phone: "681544224", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "driller", sku: "53152"}, date: "2021-05-02", done: true},
  {id: 3, client: {name:"Cecylia", email: "cecylia@example.com", phone: "788421471", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "grinder", sku: "23152"}, date: "2021-05-03", done: false},
  {id: 4, client: {name:"Dawcio John Hutyra", email: "dawcio32132@example.com", phone: "888985412224", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "sander", sku: "431352"}, date: "2021-05-01", done: false},
  {id: 5, client: {name:"Andrzej", email: "andrzej@example.com", phone: "937124782", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "bar", sku: "23152"}, date: "2021-05-05", done: true},
  {id: 6, client: {name:"Barbara", email: "barbara@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "axe", sku: "23212"}, date: "2021-05-01", done: true},
  {id: 7, client: {name:"Elżbieta", email: "elzb@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "hammer", sku: "23152"}, date: "2021-05-01", done: false},
  {id: 8, client: {name:"Fijak", email: "fijak@example.com", phone: "681544224", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "driller", sku: "53152"}, date: "2021-05-02", done: false},
  {id: 9, client: {name:"Cecylia", email: "cecylia@example.com", phone: "788421471", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "grinder", sku: "23152"}, date: "2021-05-03", done: false},
  {id: 10, client: {name:"Dawcio", email: "dawcio@example.com", phone: "888985414", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "sander", sku: "43152"}, date: "2021-05-01", done: true},
  {id: 11, client: {name:"Andrzej", email: "andrzej@example.com", phone: "937124782", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "bar", sku: "23152"}, date: "2021-05-05", done: true},
  {id: 12, client: {name:"Barbara", email: "barbara@example.com", phone: "515284123", adress: {zip: "34300", city:"Paradise", adress:"Brooklyn 34"}}, product: {name: "axe", sku: "23212"}, date: "2021-05-01", done: false},
];

export interface PeriodicElement {
  id: number;
  product: Product;
  client: Client;
  date: string;
  done: boolean;
}

export interface Product {
  name: string;
  sku: string;
}
export interface Client {
  name: string;
  email: string;
  phone: string;
  adress: Adress;
}

export interface Adress {
  zip: string;
  city: string;
  adress: string;
}
