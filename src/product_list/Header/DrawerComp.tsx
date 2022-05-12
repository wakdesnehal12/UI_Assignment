import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import React, { useState } from 'react'

export default function DrawerComp() {
    const [openDrawer, setOpenDrawer] = useState<any>(false)
  return (
    <div className="hideBtn">
        <Drawer 
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
        >
            <ListItem className='mobileNav'>
                <ListItemText>Dashboard</ListItemText>
                <ListItemText>Menus</ListItemText>
                <ListItemText>Orders</ListItemText>
                <ListItemText>Restaurant list</ListItemText>
            </ListItem>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}><ListIcon /></IconButton>
    </div>
  )
}
