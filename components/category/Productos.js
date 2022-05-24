import Box from 'components/Box'

export function Admin({admin1,admin2,admin3,admin4,admin5,admin6,admin7,admin8,admin9,admin10,admin11}) {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin1} type={'e'}>Nuevo</Box>
      <Box onClick={admin2} type={'e'}>Editar</Box>
      <Box onClick={admin3} type={'c'}>Entradas A Stock</Box>
      <Box onClick={admin4} type={'c'}>Listado de Productos</Box>
      <Box onClick={admin5} type={'c'}>Historial</Box>
      <Box onClick={admin6} type={'c'}>En stock</Box>
      <Box onClick={admin7} type={'c'}>en Hold</Box>
      <Box onClick={admin8} type={'c'}>Detalles del Producto</Box>
      <Box onClick={admin9} type={'r'}>Inventario</Box>
      <Box onClick={admin10} type={'r'}>Bajo el minimo</Box>
      <Box onClick={admin11}>Tabla de Productos</Box>
    </div>
  )
}

export function Aduanas() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin4} type={'c'}>Listado de Productos</Box>
      <Box onClick={admin5} type={'c'}>Historial</Box>
      <Box onClick={admin6} type={'c'}>En stock</Box>
      <Box onClick={admin7} type={'c'}>en Hold</Box>
      <Box onClick={admin8} type={'c'}>Detalles del Producto</Box>
      <Box onClick={admin9} type={'r'}>Inventario</Box>
      <Box onClick={admin10} type={'r'}>Bajo el minimo</Box>
      <Box onClick={admin11}>Tabla de Productos</Box>
    </div>
  )
}

export function Ingenieria() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin4} type={'c'}>Listado de Productos</Box>
      <Box onClick={admin5} type={'c'}>Historial</Box>
      <Box onClick={admin6} type={'c'}>En stock</Box>
      <Box onClick={admin7} type={'c'}>en Hold</Box>
      <Box onClick={admin8} type={'c'}>Detalles del Producto</Box>
      <Box onClick={admin9} type={'r'}>Inventario</Box>
      <Box onClick={admin10} type={'r'}>Bajo el minimo</Box>
      <Box onClick={admin11}>Tabla de Productos</Box>
    </div>
  )
}

export function Captura() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin3} type={'c'}>Entradas A Stock</Box>
      <Box onClick={admin4} type={'c'}>Listado de Productos</Box>
      <Box onClick={admin5} type={'c'}>Historial</Box>
      <Box onClick={admin6} type={'c'}>En stock</Box>
      <Box onClick={admin7} type={'c'}>en Hold</Box>
      <Box onClick={admin8} type={'c'}>Detalles del Producto</Box>
      <Box onClick={admin9} type={'r'}>Inventario</Box>
      <Box onClick={admin10} type={'r'}>Bajo el minimo</Box>
      <Box onClick={admin11}>Tabla de Productos</Box>
    </div>
  )
}

export function Manufactura() {
  return (
    <div className='min-h-screen justify-center items-center flex'>
      <Box type={'reporte'}>Nuevdsdso</Box>
      <Box type={'consulta'}>Editar</Box>
      <Box>Consulta</Box>
      <Box>Hold</Box>
      <Box>Consulta</Box>
      <Box>Consulta</Box>
      <Box>Consulta</Box>
      <Box>Consulta</Box>
      <Box>Reporte</Box>
    </div>
  )
}

export function MFGyShip() {
  return (
    <div className='min-h-screen justify-center items-center flex'>
      <Box type={'reporte'}>Nuevdsdso</Box>
      <Box type={'consulta'}>Editar</Box>
      <Box>Consulta</Box>
      <Box>Hold</Box>
      <Box>Consulta</Box>
      <Box>Consulta</Box>
      <Box>Consulta</Box>
      <Box>Consulta</Box>
      <Box>Reporte</Box>
    </div>
  )
}