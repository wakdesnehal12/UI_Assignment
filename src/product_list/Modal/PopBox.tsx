import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function PopBox () {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popoverhh' : undefined;

    return (
        <div className='imagePopup'>
        <button onClick={handleClick}>
            <MoreVertIcon />
        </button>
        <Popover
            className='myPopBx'
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <Typography sx={{ p: 2 }}>upload image</Typography>
            <Typography sx={{ p: 2 }}>Delete</Typography>
        </Popover>
        </div>
    );
}
