import { Search, Plus, Edit, Trash2, Eye, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const students = [
  {
    id: "ST001",
    name: "John Smith",
    email: "john.smith@university.edu",
    rollNo: "2024001",
    course: "Computer Science",
    year: "3rd Year",
    membershipStatus: "Active",
    joinDate: "2024-01-15",
    lastActivity: "2 hours ago",
    booksIssued: 3,
    outstandingFees: 0,
    avatar: null
  },
//   {
//     id: "ST002", 
//     name: "Sarah Wilson",
//     email: "sarah.wilson@university.edu",
//     rollNo: "2024002",
//     course: "Mathematics",
//     year: "2nd Year",
//     membershipStatus: "Active",
//     joinDate: "2024-02-01",
//     lastActivity: "1 day ago",
//     booksIssued: 2,
//     outstandingFees: 25,
//     avatar: null
//   },
//   {
//     id: "ST003",
//     name: "Mike Johnson",
//     email: "mike.johnson@university.edu", 
//     rollNo: "2024003",
//     course: "Physics",
//     year: "1st Year",
//     membershipStatus: "Expired",
//     joinDate: "2023-09-15",
//     lastActivity: "1 week ago",
//     booksIssued: 1,
//     outstandingFees: 50,
//     avatar: null
//   },
//   {
//     id: "ST004",
//     name: "Emma Davis",
//     email: "emma.davis@university.edu",
//     rollNo: "2024004", 
//     course: "Business Administration",
//     year: "4th Year",
//     membershipStatus: "Active",
//     joinDate: "2024-01-20",
//     lastActivity: "3 hours ago",
//     booksIssued: 5,
//     outstandingFees: 0,
//     avatar: null
//   }
];

export const StudentManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Management</h1>
          <p className="text-muted-foreground">Manage student records, memberships, and activities</p>
        </div>
        <div className="flex gap-2">
          {/* <Button variant="outline" className="gap-2">
            <Upload className="w-4 h-4" />
            Import CSV
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button> */}
          <Button variant="default" className="gap-2">
            <Plus className="w-4 h-4" />
            Add Student
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search students by name, roll number, or email..." 
            className="pl-10 bg-background/50 border-muted"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="computer-science">Computer Science</SelectItem>
            <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="business">Business Administration</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="bg-gradient-subtle border-muted">
        <Table>
          <TableHeader>
            <TableRow className="border-muted">
              <TableHead>Student</TableHead>
              <TableHead>Roll No</TableHead>
              <TableHead>Course & Year</TableHead>
              <TableHead>Membership</TableHead>
              <TableHead>Books Issued</TableHead>
              <TableHead>Outstanding Fees</TableHead>
              <TableHead>Last Activity</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} className="border-muted hover:bg-accent/5">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={student.avatar || ""} />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm">{student.rollNo}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium text-foreground">{student.course}</p>
                    <p className="text-sm text-muted-foreground">{student.year}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant={student.membershipStatus === 'Active' ? 'secondary' : 'destructive'}
                    className={student.membershipStatus === 'Active' 
                      ? 'bg-accent/10 text-accent border-accent/20' 
                      : 'bg-destructive/10 text-destructive border-destructive/20'
                    }
                  >
                    {student.membershipStatus}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{student.booksIssued}</span>
                    <span className="text-muted-foreground">books</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={student.outstandingFees > 0 ? 'text-destructive font-medium' : 'text-muted-foreground'}>
                    ${student.outstandingFees}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">{student.lastActivity}</TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-destructive/10 hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {students.length} of {students.length} students
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};