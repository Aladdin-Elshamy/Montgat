import './index.css'
import { productsList, formData } from './data'
import { useState } from 'react'
import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
import Modal from './components/ui/Modal'
import Input from './components/ui/Input'
console.log(productsList)
function App() {
  /* --------------------------------- States --------------------------------- */
  const [products, setProducts] = useState(productsList)
  const [isOpen, setIsOpen] = useState(false)

  /* --------------------------------- Handlers ------------------------------- */
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  /* --------------------------------- Renders -------------------------------- */
  const renderProducts = () => {
    return products.map(product => <ProductCard key={product.id} product={product} />)
  }
  const renderFormInputs = () => {
    return formData.map(input => (
      <div className='flex flex-col'>
        <label htmlFor={input.id}>{input.label}</label>
        <Input id={input.id} type={input.type} name={input.name} className='p-2 rounded-md focus:outline-none border-[1px] border-gray-300 focus:border-indigo-800 focus:ring-2 fous:ring-indigo-800 shadow-md' />
      </div>
    ))
  }
  return (
    <main className='container my-10'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-5xl font-bold'>Latest <span className='text-indigo-800'>Products</span></h1>
        <Button className='bg-indigo-800 px-5 py-4 text-md' width='w-fit' onClick={open}>Add Product</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {renderProducts()}
      </div>
      <div>
        <Modal title='Add Product' isOpen={isOpen} close={close}>
          <form action="" onSubmit={e => e.preventDefault()} className='flex flex-col gap-4'>
            {renderFormInputs()}
            <div className='flex gap-4'>
              <Button className='bg-indigo-800'>Add</Button>
              <Button className='bg-gray-500' onClick={close}>Cancel</Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  )
}

export default App
