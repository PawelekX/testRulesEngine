export interface IPatient {
    sugar: number;
    medicines: number;
  }
  
  class Patient implements IPatient {
  
    public sugar: number;
    public medicines: number;

    constructor(
      sugar?: number,
      medicines?: number,
    ) {
      this.sugar = (sugar ?? 0);
      this.medicines = (medicines ?? 0);
    }

    public takeMedicines(numberOfMedicines: number) {
      this.medicines += numberOfMedicines;
    }
  }

  export default Patient;