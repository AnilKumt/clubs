import React, { useState } from "react";
import {
  format,
  isSameDay,
  addDays,
  subDays,
  getDaysInMonth,
  getDay,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  startOfWeek,
} from "date-fns";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Local utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// --- Local UI Components (recreated for single-file use) ---

// A simple button component with different styles
const Button = ({ children, variant, size, onClick, className }) => {
  let baseClasses = "rounded-md transition-colors";

  if (variant === "outline") {
    baseClasses = cn(
      baseClasses,
      "border border-gray-300 text-gray-700 hover:bg-gray-100"
    );
  } else {
    baseClasses = cn(baseClasses, "bg-gray-900 text-white hover:bg-gray-800");
  }

  if (size === "icon") {
    baseClasses = cn(baseClasses, "p-2");
  } else {
    baseClasses = cn(baseClasses, "py-2 px-4");
  }

  return (
    <button className={cn(baseClasses, className)} onClick={onClick}>
      {children}
    </button>
  );
};

// A simple badge component
const Badge = ({ className, children }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
};

// Card components
const Card = ({ children, className }) => (
  <div className={cn("bg-white border rounded-lg shadow-sm", className)}>
    {children}
  </div>
);
const CardHeader = ({ children, className }) => (
  <div className={cn("p-6", className)}>{children}</div>
);
const CardTitle = ({ children, className }) => (
  <h2 className={cn("text-lg font-semibold text-gray-900", className)}>
    {children}
  </h2>
);
const CardContent = ({ children, className }) => (
  <div className={cn("p-6 pt-0", className)}>{children}</div>
);

// Simple Popover component
const Popover = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const trigger = React.Children.toArray(children).find(
    (child) => child.type === PopoverTrigger
  );
  const content = React.Children.toArray(children).find(
    (child) => child.type === PopoverContent
  );

  const clonedTrigger =
    trigger &&
    React.cloneElement(trigger, { onClick: () => setIsOpen(!isOpen) });

  return (
    <div className="relative">
      {clonedTrigger}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-auto min-w-[200px] rounded-md border bg-white p-4 shadow-lg animate-in fade-in-0 slide-in-from-top-2">
          {content.props.children}
        </div>
      )}
    </div>
  );
};
const PopoverTrigger = ({ children, asChild, onClick }) => {
  if (asChild && children) {
    return React.cloneElement(children, { onClick });
  }
  return <div onClick={onClick}>{children}</div>;
};
const PopoverContent = ({ children }) => <div>{children}</div>;

// Simplified Calendar Component
const CalendarComponent = ({ mode, selected, onSelect }) => {
  const [currentDate, setCurrentDate] = useState(selected || new Date());
  const startOfSelectedMonth = startOfMonth(currentDate);
  const endOfSelectedMonth = endOfMonth(currentDate);
  const startOfWeekDay = getDay(startOfSelectedMonth);
  const daysInMonth = getDaysInMonth(currentDate);

  const days = [];
  // Fill in empty days at the start of the month
  for (let i = 0; i < startOfWeekDay; i++) {
    days.push(null);
  }
  // Fill in the days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePreviousMonth = () => {
    setCurrentDate(subDays(startOfSelectedMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addDays(endOfSelectedMonth, 1));
  };

  return (
    <div className="p-3">
      <div className="flex justify-between items-center pb-4">
        <Button size="icon" variant="outline" onClick={handlePreviousMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="text-sm font-medium">
          {format(currentDate, "MMMM yyyy")}
        </div>
        <Button size="icon" variant="outline" onClick={handleNextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="text-gray-500 font-medium">
            {day}
          </div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={cn(
              "p-2 text-center rounded-full cursor-pointer hover:bg-gray-100",
              day === null && "pointer-events-none",
              selected &&
                day &&
                isSameDay(
                  new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  ),
                  selected
                ) &&
                "bg-gray-900 text-white hover:bg-gray-800"
            )}
            onClick={() =>
              day &&
              onSelect(
                new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
              )
            }
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

const eventInfo = [
  {
    id: 1,
    title: "GDG Event",
    club: "GDG",
    date: new Date(2025, 7, 31, 10, 0),
    end: new Date(2025, 7, 31, 12, 0),
    venue: "Computing Lab",
    status: "upcoming",
  },
];

const clubColors = {
  GDG: "bg-blue-100 text-blue-800",
  DataWorks: "bg-green-100 text-green-800",
  BitSquad: "bg-purple-100 text-purple-800",
};

const Events = () => {
  // Update the initial state to the date of the first event
  const [date, setDate] = useState(eventInfo[0].date);

  const todaysEvents = eventInfo.filter((event) =>
    date ? isSameDay(event.date, date) : false
  );

  const handlePreviousDay = () => {
    if (date) setDate(subDays(date, 1));
  };

  const handleNextDay = () => {
    if (date) setDate(addDays(date, 1));
  };

  return (
    <div className="p-4 sm:p-6 lg:p-14 space-y-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Club Events</h1>
          <p className="text-gray-600">
            Stay updated with upcoming events from GDG, DataWorks & BitSquad.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="rounded-xl shadow-lg border border-gray-200">
          <CardHeader className="flex flex-col sm:flex-row items-center justify-between p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <Button variant="outline" size="icon" onClick={handlePreviousDay}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <CardTitle className="text-xl font-semibold text-gray-800 min-w-[200px] text-center">
                {date ? format(date, "EEEE, MMMM do, yyyy") : "Events"}
              </CardTitle>
              <Button variant="outline" size="icon" onClick={handleNextDay}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                />
              </PopoverContent>
            </Popover>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            {todaysEvents.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  No events scheduled for this day.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {todaysEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 border rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-sm"
                  >
                    <div className="flex items-start sm:items-center w-full sm:w-1/4">
                      <span className="text-lg font-medium text-gray-900">
                        {format(event.date, "h:mm a")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {event.title}
                        </h3>
                        <Badge className={clubColors[event.club]}>
                          {event.club}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3.5 w-3.5" />
                          <span>
                            {format(event.date, "h:mm a")} -{" "}
                            {format(event.end, "h:mm a")}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3.5 w-3.5" />
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
