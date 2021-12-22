import Form from "../components/Form";
import { useReducer, useState } from "react";
import { initialForm, reducer } from "../formReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialForm);
  const [response, setResponse] = useState();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:5000/auth/signup", {
      email: state.email,
      password: state.password,
    });
    setResponse(data);
  };

  const startRedirecting = () => {
    setTimeout(() => {
      navigate("/signin");
    }, 3000);
  };
  if (response) {
    startRedirecting();
  }
  return (
    <>
      <h1>Signup page</h1>
      <Form
        signInSubmitHandler={onSubmitHandler}
        dispatch={dispatch}
        state={state}
      />
      {response && <h3 style={{ color: "green" }}>{response.message}</h3>}
      {response && (
        <p style={{ color: "blue" }}>Redirecting to Signin page...</p>
      )}
    </>
  );
};
export default Signup;
