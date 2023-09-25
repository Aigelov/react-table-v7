import { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((val) => {
    setFilter(val || undefined);
  }, 1000);

  return (
    <div>
      <div style={{ fontSize: "24px" }}>Search: </div>
      <input
        type="text"
        value={value || ""}
        onChange={({ target }) => {
          setValue(target.value);
          onChange(target.value);
        }}
      />
    </div>
  );
};
