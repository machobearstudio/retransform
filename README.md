# retransform
Functional-style object transformation tool.

## Features
- Curried
- Recursive: supports nested objects and arrays

## Installation

```
npm install retransform
```

## Usage

```javascript
var updateRequest = retransform({
    url: x => `http://mydomain.com/comments/${x.id}`
    method: 'PUT'
    body: {
        author: x => x.user,
        data: x => x.comment
    }
});

var formatResponse = retransform({
    comments: data => data,
    status: 'ok'
});

// Somewhere in controller
const onEditComment = pipe(
    updateRequest,
    sendToBackend,
    formatResponse,
    dispatch
);
```

## Testing
```
npm test
```
