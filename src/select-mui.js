import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

export const SelectMUI = () => {
  const { control } = useFormContext();
  return (
    <div>
      <Controller
        as={
          <Select name="select-mui">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        }
        name="selectmui"
        control={control}
        defaultValue={""}
      />
    </div>
  );
};
