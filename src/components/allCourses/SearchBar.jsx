"use client";
import { Button, SearchField } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex items-center justify-center gap-2 mb-8 ">
      <SearchField
        name="search"
        aria-label="Search courses"
        value={searchValue}
        onChange={setSearchValue}
      >
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input
            className="max-w-70 w-full"
            placeholder="Search courses"
          />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
      <Link href={`?search=${searchValue.trim().toLowerCase()}`}><Button className="bg-[#1d8386]">Search</Button></Link>
    </div>
  );
};

export default SearchBar;
