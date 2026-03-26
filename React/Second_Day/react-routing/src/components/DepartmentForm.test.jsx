import {screen, render, fireEvent } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import DepartmentForm from './DepartmentForm'

describe('DepartmentForm', () => {
    test('renders select field', () => {
        render(<DepartmentForm />);
        expect(screen.getByLabelText(/department name/i)).toBeInTheDocument();
    })

    test('updates selected department', () => {
        render(<DepartmentForm />);
        const select = screen.getByLabelText(/department name/i);

        fireEvent.change(select, {target: {value: "IT"}});
        expect (select.value).toBe("IT");
    })
})
