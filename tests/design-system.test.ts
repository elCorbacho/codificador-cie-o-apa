import { expect, test } from 'vitest';
import fs from 'fs';
import path from 'path';

test('globals.css should define Airbnb design tokens', () => {
  const cssContent = fs.readFileSync(path.resolve(__dirname, '../app/globals.css'), 'utf-8');
  
  // Check for some key Airbnb-like tokens
  expect(cssContent).toContain('--color-primary');
  expect(cssContent).toContain('--color-canvas');
});
