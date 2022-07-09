import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Product_table_data from './Product_table_data';

describe('Product Table Data', () => {
    test("Renders Product Name Label", () => {
        render(<Product_table_data />);
        const linkElement = screen.getByText("Name");
        expect(linkElement).toBeInTheDocument();
    });

    let originalFetch:any;

    beforeEach(() => {
        originalFetch = global.fetch;
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
               value: 'hello world'
            })  
        }))as jest.Mock
    });
    // test('test',async () => {
    //     await act (async() => {render(<Product_table_data/>)});
    //     expect(screen.getByText('hello world')).toBeInTheDocument();
    // })
    // test("should delete the selected item from the list", async() => {
    //     await act (async() => {render(<Product_table_data/>)});
    //     // render(<Product_table_data/>);
    //     const inputElem = screen.getByTestId('add')
    //     const createbtn = screen.getByTestId('addMenu')
        
    //     fireEvent.change(inputElem, { target: { value: 'apple'}})
    //     fireEvent.click(createbtn);

    //     const todo = screen.getByTestId('allMenu');

    //     // Click the delete button on the todo.
    //     const todoDeleteBtn = screen.getAllByTestId('deleteBtn');
    //     fireEvent.click(todoDeleteBtn[0])

    //     const todos = screen.queryAllByTestId('allMenu')
    //     expect(todo).toBeInTheDocument();
    //     expect(todos.length).toBe(0);
    // })
    // test("clicking on the OK button deletes the item", async () => {
    //     render(<Product_table_data />);
        
    //     const userId='624a61bbd873b1d7b1bc78bc'
    //     const token = 'abcd1234huji'
    //     // Wait for ada lovelace to show up to the party!
    //     await screen.findByRole(token, { name: /ada lovelace/userId });
    //     await screen.findAllByRole("button", { name: "Delete employee" });
        
    //     fireEvent.click(
    //       screen.getAllByRole("button", { name: "Delete employee" })[0]
    //     );
    //     fireEvent.click(await screen.findByText("OK"));
        
    //     // Let's wait to make sure she's gone!
    //     await waitForElementToBeRemoved(() =>
    //       screen.queryByRole(token, { name: /ada lovelace/userId })
    //     );
    // });
})