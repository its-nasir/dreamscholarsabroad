import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  FileText, 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp,
  Clock,
  CheckCircle,
  Upload,
  MessageSquare
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const StudentDashboard = () => {
  const profileCompletion = 75;
  
  const applications = [
    { id: 1, company: "Google", position: "Software Engineer", location: "USA", status: "Interview", date: "2024-01-15" },
    { id: 2, company: "Microsoft", position: "Product Manager", location: "Canada", status: "Applied", date: "2024-01-12" },
    { id: 3, company: "Amazon", position: "Data Scientist", location: "UK", status: "Shortlisted", date: "2024-01-10" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Interview": return "bg-warning text-warning-foreground";
      case "Shortlisted": return "bg-success text-success-foreground";
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Rahul!</h1>
          <p className="text-muted-foreground">Track your applications and explore new opportunities worldwide.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Applications</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Next: Tomorrow 2 PM</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countries Applied</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">USA, Canada, UK, Germany...</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Completion</span>
                </CardTitle>
                <CardDescription>Complete your profile to get better job matches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span>{profileCompletion}%</span>
                    </div>
                    <Progress value={profileCompletion} className="h-2" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant="outline" className="text-xs">
                      <Upload className="h-3 w-3 mr-1" />
                      Upload Resume
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      Add Skills
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs">
                      Work Experience
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Recent Applications</span>
                </CardTitle>
                <CardDescription>Track the status of your job applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-foreground">{app.company}</h3>
                          <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{app.position}</p>
                        <div className="flex items-center text-xs text-muted-foreground space-x-4">
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {app.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {app.date}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">View Details</Button>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4" variant="outline">View All Applications</Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="default">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Browse Jobs
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Update Resume
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message Counselor
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Interview
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Interview with Google</p>
                      <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-warning mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Submit documents</p>
                      <p className="text-xs text-muted-foreground">Due in 2 days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Skills assessment</p>
                      <p className="text-xs text-muted-foreground">Due in 5 days</p>
                    </div>
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

export default StudentDashboard;