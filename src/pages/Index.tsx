
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, BookOpen } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            School Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your school operations with our comprehensive management platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calendar className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <CardTitle>Class Schedules</CardTitle>
              </div>
              <CardDescription>
                Manage and view class timetables with an intuitive interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/schedules">
                <Button className="w-full">
                  View Schedules
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group opacity-75">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                <CardTitle className="text-muted-foreground">Student Management</CardTitle>
              </div>
              <CardDescription>
                Manage student records, enrollment, and academic progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group opacity-75">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                <CardTitle className="text-muted-foreground">Subject Management</CardTitle>
              </div>
              <CardDescription>
                Configure subjects, curriculum, and learning objectives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group opacity-75">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                <CardTitle className="text-muted-foreground">Attendance Tracking</CardTitle>
              </div>
              <CardDescription>
                Track student and teacher attendance with detailed reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group opacity-75">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                <CardTitle className="text-muted-foreground">Teacher Portal</CardTitle>
              </div>
              <CardDescription>
                Teacher dashboard for grades, assignments, and communication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer group opacity-75">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-muted-foreground group-hover:scale-110 transition-transform" />
                <CardTitle className="text-muted-foreground">Reports & Analytics</CardTitle>
              </div>
              <CardDescription>
                Generate comprehensive reports and insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
