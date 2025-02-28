function ListToList() {
    // Получаем текущую таблицу
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // Получаем листы
    const sourceSheet = spreadsheet.getSheetByName('Определите идеальную спецтехнику СПБ | 2025-02-28 08-46-56 (копия)');  // Укажите имя исходного листа
    const targetSheet = spreadsheet.getSheetByName('marquiz_export_2025-01-29T06_59_14.416Z_part_1.csv (копия)'); // Укажите имя первого целевого листа
    // Получаем данные из исходного листа
    const sourceRange = sourceSheet.getDataRange(); // Получаем весь диапазон
    const sourceData = sourceRange.getValues(); // Получаем значения
    
  
     // Массив для хранения отфильтрованных данных
    const filteredData = []; //
    
    // Извлекаем данные из колонок A, B, C (индексы 0, 1, 2) и добавляем их в формат для колонок C, D, E (индексы 2, 3, 4)
    for (let i = 1; i < sourceData.length; i++) {
      // Создаем новую строку, куда поместим значение из A, B и C (в)---> C, D и E целевого листа
      const row = [sourceData[i][0], sourceData[i][1], sourceData[i][8], 'NULL', 'NULL', sourceData[i][9], 'NULL', sourceData[i][22]+', '+sourceData[i][21], sourceData[i][10]];
      filteredData.push(row); // Добавляем строку с данными в новый массив
    }
    console.log(filteredData); // получили данные из листа, который на интересует
    
    // Вставляем отфильтрованные данные на целевой лист, начиная с C1 (индексы 3 для A, 4 для B и 5 для C)
  
  
    // targetSheet.getRange(2, 6, filteredData.length, filteredData[0].length).setValues(filteredData); //  перезаписывает весь лист начиная с поля name
    targetSheet.getRange(targetSheet.getLastRow()+1, 6, filteredData.length, filteredData[0].length).setValues(filteredData);
    
  }
  