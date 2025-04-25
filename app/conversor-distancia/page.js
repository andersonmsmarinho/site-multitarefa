'use client'
import { useState } from 'react'

export default function ConversorDistancia() {
    const [m, setM] = useState('')
    const [ft, setFt] = useState('')
    const [inches, setInches] = useState('')

    // 1 in = 0.0254 m
    const toFtIn = meters => {
        const totalIn = meters / 0.0254
        const feet = Math.floor(totalIn / 12)
        const inch = (totalIn - feet * 12).toFixed(2)
        return [feet, inch]
    }

    const handleM = e => {
        const v = e.target.value
        setM(v)
        const n = parseFloat(v.replace(',', '.'))
        if (!isNaN(n)) {
            const [feet, inch] = toFtIn(n)
            setFt(feet)
            setInches(inch)
        } else {
            setFt('')
            setInches('')
        }
    }

    const recalcM = (feetVal, inchVal) => {
        const f = parseFloat(feetVal) || 0
        const i = parseFloat(inchVal) || 0
        return ((f * 12 + i) * 0.0254).toFixed(4)
    }

    const handleFt = e => {
        const v = e.target.value
        setFt(v)
        setM(recalcM(v, inches))
    }

    const handleIn = e => {
        const v = e.target.value
        setInches(v)
        setM(recalcM(ft, v))
    }

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">Conversor m ↔ pés & polegadas</h1>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1">Metros (m):</label>
                    <input
                        type="text"
                        value={m}
                        onChange={handleM}
                        className="w-full border px-2 py-1 rounded"
                        placeholder="ex: 1.83"
                    />
                </div>
                <div>
                    <label className="block mb-1">Pés (ft):</label>
                    <input
                        type="text"
                        value={ft}
                        onChange={handleFt}
                        className="w-full border px-2 py-1 rounded"
                        placeholder="ex: 6"
                    />
                </div>
                <div>
                    <label className="block mb-1">Polegadas (in):</label>
                    <input
                        type="text"
                        value={inches}
                        onChange={handleIn}
                        className="w-full border px-2 py-1 rounded"
                        placeholder="ex: 0"
                    />
                </div>
            </div>
        </>
    )
}