import Button from 'components/Button'
import DataList from 'components/Datalist'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import { useState, useEffect } from 'react'
import { createNewProduct, getProducts } from 'service/productos'

export default function FormNuevo({ user,productos }) {
  // const [productos, setProductos] = useState([])
  const [categoria, setCategoria] = useState('')
  const [alias, setAlias] = useState('')
  const [stockMin, setStockMin] = useState('')
  const [stacking, setStacking] = useState('')
  const [details, setDetails] = useState('')
  const [numPartGen, setNumPartGen] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [customer, setCustomer] = useState('')
  const [buyer, setBuyer] = useState('')
  const [stackVol, setStackVol] = useState('')
  const [weight, setWeight] = useState('')
  const [laborTime, setLaborTime] = useState('')
  const [checkbox, setCheckbox] = useState(false)
  const [partNumber, setPartNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      Category: categoria,
      Alias: alias,
      StockMin: stockMin,
      Stacking: stacking,
      Details: details,
      NumParteGen: numPartGen,
      Description: description,
      Price: price,
      Customer: customer,
      Buyer: buyer,
      StackVol: stackVol,
      Weight: weight,
      LaborTime: laborTime,
      Obsolete: checkbox,
      partNumber,
      Username: user.name
    }
    createNewProduct(body).then((newProduct) => {
      setCategoria('')
      setAlias('')
      setStockMin('')
      setStacking('')
      setDetails('')
      setNumPartGen('')
      setDescription('')
      setPrice('')
      setCustomer('')
      setBuyer('')
      setStackVol('')
      setWeight('')
      setLaborTime('')
      setPartNumber('')
      setCheckbox(false)
      setProductos(productos.concat(newProduct))
    })
  }
  const handleDataList = (e) => {
    try {
      let numPartGenerico = e.target.value
      setNumPartGen(numPartGenerico)
      productos.find((items) => {
        if (items.NumParteGen === numPartGenerico) {
          setDescription(items.Description)
          setDetails(items.Details)
          setCategoria(items.Category)
          setAlias(items.Alias)
          setStockMin(items.StockMin)
          setStacking(items.Stacking)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <div className='w-full flex place-content-center'>
        <div className=''>
          <DataList
          id='numPartGen'
            label={'Núm Parte Genérico'}
            onChange={handleDataList}
            data={productos}
            value={numPartGen}
          />
          <Textarea
            label={'Descripción General'}
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
          <Input
            label={'Categoría'}
            value={categoria}
            onChange={({ target }) => setCategoria(target.value)}
          />
          <Input
            label={'Número Parte'}
            value={partNumber}
            onChange={({ target }) => setPartNumber(target.value)}
          />
          <Textarea
            label={'Detalles del Producto'}
            value={details}
            onChange={({ target }) => setDetails(target.value)}
          />
          <Input
            label={'Alias Kentucky'}
            value={alias}
            onChange={({ target }) => setAlias(target.value)}
          />
          <Input
            label={'Precio'}
            type='text'
            value={price}
            onChange={({ target }) => setPrice(target.value)}
          />
        </div>
        <div className=''>
          <Input
            label={'Cliente'}
            value={customer}
            onChange={({ target }) => setCustomer(target.value)}
          />
          <Input
            label={'Comprador'}
            value={buyer}
            onChange={({ target }) => setBuyer(target.value)}
          />
          <Input
            label={'Stock Mínimo'}
            value={stockMin}
            onChange={({ target }) => setStockMin(target.value)}
          />
          <Input
            label={'Stacking'}
            value={stacking}
            onChange={({ target }) => setStacking(target.value)}
          />
          <Input
            label={'StackVol'}
            value={stackVol}
            onChange={({ target }) => setStackVol(target.value)}
          />
          <Input
            label={'Peso(Kg)'}
            value={weight}
            onChange={({ target }) => setWeight(target.value)}
          />
          <Input
            label={'Tiempo de Labor'}
            value={laborTime}
            onChange={({ target }) => setLaborTime(target.value)}
          />
          <Input
            label={'Obsoleto'}
            type='checkbox'
            onChange={({ target }) => setCheckbox(target.checked)}
          />
        </div>
      </div>

      <Button>Guardar</Button>
    </form>
  )
}

