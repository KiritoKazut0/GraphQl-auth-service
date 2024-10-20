import xlsx from 'xlsx';
import IAsentamientoData from '../interface/IAsentamientoData';

export const readExcel = (filePath: string):Array<IAsentamientoData>  => {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return xlsx.utils.sheet_to_json(sheet);
};
