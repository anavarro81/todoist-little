import Chevron from "../assets/icons/Chevron.tsx";
import Search from "../assets/icons/Search.tsx";
import Collapse from "../assets/icons/Collapse.tsx";
import Add from "../assets/icons/Add.tsx";
import Message from "../assets/icons/Message.tsx";
import Today from "../assets/icons/Today.tsx";
import Upcoming from "../assets/icons/Upcoming.tsx";
import Label from "../assets/icons/Label.tsx";
import Project from "../assets/icons/Project.tsx";
import Calendar from "../assets/icons/Celendar.tsx";
import Priority from "../assets/icons/Priority.tsx";
import Cancel from "../assets/icons/Cancel.tsx";
import ArrowLeft from "../assets/icons/ArrowLeft.tsx";
import ArrowRight from "../assets/icons/ArrowRight.tsx";
import Circle from "../assets/icons/Circle.tsx";
import Check from "../assets/icons/Check.tsx"
import Clock from "../assets/icons/Clock.tsx";

const icons = {
  Chevron: Chevron,
  Collapse: Collapse,
  Search: Search,
  Add: Add,
  Message: Message,
  Today: Today,
  Upcoming: Upcoming,
  Label: Label,
  Project: Project,
  Calendar: Calendar,
  Priority: Priority,
  Cancel: Cancel,
  ArrowLeft: ArrowLeft,
  ArrowRight: ArrowRight,
  Circle: Circle,
  Clock: Clock,
  Check: Check
};

type IconName = keyof typeof icons;

export const Icons = ({
  name,
  ...props
}: { name: IconName } & React.SVGProps<SVGSVGElement>) => {
  
  

  const Component = icons[name];
  return <Component {...props} />;
};
