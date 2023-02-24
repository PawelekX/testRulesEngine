import trool from 'trool';
import logger from 'jet-logger';


console.log("hello");


const csvFilePath = './testRulesEngine.csv';

const factsHolder = {
    option: 'REGULAR',
};

const importsHolder = { 
    TicketTypes: {
        REGULAR: 'REGULAR',
        SEASON: 'SEASON',
    },
};



(async () => {
    try {
        const engine = await trool(csvFilePath);
        const updatedFacts = engine.applyRules(factsHolder, importsHolder);
        logger.info(engine.decisionTables);
    } catch (err) {
        console.log(err);
        logger.err(err.message);
    }
})();