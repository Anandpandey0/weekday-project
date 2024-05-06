/* eslint-disable no-unused-vars */
import { Autocomplete, Chip, TextField } from "@mui/material";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MultiSelect = ({ options, placeholder, groupBy }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleSelectionChange = (event, newValue) => {
    setSelectedRoles(newValue);
  };

  return (
    <div style={{ minWidth: "200px", maxWidth: "max-content" }}>
      <Autocomplete
        multiple
        id="grouped-demo"
        options={options}
        groupBy={groupBy}
        getOptionLabel={(option) => option.title}
        value={selectedRoles}
        onChange={handleSelectionChange}
        renderOption={(props, option) => (
          <li {...props} key={option.title}>
            {option.title}
          </li>
        )}
        filterSelectedOptions // will filter all the selected options
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option.title}
              label={option.title}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} />
        )}
      />
    </div>
  );
};

export default MultiSelect;
