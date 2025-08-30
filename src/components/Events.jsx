import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { format, isSameDay, addDays, subDays } from "date-fns";

const dummyEvents = [
  {
    id: 1,
    title: "Hack the Future 2025",
    club: "GDG",
    date: new Date(),
    end: new Date(2025, 8, 10, 17, 0),
    venue: "Auditorium Hall A",
    status: "upcoming",
  },
  {
    id: 2,
    title: "AI for Everyone Workshop",
    club: "DataWorks",
    date: new Date(),
    end: new Date(2025, 8, 15, 18, 0),
    venue: "Lab 3, CS Department",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Bits & Bytes Coding Contest",
    club: "BitSquad",
    date: new Date(),
    end: new Date(2025, 8, 18, 13, 0),
    venue: "Computer Centre Lab 1",
    status: "upcoming",
  },
  {
    id: 4,
    title: "DevFest Campus Edition",
    club: "GDG",
    date: new Date(),
    end: new Date(2025, 8, 22, 18, 0),
    venue: "Main Seminar Hall",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Data Visualization Bootcamp",
    club: "DataWorks",
    date: new Date(2025, 8, 25, 15, 0),
    end: new Date(2025, 8, 25, 19, 0),
    venue: "Library Conference Room",
    status: "upcoming",
  },
  {
    id: 6,
    title: "AlgoMania – Coding Night",
    club: "BitSquad",
    date: new Date(2025, 8, 30, 19, 0),
    end: new Date(2025, 8, 30, 23, 0),
    venue: "Innovation Hub",
    status: "upcoming",
  },
];

// Badge colors for clubs
const clubColors = {
  GDG: "bg-blue-100 text-blue-800",
  DataWorks: "bg-green-100 text-green-800",
  BitSquad: "bg-purple-100 text-purple-800",
};

const Events = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("day");

  const todaysEvents = dummyEvents.filter((event) =>
    date ? isSameDay(event.date, date) : false
  );

  const handlePreviousDay = () => {
    if (date) setDate(subDays(date, 1));
  };

  const handleNextDay = () => {
    if (date) setDate(addDays(date, 1));
  };

  return (
    <div className="px-14 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Club Events</h1>
          <p className="text-muted-foreground">
            Stay updated with upcoming events from GDG, DataWorks & BitSquad
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border shadow-sm"
              captionLayout="dropdown"
            />
            <div className="flex justify-between w-full mt-4">
              <Button variant="outline" onClick={() => setView("calendar")}>
                Month View
              </Button>
              <Button variant="outline" onClick={() => setView("day")}>
                Day View
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Events */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              {date ? format(date, "EEEE, MMMM do, yyyy") : "Events"}
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handlePreviousDay}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNextDay}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            {todaysEvents.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No events scheduled for this day
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {todaysEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center w-16 text-center">
                      <span className="text-sm font-medium">
                        {format(event.date, "h:mm")}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {format(event.date, "a")}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge className={clubColors[event.club]}>
                          {event.club}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>
                            {format(event.date, "h:mm a")} -{" "}
                            {format(event.end, "h:mm a")}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Events;
