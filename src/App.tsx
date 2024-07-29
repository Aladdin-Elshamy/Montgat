import './index.css'
import { faker } from "@faker-js/faker";
import { productsList, formData, colors, categories } from './data'
import { useState, ChangeEvent, FormEvent } from 'react'
import ProductCard from './components/ProductCard'
import Button from './components/ui/Button'
import Modal from './components/ui/Modal'
import Input from './components/ui/Input'
import { IProduct } from './interfaces'
import { validateProduct } from './components/validation'
import ErrorMessage from './components/ErrorMessage'
import Color from './components/ui/Color'
import Select from './components/ui/Select';
function App() {
  /* -------------------------------- Variables ------------------------------- */
  const defaultProductObj = {
    title:"",
    description:"",
    price:"",
    imageURL:"",
    colors:[],
    category:{name:"",imageURL:""}
  }
  /* --------------------------------- States --------------------------------- */
  const [products, setProducts] = useState<IProduct[]>(productsList)
  const [product, setProduct] = useState<IProduct>(defaultProductObj)
  const [errors,setErrors] = useState({
    title:"",
    description:"",
    price:"",
    imageURL:"",
    colors:""
  })
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [tempColors,setTempColors] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  console.log(tempColors)
  /* --------------------------------- Handlers ------------------------------- */
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  function closeHandler() {
    setErrors({
      title:"",
      description:"",
      price:"",
      imageURL:"",
      colors:""
    })
    setProduct(defaultProductObj)
    close()
  }
  function changeHandler(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setProduct({...product,[name]:value})
    setErrors({...errors,[name]:""})
  }
  function submitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    const{title,description,price,imageURL} = product
    const error = validateProduct({title,description,price,imageURL,colors:tempColors})
    const hasErrorMsg = Object.values(error).some(value => value !== "")
    if(hasErrorMsg){
      setErrors(error)
      return
    }
    setProducts(prev => [{...product,id:faker.string.uuid(),colors:tempColors,category:selectedCategory},...prev])
    setTempColors([])
    setProduct(defaultProductObj)
    closeHandler()
  }
  /* --------------------------------- Renders -------------------------------- */
  const renderProducts = () => {
    return products.map(product => <ProductCard key={product.id} product={product} />)
  }
  const renderFormInputs = () => {
    return formData.map(input => (
      <div className='flex flex-col' key={input.id}>
        <label htmlFor={input.id} className='font-semibold text-gray-700'>{input.label}</label>
        <Input id={input.id} type={input.type} name={input.name} className='p-2 rounded-md focus:outline-none border-[1px] border-gray-300 focus:border-indigo-800 focus:ring-2 fous:ring-indigo-800 shadow-md' onChange={changeHandler} value={product[input.name]} />
        <ErrorMessage msg={errors[input.name]} />
      </div>
    ))
  }
  const renderProductColors = () => {
    return colors.map(color => (
        <Color color={color} key={color} onClick={() => {
          if(errors.colors){
            setErrors(prev => ({...prev,colors:""}))
          }
          if(tempColors.includes(color)){
            setTempColors(prev => prev.filter(c => c !== color))
            return
          }
          setTempColors(prev => [...prev,color])
        }} />
    ))
  }
  const renderTempColors = () => {
    return tempColors.map(color => <span key={color} className='text-white text-sm font-bold py-1 px-2 rounded-md ' style={{backgroundColor:color,textShadow:"0px 0px 1px rgba(0,0,0,0.5)"}}>{color}</span>)
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
          <form action="" onSubmit={submitHandler} className='flex flex-col gap-4'>
            {renderFormInputs()}
            <Select selected={selectedCategory} setSelected={setSelectedCategory} />
            <div className='flex gap-2 flex-wrap'>
              {renderProductColors()}
            </div>
            <div className='flex gap-2 flex-wrap'>
              {renderTempColors()}
              <ErrorMessage msg={errors.colors} />
            </div>
            <div className='flex gap-4'>
              <Button className='bg-indigo-800'>Add</Button>
              <Button className='bg-gray-500' onClick={closeHandler} type='button'>Cancel</Button>
            </div>
          </form>
        </Modal>
      </div>
    </main>
  )
}

export default App
