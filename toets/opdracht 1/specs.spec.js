describe('Testen voor goede titel en UTF-8.', function() {
    it('Het zou de goede titel moeten zijn met correcte UTF-8.', function () {
        expect(document.title).toBe('Verbeteringen');
        expect(document.charset).toBe('UTF-8');
    });
});

describe('Testen of unitTest.item gelijk is aan "item". ', function () {
    it('Zou item moeten zijn.', function () {
        expect(unitTest.item).toBe('item');
    });
});

describe('Testen of unitTest.beschrijving gelijk is aan "Beschrijving".', function () {
    it('Zou Beschrijving moeten zijn.', function () {
        expect(unitTest.beschrijving).toBe('Beschrijving');
    });
});
describe('Testen of unitTest.boodschap gelijk is aan "Hallo".', function () {
    it('Zou Hallo moeten zijn.', function () {
        expect(unitTest.boodschap).toEqual('Hallo');
    });
});
describe('Testen of unitTest.nummer gelijk is aan de nummer "2".', function () {
    it('Zou 2 moeten zijn.', function () {
        expect(unitTest.nummer).toEqual(2);
    });
});