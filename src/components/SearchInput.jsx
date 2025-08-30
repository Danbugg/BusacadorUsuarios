import { useState, useEffect } from 'react'

export default function SearchInput({ OnSearch }) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      OnSearch(query)
    }, 500)

    return () => clearTimeout(timeout)
  }, [query, OnSearch])

  return (
    <input
      className='w-full p-2 border border-gray-300 rounded shadow transition-all focus:outline-none focus:ring-2 focus:ring-blue-500'
      type="text"
      placeholder="Buscar por nombre, perfil o intereses"
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
