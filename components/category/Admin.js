import Box from 'components/Box'

export function Admin({admin1,admin2,admin3,admin4,admin5,admin6,admin7,admin8,admin9,admin10,admin11}) {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin1} type={'r'}>Reportes a Web</Box>
      <Box onClick={admin2} type={'r'}>Cierre de Mes</Box>
      <Box onClick={admin3} type={'e'}>Entradas A Stock</Box>
      <Box onClick={admin4} type={'c'}>Ayudas Visuales</Box>
      <Box onClick={admin5} type={'c'}>Tabla -002</Box>
    </div>
  )
}

export function Aduanas(admin2, admin4 ,admin5) {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin2} type={'r'}>Cierre de Mes</Box>
      <Box onClick={admin4} type={'c'}>Ayudas Visuales</Box>
      <Box onClick={admin5} type={'c'}>Tabla -002</Box>
    </div>
  )
}

export function Ingenieria() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin2} type={'r'}>Cierre de Mes</Box>
      <Box onClick={admin4} type={'c'}>Ayudas Visuales</Box>
      <Box onClick={admin5} type={'c'}>Tabla -002</Box>
    </div>
  )
}

export function Captura() {
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