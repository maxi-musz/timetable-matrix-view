
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Clock } from 'lucide-react';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timeSlots = [
  '08:00-09:00',
  '09:00-10:00',
  '10:00-11:00',
  '11:00-12:00',
  '12:00-13:00',
  '13:00-14:00',
  '14:00-15:00',
  '15:00-16:00',
];

interface TimetableGridProps {
  schedule: any[];
  subjects: any[];
  teachers: any[];
  onEditPeriod: (period: any) => void;
}

const TimetableGrid: React.FC<TimetableGridProps> = ({
  schedule,
  subjects,
  teachers,
  onEditPeriod,
}) => {
  const getPeriodForSlot = (day: string, timeSlot: string) => {
    return schedule.find(period => period.day === day && period.timeSlot === timeSlot);
  };

  const getSubjectById = (id: string) => {
    return subjects.find(subject => subject.id === id);
  };

  const getTeacherById = (id: string) => {
    return teachers.find(teacher => teacher.id === id);
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full">
        {/* Header with time slots */}
        <div className="grid grid-cols-9 gap-1 mb-2">
          <div className="p-3 font-semibold text-center bg-muted rounded-lg">
            <Clock className="w-4 h-4 mx-auto mb-1" />
            Time
          </div>
          {timeSlots.map((timeSlot) => (
            <div key={timeSlot} className="p-3 font-medium text-center bg-muted rounded-lg text-sm">
              {timeSlot.replace('-', ' - ')}
            </div>
          ))}
        </div>

        {/* Days and periods */}
        {days.map((day) => (
          <div key={day} className="grid grid-cols-9 gap-1 mb-2">
            <div className="p-4 font-semibold text-center bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              {day}
            </div>
            {timeSlots.map((timeSlot) => {
              const period = getPeriodForSlot(day, timeSlot);
              const subject = period ? getSubjectById(period.subjectId) : null;
              const teacher = period ? getTeacherById(period.teacherId) : null;

              return (
                <div
                  key={`${day}-${timeSlot}`}
                  className="min-h-[80px] border-2 border-dashed border-muted rounded-lg hover:border-primary/50 transition-colors relative group"
                >
                  {period && subject && teacher ? (
                    <div
                      className="h-full p-2 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
                      style={{ backgroundColor: `${subject.color}15`, borderColor: subject.color }}
                      onClick={() => onEditPeriod(period)}
                    >
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <Badge 
                            style={{ backgroundColor: subject.color, color: 'white' }}
                            className="text-xs mb-1"
                          >
                            {subject.name}
                          </Badge>
                          <p className="text-xs font-medium text-foreground">
                            {teacher.name}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-6 w-6 self-end"
                          onClick={(e) => {
                            e.stopPropagation();
                            onEditPeriod(period);
                          }}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                        onClick={() => onEditPeriod({ day, timeSlot, isNew: true })}
                      >
                        + Add Period
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimetableGrid;
