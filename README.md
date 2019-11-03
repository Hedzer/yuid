
## Yield UID

### What is it?
`yield-uid` produces unique ids using javascript generator methods.

### Installation
```
npm install --save yield-uid
```

### Usage
```javascript
import uid from 'yield-uid';

// using generators
const generator = uid.generator();  // initialize the generator
const uid = generator.next().value; // pull a uid
```
or, alternatively, you can use a static, pre-instantiated generator provided by the class.
```javascript
import uid from 'yield-uid';
const uid = uid.getId();
```
