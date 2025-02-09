To solve this, ensure your `useParams` hook call is inside a component that is a child of a route component:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
    </div>
  );
}

export default MyComponent;
```

Then, you would use this component within a `Route`:

```javascript
<Route path="/products/:id" element={<MyComponent />} />
```
This ensures that `useParams` is called within the necessary context.  Do not attempt to pass `useParams` values directly between unrelated components.