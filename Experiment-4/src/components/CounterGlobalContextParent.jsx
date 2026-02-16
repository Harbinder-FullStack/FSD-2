import { useContext } from "react";
import { CounterContext } from "./context/CounterGlobalContextAPI";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CounterContextParent(props) {
  
   const { count, setCount } = useContext(CounterContext);

  
  return (
    <Box sx={{ bgcolor: '#cffcdf', height: '100px' }} >

      <h3>{props.cno} : Gloabl State (ContextAPI) Count: {count}</h3>

      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        Increase
      </Button>

      <Button variant="outlined"  onClick={() => setCount(count - 1)}>
        Decrease
      </Button>
    </Box>
  );
}

