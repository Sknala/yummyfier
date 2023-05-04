import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeCard from '../components/recipeCard';
import { ToggleSloganProvider } from '../AppContext';

const sampleRecipe = {
    id: 1,
    title: 'Sample Recipe',
    servings: 4,
    readyInMinutes: 30,
    image: 'https://via.placeholder.com/150',
    extendedIngredients: [
        { amount: 1, unit: 'cup', name: 'rice' },
        { amount: 2, unit: 'cups', name: 'water' },
        { amount: 0.5, unit: 'cup', name: 'tomato' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'olive oil' },
    ],
};

describe('RecipeCard component', () => {
    test('renders recipe card with sample data', async () => {
        global.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(sampleRecipe),
            });
        });

        render(
            <ToggleSloganProvider>
                <RecipeCard data={sampleRecipe} />
            </ToggleSloganProvider>
        );

        expect(await screen.findByText('Sample Recipe')).toBeInTheDocument();
        expect(screen.getByText('Servings: 4')).toBeInTheDocument();
        // expect(screen.getByText('30 mins')).toBeInTheDocument();
        expect(screen.getByText('1 cup rice')).toBeInTheDocument();
        expect(screen.getByText('2 cups water')).toBeInTheDocument();
        expect(screen.getByText('0.5 cup tomato')).toBeInTheDocument();
        expect(screen.getByText('1 tsp salt')).toBeInTheDocument();
        expect(screen.getByText('1 tbsp olive oil')).toBeInTheDocument();

        global.fetch.mockClear();
        delete global.fetch;
    });
});
