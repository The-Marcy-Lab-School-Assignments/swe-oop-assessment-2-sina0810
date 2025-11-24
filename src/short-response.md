# Section 2 — Short Response

Write your responses directly in this file. Follow markdown formatting guidelines. Check the rubric.md file to see how your short responses will be graded. 

As a quick guide, check the following before submitting:
- [] Answered all parts of every question
- [] No typos or grammar mistakes (use grammarly!)
- [] Accurately uses relevant technical terminology
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Responses are concise and easy to comprehend

---

## Question 1

In your own words, explain what does _encapsulation_ refer to? Why is this concept beneficial when programming? 

Provide a code snippet to illustrate _encapsulation_.

## Response 2

- Encapsulation is when we keep the data safe inside an object and only allow access through methods. 
- This is where we can keep the values safe, prevent accidental changes, and make it easier to manage if we want to change it.

```js
class Car {
  #fuel = 0; 

  drive(miles) {
    this.#fuel += miles;
  }

  getFuelLevel() {
    // This is how we can access to the fuel because it's privte method. 
    return this.#fuel; 
  }
}

const myCar = new Car();
myCar.drive(50);
console.log(myCar.getFuelLevel()); // We need to use getFuelLevel method otherwise it won't work. 

```

## Question 2

Explain what the `this` keyword is. Why is the `this` keyword useful?

In the code snippet below, what does `this` refer to?

```js
class Counter {
	constructor() {
		this.count = 0;
	}
  increment() {
    this.count++;
  }
}

const counterA = new Counter();
const counterB = new Counter();

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();

console.log(counterA.count);
console.log(counterB.count);
```

## Response 2

- The `this` is a special keyword that is used in JavaScript.
- Which reference to the object is currently using the `this` code. 
- It’s useful because when we use it inside any method, it will access the object’s properties right away by itself. 
- This means we don’t need to repeat the name of the code that we are meant to refer to."

- In the code above it references the `object` itself.



## Question 3

In your own words, explain what **polymorphism** means in OOP. Provide an example in code that demonstrates polymorphism.

## Response 3

**Polymorphism** allows the user to use the same method name, and each class can give that method its own behavior.

- This means the superclass declares a method, and later on the subclass can use the same method name that has been declared by the superclass.

- However, the subclass can change the method to any behavior without affecting the superclass, so we can call both classes that have the same method names but perform different actions.

```js
class Vehicle {
  drive() {
    return `This vehicle drives super fast.`;
  }
}

class Car extends Vehicle {
  drive(){
    return `This car is second to none.`;
  }
}

const myCar = new Car()
console.log(myCar.drive())

const myCar2 = new Vehicle()
console.log(myCar2.drive())

```

## Question 4

You're building a game where players can raise different digital pets: Cats, Dogs, and Birds. All pets have have a `name`, `energy` level, and `happiness` level and can all `sleep`. Cats have the ability to `hunt`, dogs have the ability to `chase`, and birds have the ability to `fly`.

**Part A:** Describe in words how you would use inheritance to organize these classes.

**Part B:** Explain one advantage of using inheritance here instead of creating three completely separate classes.

## Response 4

- First, I would create a superclass and name it `Pets` since we have different types of animals.
- Then I will declare properties for the `Pets` superclass. 
- Since they all share the same properties. 

- After that I will use extends to declare other subclasses, such as: `Cats`, `Dogs`, and `Birds`.
- It’s clear that they all share the same properties, such as: `name`, `energy`, `happiness`, and `sleep`. For that purpose I can declare a super keyword to inherit the properties from the super class for each one of my subclasses. 

- Then I will declare different methods for each one of these subclasses.
- I’ll give the `hunt` method to `Cats`. The `chase` methods to `Dogs`, and `fly` methods to `Birds`. 


- The advantage of using inheritance here instead of creating three completely separate classes is that we don’t need to repeat our codes for each one of the classes. 
- By using inheritance we can keep our code more organized and much cleaner to read. 
- Also, we can make a change to each one of the subclasses so easily without affecting the other subclass nor the superclass. 
