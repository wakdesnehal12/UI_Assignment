import { cleanup, fireEvent, getByAltText, queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import NewProd from './NewProd';
import { act } from 'react-dom/test-utils';
import { Container } from '@mui/material';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate
}));

describe('New Product', () => {
    test('has an input field', () => {
        const {getByTestId} = render(<NewProd 
            setOpen={jest.fn()} 
            open={true}
            handleClose={jest.fn()}
            dataShow={[]}
            editData={[]}
            setEditData={jest.fn()}
        />)   
        expect(getByTestId('prdtnameid')).toBeInTheDocument();
    })

    test('button name', async () => {
        render(<NewProd 
            setOpen={jest.fn()} 
            open={true}
            handleClose={jest.fn()}
            dataShow={[]}
            editData={[]}
            setEditData={jest.fn()}
        />)
        const inpElem = await screen.findByRole("button", {name: 'Update product'})
        expect(inpElem).toBeInTheDocument();
    })

    test('add product', () => {
        const {getByTestId, getByText } = render(<NewProd
            setOpen={jest.fn()} 
            open={true}
            handleClose={jest.fn()}
            dataShow={[]}
            editData={[]}
            setEditData={jest.fn()}
        />)
        userEvent.type(getByTestId('prdtnameid'), "test")
        expect(getByTestId('prdtnameid')).toHaveValue('test')
    })

    test('render Product Name label', () => {
        render(<NewProd
            setOpen={jest.fn()} 
            open={true}
            handleClose={jest.fn()}
            dataShow={[]}
            editData={[]}
            setEditData={jest.fn()}
        />)
        const elem = screen.getByText('Product Name')
        expect(elem).toBeInTheDocument();
    })

    // let originalFetch:any;

    // originalFetch = global.fetch;
    //     global.fetch = jest.fn(() => Promise.resolve({
    //         json: () => Promise.resolve({
    //             name: "pizza"
    //         }) 
    //     }))as jest.Mock

    // test('check data',async () => {
    //     await act(async() => {render(<NewProd
    //         setOpen={jest.fn()} 
    //         open={true}
    //         handleClose={jest.fn()}
    //         dataShow="pizza"
    //         editData={[]}
    //         setEditData={jest.fn()}
    //     />)});
    //     const elem = screen.getByText('pizza')
    //     expect(elem).toBeInTheDocument();
    // })
    // test('calls onClick prop when clicked', () => {
    //     const handleClick = jest.fn()
    //     render(<NewProd 
    //         // onClick={handleClick}
    //         setOpen={jest.fn()} 
    //         open={true}
    //         handleClose={jest.fn()}
    //         dataShow={['apple']}
    //         editData={[]}
    //         setEditData={jest.fn()}></NewProd>)
    //     fireEvent.click(screen.getByText(/click me/i))
    //     expect(handleClick).toHaveBeenCalledTimes(1)
    //   })
    test("When the add button is pressed, it creates a new item name", () => {
        const { getByTestId, queryByText, queryByTestId } = render(<NewProd
            setOpen={jest.fn()} 
            open={true}
            handleClose={jest.fn()}
            dataShow={[]}
            editData={[]}
            setEditData={jest.fn()}
        />);
        const event = { target: { value: "testValue" } };
        fireEvent.change(getByTestId("prdtnameid"), event);
        expect(getByTestId("prdtnameid")).toHaveValue("testValue");
        // fireEvent.click(getByTestId("addMenu"));
        // expect(queryByText("testValue")).toBeInTheDocument();
    });
          
})