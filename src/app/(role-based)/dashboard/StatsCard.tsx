import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon,
  className 
}: StatsCardProps) => {
  return (
    <Card className={cn(
      "p-6 hover:shadow-elegant transition-smooth bg-gradient-subtle border-muted",
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-end gap-2">
            <h3 className="text-2xl font-bold text-foreground">{value}</h3>
            {change && (
              <span className={cn(
                "text-sm font-medium",
                changeType === 'positive' && "text-accent",
                changeType === 'negative' && "text-destructive",
                changeType === 'neutral' && "text-muted-foreground"
              )}>
                {change}
              </span>
            )}
          </div>
        </div>
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};