import { render, screen } from '@testing-library/react';
import App from './App';
import { ToggleSloganProvider } from './AppContext';

//header
test('renders header', () => {
  
  render(
    <ToggleSloganProvider>
      <App />
    </ToggleSloganProvider>
  );
  const headerElement = screen.getByTestId("header");
  expect(headerElement).toBeInTheDocument();
});

//login
test('renders login button', () => {
  render(<ToggleSloganProvider>
    < App />
  </ToggleSloganProvider>);
    const loginButton = screen.findByDisplayValue("Log In");
    expect(loginButton).toBeTruthy;

});

//create user
test('renders create user button', () => {
  render(<ToggleSloganProvider>
    < App />
  </ToggleSloganProvider>);
      const createUserButton = screen.findByLabelText("Create User");
      expect(createUserButton).toBeTruthy;
  
});

//slogan
test('renders slogan', () => {
  
  render(
    <ToggleSloganProvider>
      <App />
    </ToggleSloganProvider>
  );
  const sloganElement = screen.getByText("Ingredients but zero ideas?");
  expect(sloganElement).toBeInTheDocument();
});

//recipeSearch

//footer
test('renders footer', () => {
  
  render(
    <ToggleSloganProvider>
      <App />
    </ToggleSloganProvider>
  );
  const footerElement = screen.getByText("Yummyfier. © Sknala");
  expect(footerElement).toBeInTheDocument();
});