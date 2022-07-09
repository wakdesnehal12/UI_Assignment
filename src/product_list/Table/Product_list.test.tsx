import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import NewProd from '../Modal/NewProd';
import Product_list from './Product_list';
import { ReactDOM } from 'react';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedUsedNavigate,
 }));
 
describe("Product List", () => {
    test("has an input field", () => {
        const { getByTestId } = render(<Product_list/>)
        expect(getByTestId('searchId')).toBeInTheDocument()
    })
    test('render the list with buttons', async() => {
        render(<Product_list/>)
        const btnElem = await screen.findAllByRole('button')
        // console.log(btnElem)
        expect(btnElem).toHaveLength(8)
    })
    // test("When the add button is pressed, it creates a new item name", () => {
    //     const { getByTestId, queryByText } = render(<NewProd
    //         setOpen={jest.fn()} 
    //         open={true}
    //         handleClose={jest.fn()}
    //         dataShow={[]}
    //         editData={[]}
    //         setEditData={jest.fn()}
    //     />);
    //     const event = { target: { value: "apple" } };
    //     fireEvent.change(getByTestId("prdtnameid"), event);
    //     expect(getByTestId("prdtnameid")).toHaveValue("apple");
    //     fireEvent.click(getByTestId("add"));
    //     expect(queryByText("apple")).toBeInTheDocument();
    // });
})