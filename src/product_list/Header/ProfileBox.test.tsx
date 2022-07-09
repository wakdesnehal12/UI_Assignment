import { render, screen} from '@testing-library/react';
import React from 'react';
import ProfileBox from './ProfileBox';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('ProfileBox', () => {
    test('button', async () => {
        render(<ProfileBox/>)
        const btnElem = await screen.findAllByRole('button')
        expect(btnElem).toHaveLength(1)
    })
})
