interface Iprops {
    error: Error
    resetErrorBoundary: () => void
 }
 
 export function ErrorFallback({error, resetErrorBoundary}: Iprops) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }