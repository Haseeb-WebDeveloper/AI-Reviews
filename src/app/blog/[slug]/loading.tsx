export default function BlogPostLoading() {
  return (
    <div className="min-h-screen bg-background pt-44 md:pt-44 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-foreground/10 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-foreground/10 rounded w-1/4 mb-8"></div>
          <div className="aspect-video bg-foreground/10 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-foreground/10 rounded w-full"></div>
            <div className="h-4 bg-foreground/10 rounded w-full"></div>
            <div className="h-4 bg-foreground/10 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 