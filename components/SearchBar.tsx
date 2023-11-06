"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";
import { manufacturers } from '../constants/index';

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState('');
	const handleSearch = () => {};
  return (
	<form className='searchbar' onSubmit={handleSearch}>
		<div className="seach__bar-item">
			<SearchManufacturer
				manufacturer={manufacturer}
				setManufacturers={setManufacturer}
			/>
		</div>
	</form>
  )
}

export default SearchBar