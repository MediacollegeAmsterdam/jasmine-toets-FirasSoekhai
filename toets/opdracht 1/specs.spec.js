describe('Testen of de titel goed is en klopt met de UTF-8 in test 1.', function() {
    it('Het zou de goede titel moeten zijn met correcte UTF-8.', function () {
        expect(document.title).toBe('Verbeteringen');
        expect(document.charset).toBe('UTF-8');
    });
});
describe('Testen of item en unitTest.item aan elkaar gekoppeld zijn in test 2.', function () {
    it('Zou item moeten zijn.', function () {
        expect(unitTest.item).toBe('item');
    });
});

describe('Testen of Beschrijving en unitTest.beschrijving aan elkaar gekoppeld zijn in test 3.', function () {
    it('Zou Beschrijving moeten zijn.', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});
describe('Testen of de unitTest.boodschap is gekoppeld aan het bericht "Hallo" in test 4.', function () {
    it('Zou Hallo moeten zijn.', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});
describe('Testen of unitTest.nummer is gekoppeld aan het nummer "2" in test 5.', function () {
    it('Zou 2 moeten zijn.', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});