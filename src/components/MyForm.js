import { Container, Input, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/sagas/types";

const MyForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };
  const handleSubmit = () => {
    user.id === 0
      ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
      : dispatch({ type: UPDATE_USER_BY_ID, user });

    dispatch(
      setUserSlice({
        id: 0,
        name: "",
        email: "",
        password: "",
      })
    );
  };
  return (
    <>
      <Container>
        <Input value={user.id} fullWidth disabled />
        <Input
          onChange={handleChange("name")}
          placeholder="Enter name"
          value={user.name}
          fullWidth
        />
        <Input
          onChange={handleChange("email")}
          placeholder="Enter email"
          value={user.email}
          fullWidth
        />
        <Input
          onChange={handleChange("password")}
          placeholder="Enter password"
          value={user.password}
          fullWidth
        />
        <Button
          onClick={() => handleSubmit()}
          variant="contained"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </Container>
    </>
  );
};

export default MyForm;
