import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AppTabs } from '../../../components/layout/app-tabs';

describe('AppTabs Component', () => {
  it('renders Arquitectura tab content', () => {
    render(<AppTabs activeTab="arquitectura" />);
    expect(screen.getByText(/Código de 10 caracteres/i)).toBeDefined();
  });

  it('renders correct content for each tab', () => {
    const { rerender } = render(<AppTabs activeTab="arquitectura" />);
    expect(screen.getByText(/Código de 10 caracteres/i)).toBeDefined();

    rerender(<AppTabs activeTab="reglas" />);
    // reglas renders a grid, just check component mounts
    expect(screen.getAllByText(/Reglas/i).length).toBeGreaterThan(0);
  });
});
