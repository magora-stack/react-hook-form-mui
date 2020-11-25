import React from "react";
import "./styles.css";
import { Select, MenuItem } from "@material-ui/core";
import { Controller, useForm, FormProvider } from "react-hook-form";
import { SelectNative } from "./select-native";
import { SelectMUI } from "./select-mui";

export default function App() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <select name="select-native" ref={methods.register}>
          <option value="0">First</option>
          <option value="1">Second</option>
          <option value="2">Third</option>
        </select>
        <SelectMUI />
        <input type="submit" value="submit" />
      </form>
    </FormProvider>
  );
}
