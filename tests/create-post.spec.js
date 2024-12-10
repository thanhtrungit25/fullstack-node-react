import { test, expect } from './fixtures/index'

test('allows creating a new post', async ({ page, auth }) => {
  const testUser = await auth.signupAndLogin()
  await page.getByLabel('Title:').click()
  await page.getByLabel('Title:').fill('Test Post')
  await page.getByLabel('Title:').press('Tab')
  await page.locator('textarea').fill('Hello World')
  await page.locator('textarea').press('Tab')
  await page.getByRole('button', { name: 'Create' }).press('Enter')
  // await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('html').click()
  await expect(page.getByText(`Test PostWritten by ${testUser}`)).toBeVisible()
})
