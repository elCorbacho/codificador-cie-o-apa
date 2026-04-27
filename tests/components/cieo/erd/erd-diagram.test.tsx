import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { ErdDiagram } from '@/components/cieo/erd/erd-diagram';

describe('ErdDiagram Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ErdDiagram />);
    expect(getByText('Entidad–Relación')).toBeDefined();
  });
});
