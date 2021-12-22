const Form = ({dispatch, signInSubmitHandler, state}) => {

    return (
        <form onSubmit={signInSubmitHandler}>
            <input
                type="text"
                placeholder="Email"
                value={state.email}
                onChange={(e) =>
                    dispatch({type: "CHANGE_EMAIL", payload: e.target.value})
                }
            />
            <input
                type="password"
                placeholder="password"
                value={state.password}
                onChange={(e) =>
                    dispatch({type: "CHANGE_PASSWORD", payload: e.target.value})
                }
            />
            <button disabled={!state.email || !state.password}>Submit</button>
        </form>
    );
};
export default Form;
