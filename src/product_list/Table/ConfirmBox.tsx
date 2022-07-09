import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Product_table_data from './Product_table_data';

interface Props{
    message: string,
    onDialog: any
}
export default function ConfirmBox({message, onDialog}: Props) {
  return (
    <div className='dialogBox'>
        <Typography>{message}</Typography>
        <button onClick={() => onDialog(true)} className="deleteBtn" data-testid="deleteBtn">Delete</button>
        <button onClick={() => onDialog(false)} className="cancelBtn" data-testid="editBtn">Cancel</button>
    </div>
  )
}
