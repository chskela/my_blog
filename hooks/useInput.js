import { useState } from "react";
export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);

  function onChange(e) {
    setValue(e.target.value);
  }

  function onBlur() {
    setIsDirty(true);
  }

  return {
    value,
    onChange,
    onBlur,
  };
}
