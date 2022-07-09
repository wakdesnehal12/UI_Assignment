import { render, screen } from '@testing-library/react';
import React from 'react';
import ConfirmBox from './ConfirmBox';

describe('Confirm Box component', () => {
    test('render the list with buttons', async () => {
        render(<ConfirmBox 
            message={""} 
            onDialog={jest.fn()}
        />)
        const btnList = await screen.findAllByRole('button')
        expect(btnList).toHaveLength(2)
    })

    test('button Name', ()=> {
        render(<ConfirmBox
            message={""} 
            onDialog={jest.fn()}
        />)
        const btnname = screen.getByRole('button', {name:'Delete'})
        expect(btnname).toBeInTheDocument();
    })

    test('button Name', ()=> {
        render(<ConfirmBox 
            message={""} 
            onDialog={jest.fn()}
        />)
        const btnname = screen.getByRole('button', {name:'Cancel'})
        expect(btnname).toBeInTheDocument();
    })
})