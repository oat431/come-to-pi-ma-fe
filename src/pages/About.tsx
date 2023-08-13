import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

function About() {
    return (
        <>
            <h1>About Page</h1>
            <Fab color="primary" aria-label="add" sx={{margin:3}}>
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit" sx={{margin:3}}>
                <EditIcon />
            </Fab>
            <Fab variant="extended" sx={{margin:3}}>
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab disabled aria-label="like" sx={{margin:3}}>
                <FavoriteIcon />
            </Fab>
        </>
    );
}

export default About;
