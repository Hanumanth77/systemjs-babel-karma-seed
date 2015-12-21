class MyParentClass {

	constructor(value) {
		this.value = value;
	}
}

class MyClass extends MyParentClass {

	constructor() {
		super(100500);
		console.log('The value is:', this.value);
	}

	getValue() {
		return this.value;
	}
}

export default MyClass;