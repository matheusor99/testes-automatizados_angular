import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {

    let service : UniqueIdService = null;
    
    beforeEach(() => {
        service = new UniqueIdService();
    });

    //.... should ... when ... (... deve ... quando ...)
    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should generate id when called with prefix`, () => {

        const id = service.generateUniqueIdWithPrefix('app');
        
        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should not generated duplicate IDs when called multiple times`, () => {

        const ids = new Set();
        const numeroDeIds = 50; 
        for(let i = 0; i < numeroDeIds; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }

        expect(ids.size).toBe(numeroDeIds);
    });

    it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name} 
        shold return the number of generatedIds when called`, () => {

        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');

        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });

    it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should throw whqn called with empty`, () => {
        const emptyValues = [null, undefined, '']
        emptyValues.forEach(emptyValue => {
            expect(() => service.generateUniqueIdWithPrefix(emptyValue))
            .withContext(`Empty value: ${emptyValue}`)    //verifica qual o contexto do text esta fazendo ele falhar, no caso aqui é o 'app' que coloquei no emptyValues
            .toThrow();
        })
    });
})