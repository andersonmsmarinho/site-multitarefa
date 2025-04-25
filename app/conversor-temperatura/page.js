'use client'
import { useState } from 'react'

export default function ConversorTemperatura() {
    const [c, setC] = useState('')
    const [f, setF] = useState('')

    const handleC = e => {
        const v = e.target.value
        setC(v)
        const n = parseFloat(v.replace(',', '.'))
        setF(!isNaN(n) ? ((n * 9) / 5 + 32).toFixed(2) : '')
    }

    const handleF = e => {
        const v = e.target.value
        setF(v)
        const n = parseFloat(v.replace(',', '.'))
        setC(!isNaN(n) ? (((n - 32) * 5) / 9).toFixed(2) : '')
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Conversor °C ↔ °F</h1>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1">°C:</label>
                    <input
                        type="text"
                        value={c}
                        onChange={handleC}
                        className="w-full border px-2 py-1 rounded"
                        placeholder="ex: 25"
                    />
                </div>
                <div>
                    <label className="block mb-1">°F:</label>
                    <input
                        type="text"
                        value={f}
                        onChange={handleF}
                        className="w-full border px-2 py-1 rounded"
                        placeholder="ex: 77"
                    />
                </div>
            </div>
        </>
    )
}