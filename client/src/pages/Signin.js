import Form from "../components/Form";
import { useReducer, useState } from "react";
import { initialForm, reducer } from "../formReducer";
import axios from "axios";

const Signin = () => {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const [response, setResponse] = useState();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { data } = await axios.post(
      "http://localhost:5000/auth/signin",
      {
        email: state.email,
        password: state.password,
      },
      {
        withCredentials: true,
      }
    );
    setResponse(data);
  };
  console.log("data", response);
  return (
    <>
      <h1>Signin page</h1>
      <Form
        signInSubmitHandler={onSubmitHandler}
        dispatch={dispatch}
        state={state}
      />
      {response && <h3 style={{ color: "green" }}>{response.message}</h3>}
    </>
  );
};
export default Signin;
