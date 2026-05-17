import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';

import s from './SearchForm.module.css'

const SearchForm = () => {
  const [query, setQuery] = useState(''); 
  const [suggestions, setSuggestions] = useState([]); 
  const [debouncedQuery] = useDebounce(query, 500); 

  const fetchSuggestions = async (q) => {
    if (q.length < 3) return [];

    try {
      // Пример запроса (замените URL и логику)
      const response = await fetch(`/api/prompts?search=${q}`);
      const data = await response.json();
      return data.slice(0, 5); 
    } catch (error) {
      console.error('Ошибка при загрузке подсказок:', error);
      return [];
    }
  };

  // Обработка изменения ввода
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length >= 3) {
      const suggestions = await fetchSuggestions(value);
      setSuggestions(suggestions);
    } else {
      setSuggestions([]); 
    }
  };


  const handleSearch = () => {
    if (debouncedQuery.length >= 3) {
     
      console.log('Поиск по запросу:', debouncedQuery);
    }
  };

  return (
    <form onSubmit={handleSearch} className={s.searchForm}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Поиск промптов..."
        className={s.searchInput}
      />
      {suggestions.length > 0 && (
        <ul className={s.suggestionsList}>
          {suggestions.map((prompt, index) => (
            <li
              key={index}
              onClick={() => {
                setQuery(prompt);
                handleSearch();
              }}
              className={s.suggestionItem}
            >
              {prompt}
            </li>
          ))}
        </ul>
      )}
      <button type="submit" className={s.searchButton}>
        Искать
      </button>
    </form>
  );
};

export default SearchForm;
