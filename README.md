# React Router v6 useParams Hook Error

This repository demonstrates a common error encountered when using the `useParams` hook in React Router v6.  The error occurs when attempting to access `useParams` outside of a component that's directly within a `<Route>` or `<Routes>` component.  The solution shows how to correctly access parameters within the routing context.

## Error

The error message is: `'useParams' hook was called outside of a router context.`

## Solution

The solution involves ensuring that the `useParams` hook is used only within a component rendered by a `<Route>` or `<Routes>` component.  This provides the necessary routing context for the hook to function correctly.