import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
  } from "@/components/ui/card";
  
  interface RecommendationCardProps {
    name: string;
    title: string;
    content: string;
    date: string;
    relationship: string;
  }
  
  export function RecommendationCard({
    name,
    title,
    content,
    date,
    relationship
  }: RecommendationCardProps) {
    return (
      <Card className="flex flex-col h-full">
        <CardHeader>
          <div className="space-y-1">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground">{content}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1 text-xs text-muted-foreground">
          <p className="italic">{relationship}</p>
          <time>{date}</time>
        </CardFooter>
      </Card>
    );
  }