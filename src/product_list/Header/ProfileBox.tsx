import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import admin from '../../assets/admin.png'
import { useNavigate } from 'react-router-dom';

export default function ProfileBox() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClickbtn = () => {
    // localStorage.clear();
    navigate(`/`)
  }
  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick} className="adminBtn">
        < img src={admin} alt="admin"/>
      </Button>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography className='adminBox'>
            <Typography>My Profile</Typography>
            <Typography onClick={handleClickbtn}>Log Out</Typography>
        </Typography>
    </Popover>
    </div>
  );
}