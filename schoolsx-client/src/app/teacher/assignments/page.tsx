"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, CheckCircle, FileText, Filter, MoreHorizontal, Plus, Search, Users } from "lucide-react"; // Users was missing
import { useState } from "react";
import { addAssignment, Assignment } from "@/store/slices/learningSlice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AssignmentsPage() {
  const dispatch = useAppDispatch();
  const { assignments } = useAppSelector((state) => state.learning);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [filterType, setFilterType] = useState('all');

  const [newAssignment, setNewAssignment] = useState<Partial<Assignment>>({
    status: 'Open',
    subjectId: 'SUB-math', // default
    classId: 'C-6A' // default
  });

  const handleCreate = () => {
    if (!newAssignment.title || !newAssignment.dueDate) return;

    const payload: Assignment = {
      id: `ASS-${Date.now()}`,
      title: newAssignment.title,
      description: newAssignment.description,
      subjectId: newAssignment.subjectId!,
      classId: newAssignment.classId!,
      dueDate: newAssignment.dueDate,
      status: 'Open',
    };

    dispatch(addAssignment(payload));
    setIsCreateOpen(false);
    setNewAssignment({ status: 'Open', subjectId: 'SUB-math', classId: 'C-6A' });
  };

  const filteredAssignments = assignments.filter(a => {
    if (filterType === 'all') return true;
    return a.status.toLowerCase() === filterType;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assignments</h1>
          <p className="text-muted-foreground">
            Create, track, and grade assignments for your classes.
          </p>
        </div>

        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Plus className="mr-2 h-4 w-4" /> Create Assignment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create New Assignment</DialogTitle>
              <DialogDescription>
                Set up a new task for your students.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Title</Label>
                <Input
                  value={newAssignment.title || ''}
                  onChange={e => setNewAssignment({ ...newAssignment, title: e.target.value })}
                  className="col-span-3"
                  placeholder="e.g. Algebra Homework 1"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Due Date</Label>
                <Input
                  type="date"
                  value={newAssignment.dueDate || ''}
                  onChange={e => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Class</Label>
                <Select
                  value={newAssignment.classId}
                  onValueChange={v => setNewAssignment({ ...newAssignment, classId: v })}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="C-6A">Grade 6A</SelectItem>
                    <SelectItem value="C-7B">Grade 7B</SelectItem>
                    <SelectItem value="C-9C">Grade 9C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-start gap-4">
                <Label className="text-right pt-2">Description</Label>
                <Textarea
                  value={newAssignment.description || ''}
                  onChange={e => setNewAssignment({ ...newAssignment, description: e.target.value })}
                  className="col-span-3"
                  placeholder="Instructions for students..."
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreate}>Create Assignment</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Stats Cards - Static for now but could computed from Redux */}
        <Card>
          <CardContent className="p-6 flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground uppercase">Needs Grading</span>
            <div className="text-3xl font-bold">12</div>
            <Progress value={30} className="h-1.5 mt-2 bg-slate-100" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground uppercase">Upcoming Due</span>
            <div className="text-3xl font-bold">{assignments.filter(a => a.status === 'Open').length}</div>
            <p className="text-xs text-muted-foreground mt-2">Active assignments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col gap-1">
            <span className="text-xs font-medium text-muted-foreground uppercase">Completion Rate</span>
            <div className="text-3xl font-bold text-green-600">88%</div>
            <p className="text-xs text-muted-foreground mt-2">Average across all classes</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Tabs defaultValue="all" className="w-[400px]" onValueChange={setFilterType}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="open">Active</TabsTrigger>
              <TabsTrigger value="grading">Grading</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search assignments..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon"><Filter className="h-4 w-4" /></Button>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredAssignments.length > 0 ? filteredAssignments.map((assign, i) => (
            <Card key={assign.id} className="hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-2 duration-300">
              <CardContent className="p-4 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="font-semibold">{assign.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {assign.classId}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Due {assign.dueDate}</span>
                  </div>
                </div>

                <div className="flex-1 w-full md:w-auto space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Submission</span>
                    <span className="font-medium">10/30</span>
                  </div>
                  <Progress value={33} className="h-2" />
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                  <Badge variant={assign.status === 'Open' ? 'default' : 'secondary'} className="w-24 justify-center">
                    {assign.status}
                  </Badge>
                  <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          )) : (
            <div className="text-center py-10 text-muted-foreground">No assignments found.</div>
          )}
        </div>
      </div>
    </div>
  );
}
