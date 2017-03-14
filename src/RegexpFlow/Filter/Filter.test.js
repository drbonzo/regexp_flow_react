import Filter from './Filter';

describe('Filter', function () {

	/**
	 * @var {Filter}
	 */
    var filter;

    beforeEach(function () {
        filter = new Filter();
    });

    describe('buildingRegExp', function () {

        it('should build RegExp object with no flags when given all flags arguments to false', function () {
            var actual = filter.buildRegExp('foobar', false, false, false);
            expect(actual).toEqual(/foobar/);
        });

        it('should build RegExp object with all flags when all flags are set to true', function () {
            var actual = filter.buildRegExp('foobar', true, true, true);
            expect(actual).toEqual(/foobar/gim);
        });

    });

    describe('splitTextIntoLines', function () {

        it('should split text into lines by \\n character', function () {
            expect(filter.splitTextIntoLines('foo\nbar')).toEqual(['foo', 'bar']);
        });

        it('should split text into lines by \\r\\n character', function () {
            expect(filter.splitTextIntoLines('foo\r\nbar')).toEqual(['foo', 'bar']);
        });

        it('should treat \\n\\n as single separator', function () { // FIXME wtf? why split treats \n\n as single separator?
            expect(filter.splitTextIntoLines('foo\n\nbar')).toEqual(['foo', '', 'bar']);
        });

        it('should treat \\n\\r as single separator', function () { // FIXME wtf? why split treats \n\n as single separator?
            expect(filter.splitTextIntoLines('foo\n\rbar')).toEqual(['foo', '', 'bar']);
        });

        it('should split text into lines by \\n and \\r\\n character', function () {
            expect(filter.splitTextIntoLines('Lorem\r\nipsum\ndolor sid amet')).toEqual(['Lorem', 'ipsum', 'dolor sid amet']);
        });
    });

    describe('abstract methods', function () {

        it('processText should throw exception as it is \'abstract\' class', function () {
            expect(function () {
                filter.processText('Lorem ipsum');
            }).toThrow();
        });

        it('initializeFromObject should throw exception as it is \'abstract\' class', function () {
            expect(function () {
                filter.initializeFromObject('{}');
            }).toThrow();
        });

        it('getExportObject should throw exception as it is \'abstract\' class', function () {
            expect(function () {
                filter.getExportObject('{}');
            }).toThrow();
        });
    });
});
