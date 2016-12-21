# react-transport

A component that transports HTML elements to document.body.

```javascript
<Transport isOpen>
	<h1>Hello World</h1>
</Transport>

// The H1 element will be appended to the end of document.body
```

# API
isOpen : A React Component property that takes a boolean. If true, the element will be removed from the normal HTML flow and appended to the end of the document.body. If false, then nothing will render.

children : A single React element.
