import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

export default function DrawerAppBar() {

    return (
        <Box margin={3} >
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        fontWeight={400}
                        marginRight={3}
                    >
                        MUI
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to={`/`} >home</Button>
                        <Button color="inherit" component={Link} to={`/about`} >about</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}