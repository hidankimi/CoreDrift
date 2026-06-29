// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreDrift title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreDrift/i);
    expect(titleElement).toBeInTheDocument();
});
