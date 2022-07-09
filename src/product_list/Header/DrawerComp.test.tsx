import { render, screen } from '@testing-library/react';
import React from 'react';
import DrawerComp from './DrawerComp';

describe('Drawer component', () => {
    test('render the list with buttons', async() => {
        render(<DrawerComp/>)
        const btnElem = await screen.findAllByRole('button')
        expect(btnElem).toHaveLength(1);
    })
})