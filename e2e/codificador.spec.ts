import { test, expect } from '@playwright/test';

test.describe('Codificador CIE-O', () => {
  test.beforeEach(async ({ page }) => {
    // Ir a la página principal antes de cada prueba
    await page.goto('/');
  });

  test('debe cargar la página principal correctamente', async ({ page }) => {
    // Verifica que el título de la página sea el esperado
    await expect(page).toHaveTitle(/Codificador CIE-O/);
    
    // Verifica que el encabezado principal (h1) contenga CIE-O-3
    const heading = page.locator('h1');
    await expect(heading).toContainText(/CIE-O-3/);
  });

  test('la navegación por pestañas debe funcionar', async ({ page }) => {
    // Identifica las pestañas (tabs)
    const tabEntidadRelacion = page.getByRole('tab', { name: 'Entidad-Relación' });
    const tabReglas = page.getByRole('tab', { name: 'Reglas A-K' });
    const tabCodificador = page.getByRole('tab', { name: 'Codificador' });

    // Clic en Entidad-Relación y verificar que se activa
    await tabEntidadRelacion.click();
    await expect(tabEntidadRelacion).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByText('Estructura de la base de datos')).toBeVisible();

    // Clic en Codificador y verificar que se activa
    await tabCodificador.click();
    await expect(tabCodificador).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByRole('heading', { name: 'Codificador paso a paso' })).toBeVisible();
  });

  test('el formulario del codificador debe tener los campos correctos y flujo en cascada', async ({ page }) => {
    // Navegar a la pestaña Codificador
    await page.getByRole('tab', { name: 'Codificador' }).click();

    // Verificar que el contexto existe
    const contextoDropdown = page.getByRole('combobox').first();
    await expect(contextoDropdown).toBeVisible();

    // Los siguientes dropdowns deben estar deshabilitados inicialmente (cascada)
    const selects = page.getByRole('combobox');
    await expect(selects.nth(1)).toBeDisabled(); // Sistema orgánico
    await expect(selects.nth(2)).toBeDisabled(); // Sitio anatómico

    // Seleccionar un contexto
    await contextoDropdown.click();
    await page.getByRole('option', { name: 'Laboratorio de Anatomía Patológica' }).click();

    // Ahora el primer combo de Topografía debería estar habilitado
    await expect(selects.nth(1)).not.toBeDisabled();
  });
});
