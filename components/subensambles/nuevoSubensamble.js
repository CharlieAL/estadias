import Button from 'components/Button'
import DataList from 'components/Datalist'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import nextConfig from 'next.config'
import { useState, useEffect } from 'react'
import {
  createSubensamble,
  getCatCustom,
  getCategory,
  getSupplier
} from 'service/componente'

export default function FormNuevo({ user }) {
  const [supplierData, setSupplierData] = useState([])
  const [catCustomData, setCatCustomData] = useState([])
  const [categoryData, setCategoryData] = useState([])

  const [message, setMessage] = useState(false)

  const [subensamble, setSubensamble] = useState({
    subAssyNumber: '',
    apfItemNumer: '',
    SubAssyDescription: '',
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
    Username: user.name
  })

  useEffect(() => {
    getCatCustom().then((data) => setCatCustomData(data))
    getSupplier().then((data) => setSupplierData(data))
    getCategory().then((data) => setCategoryData(data))
  }, [])

  const handleChange = (name, value) =>
    setSubensamble({ ...subensamble, [name]: value })

  const handleSubmit = (e) => {
    e.preventDefault()
    createSubensamble(subensamble)
      .then((data) => {
        setSubensamble({
          subAssyNumber: '',
          apfItemNumer: '',
          SubAssyDescription: '',
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
      })
      .catch(({ response }) => {
        const { error } = response.data
        console.log(error)
      })
  }
  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <div className='w-full flex place-content-center'>
        <div className=''>
          <Input
            label={'subAssyNumber'}
            value={subensamble.subAssyNumber}
            onChange={({ target }) =>
              handleChange('subAssyNumber', target.value)
            }
          />
          <Input
            label={'AFPItemNumber'}
            value={subensamble.apfItemNumer}
            onChange={({ target }) =>
              handleChange('apfItemNumer', target.value)
            }
          />
          <Textarea
            label={'SubAssyDescription'}
            value={subensamble.SubAssyDescription}
            onChange={({ target }) =>
              handleChange('SubAssyDescription', target.value)
            }
          />
          <Input
            label={'MinStock'}
            value={subensamble.minStock}
            onChange={({ target }) => handleChange('minStock', target.value)}
          />
          <Input
            label={'Bulk'}
            value={subensamble.bulk}
            onChange={({ target }) => handleChange('bulk', target.value)}
          />
          <DataList
            label={'Supplier'}
            value={subensamble.supplier}
            data={supplierData}
            id='supplier'
            onChange={({ target }) => handleChange('supplier', target.value)}
          />
          <DataList
            label={'CatCustom'}
            value={subensamble.catCustom}
            data={catCustomData}
            id='catCustom'
            onChange={({ target }) => handleChange('catCustom', target.value)}
          />
        </div>
        <div className=''>
          <DataList
            label={'Category'}
            value={subensamble.category}
            data={categoryData}
            id='category'
            onChange={({ target }) => handleChange('category', target.value)}
          />
          <Input
            label={'Price'}
            value={subensamble.price}
            onChange={({ target }) => handleChange('price', target.value)}
          />
          <Input
            label={'Weight'}
            value={subensamble.weight}
            onChange={({ target }) => handleChange('weight', target.value)}
          />
          <Input
            label={'FracArancelaria'}
            value={subensamble.fracAranceleria}
            onChange={({ target }) =>
              handleChange('fracAranceleria', target.value)
            }
          />
          <Input
            label={'ID_Aduanas'}
            value={subensamble.IdAduanas}
            onChange={({ target }) => handleChange('IdAduanas', target.value)}
          />
          <Input
            label={'Quantity'}
            value={subensamble.quantity}
            onChange={({ target }) => handleChange('quantity', target.value)}
          />
          <Input
            label={'UOM'}
            value={subensamble.UOM}
            onChange={({ target }) => handleChange('UOM', target.value)}
          />
          <Input
            label={'Active'}
            type='checkbox'
            onChange={({ target }) => handleChange('Active', target.checked)}
          />
        </div>
      </div>

      <Button>Guardar</Button>
    </form>
  )
}
