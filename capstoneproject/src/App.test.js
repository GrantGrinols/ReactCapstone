import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App.js';
import { MemoryRouter } from 'react-router-dom';

test('successful form submission',  () => {
  render(
  
      <App/>
    
  );
  fireEvent.click(screen.getByText(/Reserve a Table/i));

  fireEvent.change(screen.getByLabelText(/Name/i), { target: {value: "Grant Grinols"}});
  fireEvent.change(screen.getByLabelText(/Date/i), { target: {value: "2024-03-19"}});
  fireEvent.change(screen.getByLabelText(/Time/i), { target: {value: "13:00"}});
  fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: {value: '1'}});
  fireEvent.change(screen.getByLabelText(/Email/i), { target: {value: "fakeemail@gmail.com"}});
  fireEvent.change(screen.getByLabelText(/Phone/i), { target: {value: "1234567890"}});


  fireEvent.click(screen.getByText(/Submit Reservation!/i));

 
    expect(screen.getByText(/Your Receipt/i)).toBeInTheDocument();
    expect(screen.getByText(/2024-03-19/i)).toBeInTheDocument();
    expect(screen.getByText(/13:00/i)).toBeInTheDocument();
    expect(screen.getByText(/Number of guests: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Grant Grinols/i)).toBeInTheDocument();
    expect(screen.getByText(/fakeemail@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/1234567890/i)).toBeInTheDocument();
  
});