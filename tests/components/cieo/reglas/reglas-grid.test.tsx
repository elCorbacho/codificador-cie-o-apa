import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ReglasGrid } from '@/components/cieo/reglas/reglas-grid';

describe('ReglasGrid Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ReglasGrid />);
    expect(getByText('Reglas de codificación A–K')).toBeDefined();
  });
});
