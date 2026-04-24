import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <div className="text-center space-y-6 max-w-2xl">
        <Badge variant="secondary" className="text-sm px-4 py-1">
          CIE-O Codificador
        </Badge>
        
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Codificador CIE-O
        </h1>
        
        <p className="text-lg text-foreground-muted">
          Sistema de búsqueda y codificación de términos CIE-O (Clasificación 
          Internacional de Enfermedades para Oncología). Topografía y morfología.
        </p>
        
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-center">Buscar códigos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-muted" />
                <input
                  type="text"
                  placeholder="Buscar por código o término..."
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <Button>Buscar</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
