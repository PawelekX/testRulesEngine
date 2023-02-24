import trool from 'trool';
import logger from 'jet-logger';


console.log("hello");


const csvFilePath = 'C:/Users/Paweł/Desktop/testRulesEngine/testRulesEngine.csv';

const factsHolder = {
    option: 'Regular',
};

const importsHolder = { 
    TicketTypes: {
        REGULAR: 'Regular',
        SEASON: 'SEASON',
    },
};



(async () => {
    try {
        const engine = await trool(csvFilePath);
        const updatedFacts = engine.applyRules(factsHolder, importsHolder);
        console.log(updatedFacts);
        // logger.info(engine.decisionTables);
    } catch (err) {
        console.log(err);
        logger.err(err.message);
    }
})();