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
import toast, { Toaster } from 'react-hot-toast';
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
  const [productToEdit, setProductToEdit] = useState<IProduct>(defaultProductObj)
  const [productIdxToEdit,setProductIdxToEdit] = useState<number>(0)
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
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  /* --------------------------------- Handlers ------------------------------- */
  function open() {
    setIsOpen(true)
  }

  function close() {
    setErrors({
      title:"",
      description:"",
      price:"",
      imageURL:"",
      colors:""
    })
    setProduct(defaultProductObj)
    setIsOpen(false)
  }
  function openEditModal() {
    setIsOpenEditModal(true)
  }

  function closeEditModal() {
    setErrors({
      title:"",
      description:"",
      price:"",
      imageURL:"",
      colors:""
    })
    setProductToEdit(defaultProductObj)
    setIsOpenEditModal(false)
  }
  function openDeleteModal(){
    setIsOpenDeleteModal(true)
  }
  function closeDeleteModal(){
    setIsOpenDeleteModal(false)
  }
  function changeHandler(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setProduct({...product,[name]:value})
    setErrors({...errors,[name]:""})
  }
  function changeHandlerEditModal(e:ChangeEvent<HTMLInputElement>) {
    const {name,value} = e.target
    setProductToEdit({...productToEdit,[name]:value})
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
    close()
    toast('Product has been added', {
      icon: '✅',
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#23a96e',
        color: '#fff',
      }
    })
  }
  function submitHandlerEditModal(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    const{title,description,price,imageURL} = productToEdit
    const error = validateProduct({title,description,price,imageURL,colors:productToEdit.colors})
    const hasErrorMsg = Object.values(error).some(value => value !== "")
    if(hasErrorMsg){
      setErrors(error)
      return
    }
    const updatedProducts = [...products]
    updatedProducts[productIdxToEdit] = productToEdit
    setProducts(updatedProducts)
    setProductToEdit(defaultProductObj)
    closeEditModal()
    toast('Product has been updated', {
      icon: '✏️',
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#3730a3',
        color: '#fff',
      }
    })
  }
  function deleteProduct(){
    let filteredProducts = [...products]
    filteredProducts = products.filter(product => product.id !== productToEdit.id)
    setProducts(filteredProducts)
    closeDeleteModal()
    toast('Product has been deleted', {
      icon: '🗑️',
      position: 'top-center',
      style: {
        borderRadius: '10px',
        background: '#b81c1d',
        color: '#fff',
      }
    })
  }
  /* --------------------------------- Renders -------------------------------- */
  const renderProducts = () => {
    return products.map((product,index) => <ProductCard key={product.id} product={product} setProductToEdit={setProductToEdit} openEditModal={openEditModal} openDeleteModal={openDeleteModal} setProductIdxToEdit={setProductIdxToEdit} idx={index} />)
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
  const renderFormInputsEditModal = () => {
    return formData.map(input => (
      <div className='flex flex-col' key={input.id}>
        <label htmlFor={input.id} className='font-semibold text-gray-700'>{input.label}</label>
        <Input id={input.id} type={input.type} name={input.name} className='p-2 rounded-md focus:outline-none border-[1px] border-gray-300 focus:border-indigo-800 focus:ring-2 fous:ring-indigo-800 shadow-md' onChange={changeHandlerEditModal} value={productToEdit[input.name]} />
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
  const renderProductColorsToEdit = () => {
    return colors.map(color => (
        <Color color={color} key={color} onClick={() => {
          if(errors.colors){
            setErrors(prev => ({...prev,colors:""}))
          }
          if(productToEdit.colors.includes(color)){
            const newColors = productToEdit.colors.filter(item => color !== item)
            setProductToEdit(prev => ({...prev,colors:newColors}))
            return
          }
          setProductToEdit(prev => ({...prev,colors:[...productToEdit.colors,color]}))
        }} />
    ))
  }
  const renderNewProductColors = () => {
    return productToEdit.colors.map(color => <span key={color} className='text-white text-sm font-bold py-1 px-2 rounded-md ' style={{backgroundColor:color,textShadow:"0px 0px 1px rgba(0,0,0,0.5)"}}>{color}</span>)
  }
  const renderTempColors = () => {
    return tempColors.map(color => <span key={color} className='text-white text-sm font-bold py-1 px-2 rounded-md ' style={{backgroundColor:color,textShadow:"0px 0px 1px rgba(0,0,0,0.5)"}}>{color}</span>)
  }
  return (
    <main className='container my-10'>
      <div className='flex justify-between mb-4'>
        <h1 className='text-5xl font-bold'>Latest <span className='text-indigo-800'>Products</span></h1>
        <Button className='bg-indigo-800 hover:bg-indigo-700 px-5 py-4 text-md' width='w-fit' onClick={open}>Add Product</Button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {renderProducts()}
      </div>
      <div>
        {/* -------------------------------- Add Modal ------------------------------- */}
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
              <Button className='bg-indigo-800 hover:bg-indigo-700'>Add</Button>
              <Button className='bg-gray-500 hover:bg-gray-400' onClick={close} type='button'>Cancel</Button>
            </div>
          </form>
        </Modal>
        {/* -------------------------------- Edit Modal ------------------------------- */}
        <Modal title='Edit Product' isOpen={isOpenEditModal} close={closeEditModal}>
          <form action="" onSubmit={submitHandlerEditModal} className='flex flex-col gap-4'>
            {renderFormInputsEditModal()}
            <Select selected={productToEdit.category} setSelected={value => setProductToEdit(prev => ({...prev,category:value}))} />
            <div className='flex gap-2 flex-wrap'>
              {renderProductColorsToEdit()}
            </div>
            <div className='flex gap-2 flex-wrap'>
              {renderNewProductColors()}
              <ErrorMessage msg={errors.colors} />
            </div>
            <div className='flex gap-4'>
              <Button className='bg-indigo-800 hover:bg-indigo-700'>Save</Button>
              <Button className='bg-gray-500 hover:bg-gray-400' onClick={closeEditModal} type='button'>Cancel</Button>
            </div>
          </form>
        </Modal>
        {/* -------------------------------- Delete Modal ------------------------------- */}
        <Modal title='Delete Product' description='Deleting this product will remove it permanently from your inventory. Any data associated with this product will be lost, and other related data will also be deleted. Please confirm that you want to proceed.' isOpen={isOpenDeleteModal} close={closeDeleteModal}>
            <div className='flex gap-4'>
              <Button className='bg-red-700 hover:bg-red-600' onClick={deleteProduct}>Yes, I am sure</Button>
              <Button className='bg-gray-500 hover:bg-gray-400' onClick={closeDeleteModal} type='button'>No</Button>
            </div>
        </Modal>
      </div>
      <Toaster />
    </main>
  )
}

export default App
