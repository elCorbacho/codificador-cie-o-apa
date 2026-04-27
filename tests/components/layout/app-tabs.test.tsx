import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AppTabs } from '../../../components/layout/app-tabs';

describe('AppTabs Component', () => {
  it('renders all tabs', () => {
    render(<AppTabs />);
    expect(screen.getByText(/Arquitectura/i)).toBeDefined();
    expect(screen.getByText(/Entidad-Relación/i)).toBeDefined();
    expect(screen.getByText(/Reglas A-K/i)).toBeDefined();
    expect(screen.getByText(/Codificador/i)).toBeDefined();
    expect(screen.getByText(/Casos especiales/i)).toBeDefined();
  });
});
