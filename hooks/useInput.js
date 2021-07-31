import { useState } from "react";

export default function useInput(initialValue) {
  const [isDirty, setIsDirty] = useState(false);
  const [value, setValue] = useState(initialValue);

  function onChange(e) {
    setValue(e.target.value);
  }

  function onBlur() {
    setIsDirty(true);
  }

  return {
    value,
    isDirty,
    onChange,
    onBlur,
  };
}
