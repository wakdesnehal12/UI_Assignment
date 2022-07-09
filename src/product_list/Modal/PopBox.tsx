import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export interface uploadPro{
    uploadHandler: any,
    handleSubmit: any,
    imgref: any,
    uploadImage: any,
    upload: any
}

export default function PopBox ({uploadHandler, handleSubmit, imgref}:uploadPro) {
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
        <button onClick={handleClick} data-testid="btnClick">
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
            <div>
                <input type="file" name="img" data-testid="imgid" onChange={uploadHandler} ref={imgref} accept=".jpg, .png,.jpeg" hidden/>
            </div>
                <Typography  onClick={handleSubmit}>upload image</Typography>
                <Typography sx={{ p: 2 }}>Delete</Typography>
        </Popover>
        </div>
    );
}
