"use client"
import { Users, Book, MapPin, Receipt, TrendingUp, Calendar } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const AdminDashboard = () => {
  const stats = [
    { title: "Total Students", value: "0", change: "+12%", changeType: "positive" as const, icon: Users },
    { title: "Active Books", value: "0", change: "+3%", changeType: "positive" as const, icon: Book },
    { title: "Occupied Seats", value: "0/0", change: "0%", changeType: "neutral" as const, icon: MapPin },
    { title: "Monthly Revenue", value: "$0", change: "+8%", changeType: "positive" as const, icon: TrendingUp },
  ];

//   const recentActivities = [
//     { id: 1, action: "New student registered", student: "John Smith", time: "2 min ago", type: "registration" },
//     { id: 2, action: "Book returned", student: "Sarah Wilson", book: "Advanced Mathematics", time: "15 min ago", type: "book" },
//     { id: 3, action: "Seat booked", student: "Mike Johnson", seat: "A-23", time: "30 min ago", type: "seat" },
//     { id: 4, action: "Payment received", student: "Emma Davis", amount: "$89", time: "1 hour ago", type: "payment" },
//   ];

  const submitHandle = ()=>{
    toast.message("we'll add this feature soon")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Admin</h1>
          <p className="text-muted-foreground">Here's what's happening at your library today.</p>
        </div>
        <Button variant="default" className="gap-2 cursor-pointer" onClick={submitHandle}>
          <Calendar className="w-4 h-4" />
          Generate Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 bg-gradient-subtle border-muted">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
            {/* <Button variant="outline" size="sm">View All</Button> */}
          </div>
          {/* <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-muted">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'registration' ? 'bg-accent' :
                    activity.type === 'book' ? 'bg-primary' :
                    activity.type === 'seat' ? 'bg-blue-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      by {activity.student}
                      {activity.book && ` • ${activity.book}`}
                      {activity.seat && ` • Seat ${activity.seat}`}
                      {activity.amount && ` • ${activity.amount}`}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div> */}
        </Card>

        <div className="space-y-6">
          <Card className="p-6 bg-gradient-subtle border-muted">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start cursor-pointer" onClick={submitHandle}>
                <Users className="w-4 h-4 mr-2" />
                Add New Student
              </Button>
              <Button variant="outline" className="w-full justify-start cursor-pointer" onClick={submitHandle}>
                <Book className="w-4 h-4 mr-2" />
                Add New Book
              </Button>
              <Button variant="outline" className="w-full justify-start cursor-pointer" onClick={submitHandle}>
                <Receipt className="w-4 h-4 mr-2" />
                Generate Invoice
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-accent/5 border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow" />
              <h3 className="text-lg font-semibold text-foreground">System Health</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Database</span>
                <Badge variant="secondary" className="text-green-500">Healthy</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">API Status</span>
                <Badge variant="secondary" className=" text-green-500">Online</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Backup</span>
                <Badge variant="secondary" className="bg-accent/10 text-green-500">Up to date</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};