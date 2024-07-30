import { IProduct, IFormData, ICategory } from '../interfaces'
import { faker } from "@faker-js/faker";
import { categoryImgIndex, generateRandomUniqueColors } from '../utilites';

const images = [
    "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1514316703755-dca7d7d9d882?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1525013066836-c6090f0ad9d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1558980664-2506fca6bfc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW90b3JiaWtlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1551033541-2075d8363c66?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
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


export const categories: ICategory[] = [
  {
    id: faker.string.uuid(),
    name: 'Cars',
    imageURL:
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: faker.string.uuid(),
    name: 'Motorbikes',
    imageURL:
      'https://images.unsplash.com/photo-1525013066836-c6090f0ad9d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fHww',
  },
  {
    id: faker.string.uuid(),
    name: 'Clothes',
    imageURL:
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: faker.string.uuid(),
    name: 'Shoes',
    imageURL:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: faker.string.uuid(),
    name: 'PC Desktops',
    imageURL:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
]


// ** Array (15) of Object(Product), each product contains title, description, price
// ** faker.commerce.productName()

const PRODUCT_LENGTH = 15;
let index = 0;
export const productsList: IProduct[] = Array.from(
  { length: PRODUCT_LENGTH },
  () => ({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: `${+faker.commerce.price()}`,
    imageURL:  images[index++],
    category: {
      // name: faker.commerce.department(),
      // imageURL: images[Math.floor(Math.random() * images.length)],
      name:categories[categoryImgIndex(index - 1)].name,
      imageURL:categories[categoryImgIndex(index - 1)].imageURL
    },
    colors: generateRandomUniqueColors(colors.length).slice(0, colors.indexOf(colors[Math.floor(Math.random() * colors.length)]) + 1),
    // colors:colors[Math.floor(Math.random() * colors.length)]
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




