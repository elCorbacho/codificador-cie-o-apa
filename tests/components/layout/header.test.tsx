import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from '../../../components/layout/header';

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />);
    expect(screen.getByText(/CIE-O-3/i)).toBeDefined();
    expect(screen.getByText(/OMS · IARC · Min. Sanidad España 2021/i)).toBeDefined();
  });
});
