"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Mail, Phone, Search, X, UserPlus, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { api } from "@schoolx/api";
import { Inquiry, Application } from "@/domain/types";
import { useState, useEffect } from "react";

export default function AdminAdmissionsPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [inqData, appData] = await Promise.all([
          api.admin.getInquiries(),
          api.admin.getApplications(),
        ]);
        setInquiries(inqData);
        setApplications(appData);
      } catch (error) {
        console.error("Failed to fetch admissions data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admissions & CRM</h1>
          <p className="text-muted-foreground">Manage prospective students from inquiry to enrollment.</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> New Inquiry
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Open Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-green-500 mt-1">+4 today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Applications Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">Pending Action</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18%</div>
            <p className="text-xs text-muted-foreground mt-1">Target: 20%</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inquiries" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="inquiries" className="space-y-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name or phone..." className="max-w-sm" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {inquiries.map((inq) => (
              <Card key={inq.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{inq.name}</h3>
                      <p className="text-sm text-muted-foreground">Looking for {inq.grade}</p>
                    </div>
                    <Badge variant={inq.status === 'New' ? 'default' : 'secondary'}>{inq.status}</Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <UserPlus className="h-4 w-4" /> Parent: <span className="text-foreground">{inq.parent}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" /> {inq.phone}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="h-4 w-4" /> Inquiry Date: {inq.date}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="outline" className="w-full"><Phone className="mr-2 h-3 w-3" /> Call</Button>
                    <Button size="sm" variant="outline" className="w-full"><Mail className="mr-2 h-3 w-3" /> Email</Button>
                    <Button size="sm" className="w-full">Convert to App</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 dark:bg-slate-900 border-b text-muted-foreground font-medium">
                  <tr>
                    <th className="px-6 py-3">Applicant ID</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Grade</th>
                    <th className="px-6 py-3">Entrance Score</th>
                    <th className="px-6 py-3">Docs</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50">
                      <td className="px-6 py-4 font-mono text-xs">APP-{app.id}</td>
                      <td className="px-6 py-4 font-medium">{app.name}</td>
                      <td className="px-6 py-4">{app.grade}</td>
                      <td className="px-6 py-4">{app.score}</td>
                      <td className="px-6 py-4">
                        {app.documents === 'Verified' ?
                          <span className="text-green-600 flex items-center gap-1"><Check className="h-3 w-3" /> Verified</span> :
                          <span className="text-orange-600 flex items-center gap-1"><X className="h-3 w-3" /> Pending</span>
                        }
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className={
                          app.status === 'Accepted' ? 'border-green-200 text-green-700 bg-green-50' :
                            app.status === 'Under Review' ? 'border-blue-200 text-blue-700 bg-blue-50' : ''
                        }>{app.status}</Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
