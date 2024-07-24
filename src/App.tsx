import './index.css'
import { productsList } from './data'
import { useState } from 'react'
import ProductCard from './components/ProductCard'
console.log(productsList)
function App() {
  /* --------------------------------- States --------------------------------- */
  const [products, setProducts] = useState(productsList)
  /* --------------------------------- Renders -------------------------------- */
  const renderProducts = () => {
    return products.map(product => <ProductCard key={product.id} product={product} />)
  }
  return (
    <main>
      <div>
        {renderProducts()}
      </div>
    </main>
  )
}

export default App
