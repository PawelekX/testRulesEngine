import logger from 'jet-logger';
import Patient from './Patient';
import trool from 'trool';


const CSV_FILE_PATH = './MedicineRules.csv';


interface IFactsHolder {
  Patients: Patient;
}

async function getMedicines(
  Patient: Patient,
): Promise<string> {
  let medicines = 0;
  try {
    const facts = _setupFactsHolder(Patient),
      engine = await trool(CSV_FILE_PATH);
      const updatedFacts = engine.applyRules<IFactsHolder>(facts);
      medicines = facts.Patients.medicines;
  } catch (err) {
    logger.err(err, true);
    medicines = -1;
  }
  return ('wez tyle lekow ' + medicines);
}

function _setupFactsHolder(
  Patients: Patient,
): IFactsHolder {
  return {Patients};
}

export default getMedicines;