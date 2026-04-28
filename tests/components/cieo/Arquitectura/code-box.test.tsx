import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CodeBox } from '@/components/cieo/Arquitectura/code-box';

describe('CodeBox Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<CodeBox />);
    expect(getByText('Estructura del código — CIE-O-3.1')).toBeDefined();
  });
});
