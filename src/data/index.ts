import { IProduct, IFormData, ICategory } from '../interfaces'
import { faker } from "@faker-js/faker";

const images = [
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
]
// ** Array (15) of Object(Product), each product contains title, description, price
// ** faker.commerce.productName()

const PRODUCT_LENGTH = 15;
export const productsList: IProduct[] = Array.from(
  { length: PRODUCT_LENGTH },
  () => ({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: `${+faker.commerce.price()}`,
    imageURL: images[Math.floor(Math.random() * images.length)],
    category: {
      name: faker.commerce.department(),
      imageURL: images[Math.floor(Math.random() * images.length)],
    },
    colors: Array.from({ length: Math.floor(Math.random() * 11) + 1 }, () => faker.color.rgb()),
  }),
);

export const formData: IFormData[] = [
  {
    id: "name",
    label: "Product name",
    name: "title",
    type: "text",
  },
  {
    id: "description",
    label: "Product description",
    name: "description",
    type: "text",
  },
  {
    id: "imageURL",
    label: "Product image URL",
    name: "imageURL",
    type: "text",
  },
  {
    id: "price",
    label: "Product price",
    name: "price",
    type: "string",
  }
]

export const colors: string[] = [

  '#FF0000',
  '#B22222',
  '#7FFF00',
  '#8A2BE2',
  '#D2691E',
  '#FF7F50',
  '#6495ED',
  '#DC143C',
  '#00FA9A',
  '#FFD700',
  '#ADFF2F',
  '#FF69B4',
  '#CD5C5C',
  '#4B0082',
  '#20B2AA',
  '#778899',

] 


export const people: ICategory[] = [
  {
    id: faker.string.uuid(),
    name: 'Wade Cooper',
    imageURL:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: faker.string.uuid(),
    name: 'Devon Webb',
    imageURL:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: faker.string.uuid(),
    name: 'Tom Cook',
    imageURL:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: faker.string.uuid(),
    name: 'Mason Heaney',
    imageURL:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: faker.string.uuid(),
    name: 'Emil Schaefer',
    imageURL:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]