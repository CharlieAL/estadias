import Button from 'components/Button'
import DataList from 'components/Datalist'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import { useState, useEffect } from 'react'
import {
  getCatCustom,
  getCategory,
  getSupplier,
  getComponentes,
  updateComponent,
} from 'service/componente'

export default function FormEditar({ user }) {
  const [supplierData, setSupplierData] = useState([])
  const [catCustomData, setCatCustomData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [componentes, setComponentes] = useState([])
  const [buscador, setBuscador] = useState('')

  const [componente, setComponente] = useState({
    itemNumber: '',
    apfItemNumer: '',
    itemDescription: '',
    minStock: '',
    bulk: '',
    supplier: '',
    catCustom: '',
    category: '',
    price: '',
    weight: '',
    fracAranceleria: '',
    IdAduanas: '',
    quantity: '',
    UOM: '',
    Active: false,
    MXmfg: false,
    User: user.name
  })

  useEffect(() => {
    getComponentes().then(data => setComponentes(data))
    getCatCustom().then((data) => setCatCustomData(data))
    getSupplier().then((data) => setSupplierData(data))
    getCategory().then((data) => setCategoryData(data)) 
  }, [])

  const handleChange = (name, value) =>
    setComponente({ ...componente, [name]: value })

  const handleSubmit = (e) => {
    e.preventDefault()

    updateComponent(componente)
      .then((data) => {
        setComponente({
          itemNumber: '',
          apfItemNumer: '',
          itemDescription: '',
          minStock: '',
          bulk: '',
          supplier: '',
          catCustom: '',
          category: '',
          price: '',
          weight: '',
          fracAranceleria: '',
          IdAduanas: '',
          quantity: '',
          UOM: '',
          Active: false,
          MXmfg: false
        })
        setBuscador('')
        // setComponentes(componentes.concat(data))
      })
      .catch((error) => console.log(error))
  }

  const handleChangeDataList = (e) => {
    const { value } = e.target
    setBuscador(value)
    componentes.find((items) => {
      if (items.itemNumber === value) {
        setComponente({
          itemNumber: items.itemNumber,
          apfItemNumer: items.apfItemNumer,
          itemDescription: items.itemDescription,
          minStock: items.minStock,
          bulk: items.bulk,
          supplier: items.supplier,
          catCustom: items.catCustom,
          category: items.category,
          price: items.price,
          weight: items.weight,
          fracAranceleria: items.fracAranceleria,
          IdAduanas: items.IdAduanas,
          quantity: items.quantity,
          UOM: items.UOM,
          Active: items.Active,
          MXmfg: items.MXmfg
        })
      }
    })
  }



  return (
    <>
    <div className='flex justify-center mb-4 items-center'>
      <div>
        <DataList 
        placeholder={'itemNumber'}
        value={buscador}
        id={'componentes'} 
        data={componentes} 
        size={1}
        onChange={handleChangeDataList}
        />
      </div>
    </div>
      <form onSubmit={handleSubmit} className='text-center'>
        <div className='w-full flex place-content-center'>
          <div className=''>
            <Input
              label={'ItemNumber'}
              value={componente.itemNumber}
              onChange={({ target }) =>
                handleChange('itemNumber', target.value)
              }
            />
            <Input
              label={'AFPItemNumber'}
              value={componente.apfItemNumer}
              onChange={({ target }) =>
                handleChange('apfItemNumer', target.value)
              }
            />
            <Textarea
              label={'Item Description'}
              value={componente.itemDescription}
              onChange={({ target }) =>
                handleChange('itemDescription', target.value)
              }
            />
            <Input
              label={'MinStock'}
              value={componente.minStock}
              onChange={({ target }) => handleChange('minStock', target.value)}
            />
            <Input
              label={'Bulk'}
              value={componente.bulk}
              onChange={({ target }) => handleChange('bulk', target.value)}
            />
            <DataList
              label={'Supplier'}
              value={componente.supplier}
              data={supplierData}
              id='supplier'
              onChange={({ target }) => handleChange('supplier', target.value)}
            />
            <DataList
              label={'CatCustom'}
              value={componente.catCustom}
              data={catCustomData}
              id='catCustom'
              onChange={({ target }) => handleChange('catCustom', target.value)}
            />
          </div>
          <div className=''>
            <DataList
              label={'Category'}
              value={componente.category}
              data={categoryData}
              id='category'
              onChange={({ target }) => handleChange('category', target.value)}
            />
            <Input
              label={'Price'}
              value={componente.price}
              onChange={({ target }) => handleChange('price', target.value)}
            />
            <Input
              label={'Weight'}
              value={componente.weight}
              onChange={({ target }) => handleChange('weight', target.value)}
            />
            <Input
              label={'FracArancelaria'}
              value={componente.fracAranceleria}
              onChange={({ target }) =>
                handleChange('fracAranceleria', target.value)
              }
            />
            <Input
              label={'ID_Aduanas'}
              value={componente.IdAduanas}
              onChange={({ target }) => handleChange('IdAduanas', target.value)}
            />
            <Input
              label={'Quantity'}
              value={componente.quantity}
              onChange={({ target }) => handleChange('quantity', target.value)}
            />
            <Input
              label={'UOM'}
              value={componente.UOM}
              onChange={({ target }) => handleChange('UOM', target.value)}
            />
            <Input
              label={'Active'}
              type='checkbox'
              checked={componente.Active}
              onChange={({ target }) => handleChange('Active', target.checked)}
            />
          </div>
        </div>

        <Button>Editar</Button>
      </form>
    </>
  )
}
