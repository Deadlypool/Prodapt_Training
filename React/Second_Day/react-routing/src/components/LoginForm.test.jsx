import {screen, render, fireEvent } from '@testing-library/react'
import {describe, test, expect} from 'vitest'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
    test('renders username and password fields', () => {
        render(<LoginForm />);
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    })

    test('updates username input value', () => {
        render(<LoginForm />);
        const usernameInput = screen.getByLabelText(/username/i);
        fireEvent.change(usernameInput, {target:{value: 'testuser'}});
        expect(usernameInput.value).toBe('testuser');
    })
})
