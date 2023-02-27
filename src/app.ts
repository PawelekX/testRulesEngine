import logger from 'jet-logger';
import getMedicines from './getMedicines';
import Patient from './Patient';

const patient = new Patient(13,0);

(async () => {
  const p = (total: string) => logger.info('Medicines ' + total + '\n')
  let medicinesToTake = await getMedicines(patient);
  p(medicinesToTake);
})();
