import React from "react";
import { useFormContext } from "react-hook-form";

export const SelectNative = () => {
  const { register } = useFormContext();
  return (
    <select name="select-native" ref={register}>
      <option value="0">First</option>
      <option value="1">Second</option>
      <option value="2">Third</option>
    </select>
  );
};
