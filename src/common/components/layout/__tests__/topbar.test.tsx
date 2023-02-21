import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { TopBar } from '../TopBar';

afterEach(() => cleanup());

test('should render Top Bar with title', async () => {
  const title = 'Test title';
  render(<TopBar screenTitle={title}/>);
  expect(screen.getByText(title)).toBeInTheDocument();
});