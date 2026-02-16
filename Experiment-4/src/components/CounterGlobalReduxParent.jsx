import { useDispatch, useSelector } from "react-redux"; //npm install redux react-redux
import Box from "@mui/material/Box";

export default function CounterReduxParent(props) {
    // useSelector : to read state from the Redux store
  const count = useSelector(state => state.count);
  
    // useDispatch : to dispatch actions to the Redux store
  const dispatch = useDispatch();

  return (
    <Box sx={{ bgcolor: '#fcdfcf', height: '100px' }} >
      <h3>{props.cno} : Gloabl State (Redux) Count: {count}</h3>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increase
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrease
      </button>
    </Box>
  );
}

