"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronRight, Edit2, Folder, FolderPlus, MoreHorizontal, Plus, Trash2, Users } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HierarchyPage() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ "root": true, "g7": true });

  const toggle = (id: string) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const structure = [
    {
      id: "g1", name: "Grade 1", type: "grade", studentCount: 120, children: [
        { id: "g1a", name: "Section A", type: "section", studentCount: 40 },
        { id: "g1b", name: "Section B", type: "section", studentCount: 40 },
        { id: "g1c", name: "Section C", type: "section", studentCount: 40 },
      ]
    },
    {
      id: "g7", name: "Grade 7", type: "grade", studentCount: 124, children: [
        { id: "g7a", name: "Section A", type: "section", studentCount: 42 },
        { id: "g7b", name: "Section B", type: "section", studentCount: 41 },
        { id: "g7c", name: "Section C", type: "section", studentCount: 41 },
      ]
    },
    {
      id: "g8", name: "Grade 8", type: "grade", studentCount: 115, children: [
        { id: "g8a", name: "Section A", type: "section", studentCount: 38 },
        { id: "g8b", name: "Section B", type: "section", studentCount: 39 },
        { id: "g8c", name: "Section C", type: "section", studentCount: 38 },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hierarchy & Structure</h1>
          <p className="text-muted-foreground">Manage grades, sections, and class structures.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><FolderPlus className="mr-2 h-4 w-4" /> Add Grade</Button>
          <Button><Plus className="mr-2 h-4 w-4" /> Add Section</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Tree View */}
        <Card className="md:col-span-1 h-full min-h-[500px]">
          <CardHeader>
            <CardTitle className="text-base">School Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div
                className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer font-semibold text-blue-700"
                onClick={() => toggle("root")}
              >
                {expanded["root"] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <Folder className="h-4 w-4" />
                <span>SchoolX Campus</span>
              </div>

              {expanded["root"] && (
                <div className="ml-4 border-l pl-2 space-y-1">
                  {structure.map(grade => (
                    <div key={grade.id}>
                      <div
                        className="flex items-center justify-between p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer text-sm"
                        onClick={() => toggle(grade.id)}
                      >
                        <div className="flex items-center gap-2">
                          {expanded[grade.id] ? <ChevronDown className="h-3 w-3 text-muted-foreground" /> : <ChevronRight className="h-3 w-3 text-muted-foreground" />}
                          <span>{grade.name}</span>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild><MoreHorizontal className="h-3 w-3 text-muted-foreground hover:text-foreground" /></DropdownMenuTrigger>
                          <DropdownMenuContent><DropdownMenuItem>Edit</DropdownMenuItem><DropdownMenuItem>Add Section</DropdownMenuItem></DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      {expanded[grade.id] && (
                        <div className="ml-4 border-l pl-2 space-y-1">
                          {grade.children.map(section => (
                            <div key={section.id} className="flex items-center justify-between p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer text-sm group">
                              <span className="flex items-center gap-2 text-muted-foreground"><Users className="h-3 w-3" /> {section.name}</span>
                              <Edit2 className="h-3 w-3 opacity-0 group-hover:opacity-100 text-muted-foreground" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Details View */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Grade 7 Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Grade Name</label>
                <Input defaultValue="Grade 7" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Coordinator</label>
                <Input defaultValue="Mrs. Sharma" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Sections Configuration</h3>
              <div className="border rounded-lg divide-y">
                <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-900 font-medium text-sm">
                  <span>Section Name</span>
                  <span>Students</span>
                  <span>Class Teacher</span>
                  <span>Actions</span>
                </div>
                {[
                  { name: "Section A", students: 42, teacher: "Mr. Rajesh" },
                  { name: "Section B", students: 41, teacher: "Ms. Anita" },
                  { name: "Section C", students: 41, teacher: "Mrs. Kavita" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 text-sm">
                    <span>{item.name}</span>
                    <span className="text-center">{item.students}</span>
                    <span>{item.teacher}</span>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="h-6 w-6"><Edit2 className="h-3 w-3" /></Button>
                      <Button size="icon" variant="ghost" className="h-6 w-6 text-red-500"><Trash2 className="h-3 w-3" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel Changes</Button>
              <Button>Save Configuration</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
