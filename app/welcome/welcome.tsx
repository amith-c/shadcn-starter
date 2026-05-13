import { Button } from "~/components/ui/button";
import { ModeToggle } from "~/components/mode-toggle";

export function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8 relative">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Theme Showcase</h1>
        <p className="text-muted-foreground">
          A reusable Shadcn theme with easy customization.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button variant="default">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/80">
          Accent Color
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
        <div className="p-4 rounded-lg border bg-card text-card-foreground">
          <h2 className="font-semibold mb-2">Primary</h2>
          <div className="h-12 w-full bg-primary rounded" />
        </div>
        <div className="p-4 rounded-lg border bg-card text-card-foreground">
          <h2 className="font-semibold mb-2">Secondary</h2>
          <div className="h-12 w-full bg-secondary rounded" />
        </div>
        <div className="p-4 rounded-lg border bg-card text-card-foreground">
          <h2 className="font-semibold mb-2">Accent</h2>
          <div className="h-12 w-full bg-accent rounded" />
        </div>
      </div>
    </main>
  );
}
