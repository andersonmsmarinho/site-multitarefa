import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="bg-white p-4 shadow mb-8">
            <ul className="flex space-x-4 max-w-2xl mx-auto">
                <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
                <li><Link href="/sobre" className="text-blue-600 hover:underline">Sobre</Link></li>
                <li><Link href="/conversor-moeda" className="text-blue-600 hover:underline">Moeda</Link></li>
                <li><Link href="/conversor-temperatura" className="text-blue-600 hover:underline">Temperatura</Link></li>
                <li><Link href="/conversor-distancia" className="text-blue-600 hover:underline">Distância</Link></li>
            </ul>
        </nav>
    )
}