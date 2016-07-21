
'use strict';
const main=require('../../main/main.js');
describe('oddSquare', () => {

    let inputs;

    beforeEach(() => {
        inputs = [1,2,3,4,5];
    });
    
    it('should print correct text', () => {
        
        spyOn(console, 'log');

        main.printOddSquare(inputs);
        const expectNumber =35;

        expect(console.log).toHaveBeenCalledWith(expectNumber);
    });
});
