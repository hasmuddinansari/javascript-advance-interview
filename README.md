# javascript-advance-interview



#### 1. Implement a curry() function, which accepts a function and returns a curried one.

#### Example : 

```js
const curry = () => {} // implement this function

const sum = (a, b, c) => {
  return a + b + c;
};

const makeSum = curry(sum);

makeSum(2)(2, 2)      // 6
makeSum(2)(3)(5)      // 10
makeSum(2)(3, 9)      // 14
```


### Answer :
```js

const curry = (fn) => {
  const curried = (...args) =>
    fn.length <= args.length  // fn.length is (arity) number of args we need in function
      ? fn(...args)
      : (...more) => curried(...args, ...more);
  return curried;
};


```

#

#### 2.  Write a function flatObject which takes an object as an input and  returns the flattened object as shown below:

#### Example : 

```js
const flatObject = () => {} // implement this function ??

const target = {
  field1: 1,
  field2: undefined,
  field3: "value",
  field4: {
    child: "child",
    child4: "child4",
    child2: {
      child3: "child2"
    }
  }
};

flatObject(target);  

// result

{
  field1: 1,
  field2: undefined,
  field3: "value",
  "field4.child": "child",
  "field4.child4": "child4",
  "field4.child2.child3": "child2"
};


```


### Answer :


```js

const flatObject = (obj) => {
  const flat = (current, mainKey, result = {}) => {
    Object.entries(current).forEach(([key, item]) => {
      const newKey = mainKey ? `${mainKey}.${key}` : key;
      if (typeof item === "object" && item && !Array.isArray(item)) {
        flat(item, newKey, result);
      } else {
        result[newKey] = item;
      }
    });
    return result;
  };
  return flat(obj);
};

```

#


##### 3.  continue >>>>>

#### Example : 

