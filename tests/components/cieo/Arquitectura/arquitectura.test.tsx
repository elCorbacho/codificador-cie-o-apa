import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ArquitecturaSection } from '../../../../components/cieo/Arquitectura';
import { CodeBox } from '../../../../components/cieo/Arquitectura/code-box';
import { InfoCards } from '../../../../components/cieo/Arquitectura/info-cards';

describe('ArquitecturaSection Components', () => {
  it('renders ArquitecturaSection', () => {
    render(<ArquitecturaSection />);
    expect(screen.getByText(/Código de 10 caracteres/i)).toBeDefined();
  });

  it('renders CodeBox', () => {
    render(<CodeBox />);
    expect(screen.getByText(/Estructura del código — CIE-O-3.1/i)).toBeDefined();
  });

  it('renders InfoCards with correct topography color', () => {
    render(<InfoCards />);
    const dots = screen.getAllByTestId('topography-dot');
    // The first one is topography, which should be var(--color-primary)
    expect(dots[0].style.background).toBe('var(--color-primary)');
  });
});
