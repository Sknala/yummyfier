import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RecipeDialog from '../components/recipeDialog';

const sampleRecipe = {
    title: 'Sample Recipe',
    servings: 4,
    readyInMinutes: 30,
    sourceUrl: 'https://example.com',
    extendedIngredients: [
        { amount: 1, unit: 'cup', name: 'rice' },
        { amount: 2, unit: 'cups', name: 'water' },
    ],
    analyzedInstructions: [
        {
            steps: [
                { step: 'Step 1: Prepare ingredients' },
                { step: 'Step 2: Cook the recipe' },
            ],
        },
    ],
};

describe('RecipeDialog component', () => {
    test('renders RecipeDialog and opens dialog with sample data', () => {
        render(<RecipeDialog data={sampleRecipe} />);

        fireEvent.click(screen.getByText('Click to see more'));

        expect(screen.getByText('Sample Recipe')).toBeInTheDocument();
        expect(screen.getByText('Preparation time:')).toBeInTheDocument();
        // expect(screen.getByText('30 mins')).toBeInTheDocument();
        // expect(screen.getByText('Servings: 4')).toBeInTheDocument();
        expect(screen.getByText('Ingredients:')).toBeInTheDocument();
        expect(screen.getByText('1 cup rice')).toBeInTheDocument();
        expect(screen.getByText('2 cups water')).toBeInTheDocument();
        expect(screen.getByText('Instructions:')).toBeInTheDocument();
        expect(
            screen.getByText('Step 1: Prepare ingredients')
        ).toBeInTheDocument();
        expect(screen.getByText('Step 2: Cook the recipe')).toBeInTheDocument();
        expect(screen.getByText('Full recipe on')).toBeInTheDocument();
        expect(screen.getByText('https://example.com')).toBeInTheDocument();
    });
});
