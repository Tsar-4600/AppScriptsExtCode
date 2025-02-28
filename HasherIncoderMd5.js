function hashMD5() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange("A1:A" + sheet.getLastRow()); // Измените диапазон в зависимости от ваших данных
  const values = range.getValues();

  const results = values.map(row => {
    const value = row[0];
    return [value ? Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, value).map(b => ('0' + (b & 0xFF).toString(16)).slice(-2)).join('') : ''];
  });

  const resultRange = sheet.getRange(1, 2, results.length, 1); // Запишите результат в столбец B
  resultRange.setValues(results);
}