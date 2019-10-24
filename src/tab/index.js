import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Checkbox from '@material-ui/core/Checkbox';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return ( <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [checkBoxVal, setCheckBox] = React.useState(false);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Checkbox
                checked={checkBoxVal}
                onChange={() => setCheckBox(!checkBoxVal)}
                value="checkedA"
                inputProps={{
                    'aria-label': 'primary checkbox',
                }}
            />
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Tab1 parentCheck={checkBoxVal} setCheckBox={setCheckBox}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Tab2 parentCheck={checkBoxVal} setCheckBox={setCheckBox}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Tab3 parentCheck={checkBoxVal} setCheckBox={setCheckBox}/>
            </TabPanel>
        </div>
    );
}
