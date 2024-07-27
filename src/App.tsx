import './index.css'
import { productsList } from './data'
import { useState } from 'react'
import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
console.log(productsList)
function App() {
  /* --------------------------------- States --------------------------------- */
  const [products, setProducts] = useState(productsList)
  /* --------------------------------- Renders -------------------------------- */
  const renderProducts = () => {
    return products.map(product => <ProductCard key={product.id} product={product} />)
  }
  return (
    <main className='container my-10'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-3xl font-bold text-indigo-500'>Latest Products</h1>
        <Button className='bg-indigo-800 px-5 py-4 text-md' width='w-fit'>Add Product</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {renderProducts()}
      </div>
    </main>
  )
}

export default App
