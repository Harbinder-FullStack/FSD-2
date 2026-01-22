import {Button, Switch} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import LoadingButtonsTransition from "./LoadingButtons.jsx";
import ButtonSizes from "./Buttons.jsx";
import IconButtons from "./IconButtons.jsx";   
import GroupOrientation from "./ButtonGroup.jsx"; 
import Checkboxes from "./Checkbox.jsx";
import Dropdown from "./Dropdown.jsx";
import DropdownMulti from "./DropdownMulti.jsx";
import Slider from "./Slider.jsx";
import ColorSwitches from "./Switch.jsx";
import BasicTextFields   from "./TextField.jsx";

import ButtonBasic from "./Button.jsx";

export default function Home() {
    return (
        <>
        <div>
           
           <ButtonBasic />


            <ButtonSizes />
            <IconButtons /> 
            <LoadingButtonsTransition />
            <GroupOrientation />
            {/* <Checkboxes />
            <Dropdown />
            <DropdownMulti></DropdownMulti>
            <Slider />
            <ColorSwitches />
            <BasicTextFields    /> */}

        </div>
      </>
    );
}
