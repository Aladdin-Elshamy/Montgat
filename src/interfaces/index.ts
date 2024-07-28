export interface IProduct {
    id?: string | undefined
    title: string,
    description: string,
    price: string,
    imageURL: string,
    category: {
      name: string
      imageURL: string,
    },
    colors: string[],
}

export interface IFormData {
    id: string,
    label: string,
    name: "title" | "description" | "price" | "imageURL",
    type: string,
}

export interface ICategory {
    id: string,
    name: string,
    imageURL: string,
}