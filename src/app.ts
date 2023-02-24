import trool from 'trool';
import logger from 'jet-logger';


console.log("hello");


const csvFilePath = './testRulesEngine.csv';

const factsHolder = {
    Tickets: 'Regular',
};

const importsHolder = { 
    TicketTypes: {
        REGULAR: 'Regular',
        SEASON: 'SEASON',
    },
};



(async () => {
    try {
        console.log('git');
        const engine = await trool(csvFilePath);
        console.log('git2');
        console.log(engine);
        const updatedFacts = engine.applyRules(factsHolder, importsHolder);
        console.log(updatedFacts);
        logger.info(engine.decisionTables);
    } catch (err) {
        logger.err(err.message);
    }
})();