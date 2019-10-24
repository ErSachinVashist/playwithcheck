import React from 'react';
import {useEffect} from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes(props) {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
    });

    useEffect(function () {
        if((!Object.keys(state).find((item,index)=>state[item]) || props.parentCheck) || (!props.parentCheck && !Object.keys(state).find((item,index)=>!state[item]))){
            setState({checkedA:props.parentCheck,checkedB:props.parentCheck,checkedC:props.parentCheck})
        }
    },[props.parentCheck])

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
        if(!event.target.checked){
            props.setCheckBox(false)
        }
    };

    return (
        <div>
            <Checkbox
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
            <Checkbox
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
            <Checkbox
                checked={state.checkedC}
                onChange={handleChange('checkedC')}
                value="checkedC"
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
        </div>
    );
}


//    durgaprasad.nakka@genpact.com
