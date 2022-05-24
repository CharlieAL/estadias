import React from 'react'
import Box from 'components/Box'

export function Admin({admin1,admin2,admin3,admin4,admin5,admin6,admin7,admin8,admin9,admin10,admin11}) {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin1} type={'e'}>Importacion Temporal</Box>
      <Box onClick={admin2} type={'e'}>Importacion Definitiva</Box>
      <Box onClick={admin3} type={'r'}>Factura USA</Box>
      <Box onClick={admin4} type={'r'}>Factura MEX</Box>
      <Box onClick={admin5} type={'r'}>Consumo</Box>
      <Box onClick={admin6} type={'r'}>Exportacion BELDEN</Box>
      <Box onClick={admin7} type={'r'}>Reportes INEGI</Box>
      <Box onClick={admin8} type={'c'}>Materiales importados</Box>
    </div>
  )
}

export function Aduanas() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin1} type={'e'}>Importacion Temporal</Box>
      <Box onClick={admin2} type={'e'}>Importacion Definitiva</Box>
      <Box onClick={admin3} type={'r'}>Factura USA</Box>
      <Box onClick={admin4} type={'r'}>Factura MEX</Box>
      <Box onClick={admin5} type={'r'}>Consumo</Box>
      <Box onClick={admin6} type={'r'}>Exportacion BELDEN</Box>
      <Box onClick={admin7} type={'r'}>Reportes INEGI</Box>
      <Box onClick={admin8} type={'c'}>Materiales importados</Box>
    </div>
  )
}

export function Ingenieria() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin1} type={'e'}>Importacion Temporal</Box>
      <Box onClick={admin2} type={'e'}>Importacion Definitiva</Box>
      <Box onClick={admin3} type={'r'}>Factura USA</Box>
      <Box onClick={admin4} type={'r'}>Factura MEX</Box>
      <Box onClick={admin5} type={'r'}>Consumo</Box>
      <Box onClick={admin6} type={'r'}>Exportacion BELDEN</Box>
      <Box onClick={admin7} type={'r'}>Reportes INEGI</Box>
      <Box onClick={admin8} type={'c'}>Materiales importados</Box>
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