import MyClass from "app/MyClass";

describe('Application tests', function () {
	it('Successful test', function () {
		expect(100500).toBe(new MyClass().getValue());
	})
});