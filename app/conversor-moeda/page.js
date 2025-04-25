'use client'
import { useState } from 'react'

export default function ConversorMoeda() {
  const RATE = 5.8419 //https://idealsoftwares.com.br/indices/dolar2025.html
  const [usd, setUsd] = useState('')
  const [brl, setBrl] = useState('')

  const handleUsd = e => {
    const v = e.target.value
    setUsd(v)
    const n = parseFloat(v.replace(',', '.'))
    setBrl(!isNaN(n) ? (n * RATE).toFixed(2) : '')
  }

  const handleBrl = e => {
    const v = e.target.value
    setBrl(v)
    const n = parseFloat(v.replace(',', '.'))
    setUsd(!isNaN(n) ? (n / RATE).toFixed(2) : '')
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Conversor Dólar ↔ Real</h1>
      <div className="space-y-4">
        <div>
          <label className="block mb-1">USD ($):</label>
          <input
            type="text"
            value={usd}
            onChange={handleUsd}
            className="w-full border px-2 py-1 rounded"
            placeholder="ex: 10.00"
          />
        </div>
        <div>
          <label className="block mb-1">BRL (R$):</label>
          <input
            type="text"
            value={brl}
            onChange={handleBrl}
            className="w-full border px-2 py-1 rounded"
            placeholder="ex: 52.50"
          />
        </div>
        <p className="text-sm text-gray-600">
          Taxa fixa: 1 USD = {RATE} BRL (14/04/2025)
        </p>
      </div>
    </>
  )
}