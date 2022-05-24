import Button from 'components/Button'
import DataList from 'components/Datalist'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import { useState, useEffect } from 'react'
import { createNewProduct, getProducts } from 'service/productos'

export default function FormNuevo({ user }) {
  const [productos, setProductos] = useState([])
  const [itemNumber, setItemNumber] = useState('')
  const [itemDescription, setItemDescription] = useState('')
  const [minStock, setMinStock] = useState('')
  const [bulk, setBulk] = useState('')
  const [supplier, setSupplier] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [weight, setWeight] = useState('')
  const [Active, setActive] = useState(false)
  const [MXmfg, setMXmfg] = useState('')
  const [trackDate, setTrackDate] = useState('')
  const [trackUser, setTrackuser] = useState('')
  const [fieldChanged, setFieldChanged] = useState('')
  const [IdAduanas, setIdAduanas] = useState('')
  const [UOM, setUOM] = useState('')

  useEffect(() => {
    getProducts().then((products) => {
      setProductos(products)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }
  const handleDataList = (e) => {
    try {
      let numPartGenerico = e.target.value
      setNumPartGen(numPartGenerico)
      productos.filter((items) => {
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
            label={'ItemNumber'}
            onChange={handleDataList}
            productos={productos}
            value={itemNumber}
          />
          <Input
            label={'AFPItemNumber'}
            // value={Afp}
            onChange={({ target }) => setCategoria(target.value)}
          />
          <Textarea
            label={'Item Description'}
            value={itemDescription}
            onChange={({ target }) => setDescription(target.value)}
          />
          <Input
            label={'MinStock'}
            value={minStock}
            onChange={({ target }) => setCategoria(target.value)}
          />
          <Input
            label={'Bulk'}
            value={bulk}
            onChange={({ target }) => setPartNumber(target.value)}
          />
          <Input
            label={'Supplier'}
            value={supplier}
            onChange={({ target }) => setDetails(target.value)}
          />
          <Input
            label={'CatCustom'}
            // value={catCustom}
            onChange={({ target }) => setAlias(target.value)}
          />
        </div>
        <div className=''>
          <Input
            label={'Category'}
            type='text'
            value={category}
            onChange={({ target }) => setPrice(target.value)}
          />
          <Input
            label={'Price'}
            value={price}
            onChange={({ target }) => setCustomer(target.value)}
          />
          <Input
            label={'Weight'}
            value={weight}
            onChange={({ target }) => setBuyer(target.value)}
          />
          <Input
            label={'FracArancelaria'}
            // value={stockMin}
            onChange={({ target }) => setStockMin(target.value)}
          />
          <Input
            label={'ID_Aduanas'}
            value={IdAduanas}
            onChange={({ target }) => setStacking(target.value)}
          />
          <Input
            label={'Quantity'}
            // value={qua}
            onChange={({ target }) => setStackVol(target.value)}
          />
          <Input
            label={'UOM'}
            value={weight}
            onChange={({ target }) => setWeight(target.value)}
          />
          <Input
            label={'Active'}
            type='checkbox'
            onChange={({ target }) => setActive(target.checked)}
          />
        </div>
      </div>

      <Button>Guardar</Button>
    </form>
  )
}
