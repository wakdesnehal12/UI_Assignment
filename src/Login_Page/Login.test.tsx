import { fireEvent, getByRole, getByTestId, getByText, render, renderHook, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Login from './Login';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));


// global.fetch = jest.fn(() => 
// Promise.resolve({
//     json: () => Promise.resolve({test: 1234}),
// })) as jest.Mock

describe('Login', () => {
    test('has an input field', () => {
        const {getByTestId} = render(<Login/>)   
        expect(getByTestId('addNumber')).toBeInTheDocument();
    })

    test('placeholder text', () => {
        render(<Login/>)
        const inpElem = screen.getByPlaceholderText('Mobile no')
        expect(inpElem).toBeInTheDocument();
    })

    test('render the list with buttons', async () => {
        render(<Login/>);
        const btn = await screen.findAllByRole('button')
        expect(btn).toHaveLength(1);
    })

    test('button name', () => {
        render(<Login/>)
        const inpElem = screen.getByRole("button", {name: 'Get OTP'})
        expect(inpElem).toBeInTheDocument();
    })

    test('message on button click', () => {
        render(<Login/>)
        const btn = screen.getByRole('button')
        fireEvent.click(btn);
        const message = screen.getByTestId('errMsg')
        expect(message).toHaveTextContent('')
    })

    test('should be able to submit the form', () => {
        const {getByTestId} = render(<Login/>)
        const verify:any = getByTestId('getOtp');
        fireEvent.change(verify, {target: {value: '1234'}})
        expect(verify.value).toBe('1234')
    })
    
    let originalFetch:any;

    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
               value: '9874563210'
            }) 
        }))as jest.Mock
    });

    afterEach(() => {
        global.fetch = originalFetch;
    });

    test('after data fetch', async () => {
        await act(async () => {render(<Login/>)});
        const description = await screen.findByTestId('errMsg');
        expect(description.textContent).toBe('');
    });

})