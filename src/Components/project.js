import React from "react";
import './project.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Test () {
    alert("Go To...")
    window.location.replace("https://project-uts-lab.vercel.app/")
}

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button className="ButtonProj" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={Test}>Project-UAS-LAB</MenuItem>
          <MenuItem onClick={handleClose}>Project-UAS-Teori</MenuItem>
        </Menu>
      </div>
    );
  }