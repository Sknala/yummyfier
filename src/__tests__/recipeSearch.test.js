import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeSearch from '../components/recipeSearch';
import { ToggleSloganProvider } from '../AppContext';

describe('RecipeSearch component', () => {
    test('renders search bar with placeholder text', () => {
        render(
            <ToggleSloganProvider>
                <RecipeSearch />
            </ToggleSloganProvider>
        );

        expect(
            screen.getByPlaceholderText('Search e.g. chicken, rice, tomato...')
        ).toBeInTheDocument();
    });

    test('updates search input value on user typing', () => {
        render(
            <ToggleSloganProvider>
                <RecipeSearch />
            </ToggleSloganProvider>
        );

        const searchInput = screen.getByPlaceholderText(
            'Search e.g. chicken, rice, tomato...'
        );

        fireEvent.change(searchInput, { target: { value: 'chicken' } });
        expect(searchInput.value).toBe('chicken');
    });
});
