
// src/app/error.tsx
'use client' 
 
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-destructive mb-4">Something went wrong!</h2>
      <p className="text-muted-foreground mb-6">{error.message || "An unexpected error occurred."}</p>
      <Button
        onClick={
          () => reset()
        }
        variant="destructive"
        size="lg"
      >
        Try again
      </Button>
    </div>
  )
}
