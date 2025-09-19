import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Globe,
  UserPlus,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  Filter
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminDashboard = () => {
  const recentStudents = [
    { id: 1, name: "Priya Sharma", email: "priya@email.com", status: "Active", country: "USA", joined: "2024-01-15" },
    { id: 2, name: "Arjun Patel", email: "arjun@email.com", status: "Placed", country: "Canada", joined: "2024-01-12" },
    { id: 3, name: "Sneha Gupta", email: "sneha@email.com", status: "Interview", country: "UK", joined: "2024-01-10" },
    { id: 4, name: "Vikram Singh", email: "vikram@email.com", status: "Applied", country: "Germany", joined: "2024-01-08" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Placed": return "bg-success text-success-foreground";
      case "Interview": return "bg-warning text-warning-foreground";
      case "Active": return "bg-primary text-primary-foreground";
      case "Applied": return "bg-secondary text-secondary-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage students, track placements, and monitor platform performance.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jobs Posted</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">456</div>
              <p className="text-xs text-muted-foreground">+8% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Placements</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countries</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">52</div>
              <p className="text-xs text-muted-foreground">+2 new countries</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Students */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Recent Students</span>
                  </CardTitle>
                  <CardDescription>Latest student registrations and their status</CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground">{student.name}</h3>
                          <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{student.email}</p>
                        <div className="flex items-center text-xs text-muted-foreground space-x-4">
                          <span className="flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            {student.country}
                          </span>
                          <span>Joined: {student.joined}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">View Profile</Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">View All Students</Button>
              </CardContent>
            </Card>

            {/* Performance Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5" />
                  <span>Performance Overview</span>
                </CardTitle>
                <CardDescription>Platform performance metrics and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-success">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary">4.8</div>
                    <div className="text-sm text-muted-foreground">Avg Rating</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/30 rounded-lg">
                    <div className="text-2xl font-bold text-warning">21</div>
                    <div className="text-sm text-muted-foreground">Days Avg Placement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Admin Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="default">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add New Student
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Post Job Opening
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  System Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <UserPlus className="h-4 w-4 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">New student registered</p>
                      <p className="text-xs text-muted-foreground">Rahul Kumar - 5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Briefcase className="h-4 w-4 text-success mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Job placement successful</p>
                      <p className="text-xs text-muted-foreground">Priya at Google - 1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-4 w-4 text-warning mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Interview scheduled</p>
                      <p className="text-xs text-muted-foreground">Amazon - 2 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Server Status</span>
                    <Badge className="bg-success text-success-foreground">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Database</span>
                    <Badge className="bg-success text-success-foreground">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Email Service</span>
                    <Badge className="bg-success text-success-foreground">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;