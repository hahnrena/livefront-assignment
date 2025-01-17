import React from "react";
import { searchTypes } from "../../constants/filterSearchTypes";
import { FilterGroup, ToggleButton } from "./styles";
import { SearchType } from "../../models/search";

interface FilterGroupProps {
  searchType: SearchType;
  setSearchType: (type: SearchType) => void;
}

const ToggleFilterComponent: React<FilterGroupProps> = ({
  searchType,
  setSearchType,
}) => {
  return (
    <FilterGroup>
      {searchTypes.map((type) => {
        return (
          <ToggleButton
            key={type}
            name="searchType"
            value={type}
            onClick={() => setSearchType(type)}
            style={{
              background: searchType === type ? "#ff6f61" : "#e65f55",
              color: searchType === type ? "#fff" : "#000",
              border: searchType === type && "2px solid #fff",
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </ToggleButton>
        );
      })}
    </FilterGroup>
  );
};

export default ToggleFilterComponent;
