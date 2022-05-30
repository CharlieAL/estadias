import React from 'react'
import Box from 'components/Box'

export function Admin({admin1,admin2,admin3,admin4,admin5,admin6,admin7,admin8,admin9,admin10,admin11}) {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box onClick={admin1} type={'e'}>Nuevo</Box>
      <Box onClick={admin2}  type={'e'}>Editar</Box>
      <Box type={'c'}>Entradas</Box>
      <Box type={'c'}>a Hold</Box>
      <Box type={'c'}>Scrap</Box>
      <Box type={'c'}>WIP (listado)</Box>
      <Box type={'c'}>Historial</Box>
      <Box type={'c'}>En stock</Box>
      <Box type={'c'}>Donde se Usa?</Box>
      <Box type={'r'}>Inventario</Box>
      <Box type={'r'}>Bajo el minimo</Box>
    </div>
  )
}

export function Aduanas() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box type={'c'}>WIP (listado)</Box>
      <Box type={'c'}>Historial</Box>
      <Box type={'c'}>En stock</Box>
      <Box type={'c'}>Donde se Usa?</Box>
      <Box type={'r'}>Inventario</Box>
      <Box type={'r'}>Bajo el minimo</Box>
    </div>
  )
}

export function Ingenieria() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box type={'c'}>WIP (listado)</Box>
      <Box type={'c'}>Historial</Box>
      <Box type={'c'}>En stock</Box>
      <Box type={'c'}>Donde se Usa?</Box>
      <Box type={'r'}>Inventario</Box>
      <Box type={'r'}>Bajo el minimo</Box>
    </div>
  )
}

export function Captura() {
  return (
    <div className='pt-24 pb-10 text-center'>
      <Box type={'c'}>Entradas</Box>
      <Box type={'c'}>a Hold</Box>
      <Box type={'c'}>Scrap</Box>
      <Box type={'c'}>WIP (listado)</Box>
      <Box type={'c'}>Historial</Box>
      <Box type={'c'}>En stock</Box>
      <Box type={'c'}>Donde se Usa?</Box>
      <Box type={'r'}>Inventario</Box>
      <Box type={'r'}>Bajo el minimo</Box>
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