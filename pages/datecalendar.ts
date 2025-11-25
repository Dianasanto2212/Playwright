 await page.getByRole('option', { name: 'Choose Saturday, November 22nd,' }).click();
  await page.locator('#dateAndTimePickerInput').click();
  await page.getByText('21:45').click();