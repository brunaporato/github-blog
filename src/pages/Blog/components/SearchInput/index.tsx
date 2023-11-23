import { ChangeEvent } from 'react'
import { SearchInputContainer } from './styles'

interface SearchInputProps {
  onSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearchInput({ onSearch }: SearchInputProps) {
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const search = e.target.value
    onSearch(search)
  }
  return (
    <SearchInputContainer
      type="text"
      placeholder="Buscar conteúdo"
      onChange={handleInputChange}
    />
  )
}
