import React from "react";

import { SortButton } from "src/ui/molecules";
import { IconSearch } from "src/ui/atoms";

import searchBarStyles from "./search-bar.module.css";

type Props = {
  onChange: (setSearchPhrase: string) => void;
};

export const SearchBar: React.FC<Props> = ({ onChange }) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value.toLowerCase());
  };

  return (
    <div className={searchBarStyles["search-bar-wrapper"]}>
      <IconSearch />
      <input
        type="text"
        placeholder="Введи имя, тег, почту..."
        className={searchBarStyles["search-bar-input"]}
        onChange={onChangeHandler}
      />
      <SortButton
        isActive={false}
        onSortButtonClicked={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};
