import React, { useState } from 'react';
import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });

    e.target.reset();
  };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        name="searchMovie"
        type="text"
        id="search"
        placeholder="Search movie"
        onChange={handleChange}
      />
      <SearchButton>
        <BsSearch />
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
