# remap
A powerful functional-style object transformation tool.

## Features
- Curried
- Recursive: supports nested objects. You can remap remaps

## Installation

```
npm install remap
```

## Usage

```javascript
var updateRequest = remap({
    url: x => `http://mydomain.com/comments/${x.id}`
    method: 'PUT'
    body: {
        author: x => x.user,
        data: x => x.comment
    }
});

var formatResponse = remap({
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
