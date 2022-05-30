import Button from 'components/Button'
import DataList from 'components/Datalist'
import Input from 'components/Input'
import Textarea from 'components/Textarea'
import { useState, useEffect } from 'react'
import {
  getCatCustom,
  getCategory,
  getSupplier,
} from 'service/componente'
import { getSubensamble, updateSubensamble } from 'service/subensamble'

export default function FormEditar({ user }) {
  const [supplierData, setSupplierData] = useState([])
  const [catCustomData, setCatCustomData] = useState([])
  const [categoryData, setCategoryData] = useState([])
  const [subensambles, setSubensambles] = useState([])
  const [buscador, setBuscador] = useState('')

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
    getSubensamble().then((data) => setSubensambles(data))
    getCatCustom().then((data) => setCatCustomData(data))
    getSupplier().then((data) => setSupplierData(data))
    getCategory().then((data) => setCategoryData(data)) 
  }, [])

  const handleChange = (name, value) =>
    setSubensamble({ ...subensamble, [name]: value })

  const handleSubmit = (e) => {
    e.preventDefault()

    updateSubensamble(subensamble)
      .then((data) => {
        console.log(data)
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
        setBuscador('')
        // setComponentes(componentes.concat(data))
      })
      .catch((error) => console.log(error))
  }

  const handleChangeDataList = (e) => {
    const { value } = e.target
    setBuscador(value)
    subensambles.find((items) => {
      if (items.subAssyNumber === value) {
        setSubensamble({
          subAssyNumber: items.subAssyNumber,
          apfItemNumer: items.apfItemNumer,
          SubAssyDescription: items.SubAssyDescription,
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
        placeholder={'subAssyNumber'}
        value={buscador}
        id={'subensamble'} 
        data={subensambles} 
        size={1}
        onChange={handleChangeDataList}
        />
      </div>
    </div>
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
            checked={subensamble.Active}
            onChange={({ target }) => handleChange('Active', target.checked)}
          />
        </div>
      </div>

      <Button>Editar</Button>
    </form>
    </>
  )
}
