"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Patient {
    constructor(sugar, medicines) {
        this.sugar = (sugar !== null && sugar !== void 0 ? sugar : 0);
        this.medicines = (medicines !== null && medicines !== void 0 ? medicines : 0);
    }
    takeMedicines(numberOfMedicines) {
        this.medicines += numberOfMedicines;
    }
}
exports.default = Patient;
//# sourceMappingURL=Patient.js.map