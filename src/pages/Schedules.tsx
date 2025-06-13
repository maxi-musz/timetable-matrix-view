
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Plus, Edit3 } from 'lucide-react';
import TimetableGrid from '@/components/schedules/TimetableGrid';
import AddPeriodDialog from '@/components/schedules/AddPeriodDialog';

// Mock data - this would come from your backend
const classes = [
  { id: 'jss1', name: 'JSS1' },
  { id: 'jss2', name: 'JSS2' },
  { id: 'jss3', name: 'JSS3' },
  { id: 'ss1', name: 'SS1' },
  { id: 'ss2', name: 'SS2' },
  { id: 'ss3', name: 'SS3' },
];

const subjects = [
  { id: 'math', name: 'Mathematics', color: '#3B82F6' },
  { id: 'english', name: 'English Language', color: '#10B981' },
  { id: 'physics', name: 'Physics', color: '#8B5CF6' },
  { id: 'chemistry', name: 'Chemistry', color: '#F59E0B' },
  { id: 'biology', name: 'Biology', color: '#EF4444' },
  { id: 'history', name: 'History', color: '#6B7280' },
];

const teachers = [
  { id: 'teacher1', name: 'Mr. Johnson' },
  { id: 'teacher2', name: 'Mrs. Smith' },
  { id: 'teacher3', name: 'Dr. Williams' },
  { id: 'teacher4', name: 'Ms. Brown' },
];

// Mock timetable data
const mockTimetableData = [
  {
    id: '1',
    classId: 'jss1',
    day: 'Monday',
    timeSlot: '08:00-09:00',
    subjectId: 'math',
    teacherId: 'teacher1',
  },
  {
    id: '2',
    classId: 'jss1',
    day: 'Monday',
    timeSlot: '09:00-10:00',
    subjectId: 'english',
    teacherId: 'teacher2',
  },
  {
    id: '3',
    classId: 'jss1',
    day: 'Tuesday',
    timeSlot: '08:00-09:00',
    subjectId: 'physics',
    teacherId: 'teacher3',
  },
];

const Schedules = () => {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingPeriod, setEditingPeriod] = useState<any>(null);

  const handleAddPeriod = (periodData: any) => {
    console.log('Adding period:', periodData);
    // Here you would make an API call to save the period
    setIsAddDialogOpen(false);
  };

  const handleEditPeriod = (period: any) => {
    setEditingPeriod(period);
    setIsAddDialogOpen(true);
  };

  const selectedClassData = classes.find(c => c.id === selectedClass);
  const classSchedule = mockTimetableData.filter(item => item.classId === selectedClass);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Class Schedules</h1>
            <p className="text-muted-foreground mt-1">
              Manage and view class timetables
            </p>
          </div>
          <Button 
            onClick={() => setIsAddDialogOpen(true)}
            disabled={!selectedClass}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Period
          </Button>
        </div>

        {/* Class Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Edit3 className="w-5 h-5" />
              Select Class
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Choose a class..." />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedClassData && (
                <div className="text-sm text-muted-foreground">
                  Viewing timetable for <strong>{selectedClassData.name}</strong>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Timetable Grid */}
        {selectedClass && (
          <Card>
            <CardHeader>
              <CardTitle>Weekly Timetable - {selectedClassData?.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <TimetableGrid
                schedule={classSchedule}
                subjects={subjects}
                teachers={teachers}
                onEditPeriod={handleEditPeriod}
              />
            </CardContent>
          </Card>
        )}

        {!selectedClass && (
          <Card>
            <CardContent className="py-12 text-center">
              <div className="text-muted-foreground">
                <Edit3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Select a class to view its timetable</p>
                <p className="text-sm">Choose from the dropdown above to get started</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Add/Edit Period Dialog */}
        <AddPeriodDialog
          isOpen={isAddDialogOpen}
          onClose={() => {
            setIsAddDialogOpen(false);
            setEditingPeriod(null);
          }}
          onSubmit={handleAddPeriod}
          subjects={subjects}
          teachers={teachers}
          editingPeriod={editingPeriod}
          selectedClass={selectedClass}
        />
      </div>
    </div>
  );
};

export default Schedules;
