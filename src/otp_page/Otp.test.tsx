import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import React from 'react'
import { act } from 'react-dom/test-utils';
import Otp from './Otp'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router', () => ({
    ...jest.requireActual("react-router"),
    useLocation: () => ({
        pathname: "/",
        state: {}
    })
}));

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('Otp', () => {
    test('has an input field', () => {
        const {getByTestId} = render(<Otp/>) 
        expect(getByTestId('otpmsgOne')).toBeInTheDocument();
    })

    test('render the list with buttons', async() => {
        render(<Otp/>)
        const btnElem = await screen.findAllByRole('button')
        expect(btnElem).toHaveLength(1);
    })

    test('button Name', ()=> {
        render(<Otp/>)
        const btnname = screen.getByRole('button', {name:'Verification'})
        expect(btnname).toBeInTheDocument();
    })

    test("Testing using event", () => {
        const {getByTestId, getByText } = render(<Otp/>)
        userEvent.type(getByTestId("otpmsgOne"), "1");
        expect(getByTestId("otpmsgOne")).toHaveValue('1')
    })

    test("Testing using event", () => {
        const {getByTestId, getByText } = render(<Otp/>)
        userEvent.type(getByTestId("otpmsgTwo"), "2");
        expect(getByTestId("otpmsgTwo")).toHaveValue('2')
    })

    test("Testing using event", () => {
        const {getByTestId, getByText } = render(<Otp/>)
        userEvent.type(getByTestId("otpmsgThree"), "3");
        expect(getByTestId("otpmsgThree")).toHaveValue('3')
    })

    test("Testing using event", () => {
        const {getByTestId, getByText } = render(<Otp/>)
        userEvent.type(getByTestId("otpmsgFour"), "4");
        expect(getByTestId("otpmsgFour")).toHaveValue('4')
    })

    test('should be able to submit the form', () => {
        const {getByTestId} = render(<Otp/>)
        const verify:any = getByTestId('verify');
        fireEvent.change(verify, {target: {value: '1234'}})
        expect(verify.value).toBe('1234')
    })
    
    let originalFetch:any;
    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
               value: '1234'
            }) 
        }))as jest.Mock
    });
    afterEach(() => {
        global.fetch = originalFetch;
    });

    test('after data fetch', async () => {
        // render(<Otp />);
        // const description = await screen.findByTestId('otpmsg');
        // expect(description.textContent).toHaveTextContent('');
        await act(async () => {render(<Otp/>)});
        const description = screen.getByTestId('otpvalue');
        expect(description.textContent).toBe('');
    });
})
