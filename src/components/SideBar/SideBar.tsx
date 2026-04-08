import styles from "./SideBar.module.css";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import NewTaskButton from "../NewTaskButton/NewTaskButton";
import SideBarButton from "../SideBarButton/SideBarButton";
import ProjectAccordion from "../ProjectAccordion/ProjectAccordion";
import { Icons } from "../Icons";
import { useState } from "react";

interface SideBarProps {
  name: string;
}

interface SideBarItem {
  id: string;
  icon: React.ReactNode;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  counterBadget?: number;
}

const toggleSearch = () => {};

const showInboxTasks = () => {};

const showTodayTask: React.MouseEventHandler<HTMLButtonElement> = () => {};

const showUpComingTask: React.MouseEventHandler<HTMLButtonElement> = () => {};

const showTagsScreen: React.MouseEventHandler<HTMLButtonElement> = () => {};

const SIDEBARBUTTONS: SideBarItem[] = [
  {
    id: "search",
    icon: <Icons name="Search" />,
    text: "Buscador",
    onClick: toggleSearch,
  },
  {
    id: "inbox",
    icon: <Icons name="Message" />,
    text: "Bandeja de entrada",
    onClick: showInboxTasks,
  },
  {
    id: "today",
    icon: <Icons name="Today" />,
    text: "Hoy",
    onClick: showTodayTask,
    counterBadget: Math.floor(Math.random() * 10) + 1,
  },
  {
    id: "upcoming",
    icon: <Icons name="Upcoming" />,
    text: "Próximo",
    onClick: showUpComingTask,
    counterBadget: Math.floor(Math.random() * 10) + 1,
  },
  // {
  //   id: "labels",
  //   icon: <Icons name="Label" />,
  //   text: "Etiquetas",
  //   onClick: showTagsScreen,
  // },
];

const SideBar = ({ name }: SideBarProps) => {
  const [isVisible, setisVisible] = useState(false);

  const showNewTaskWindow = () => {
    setisVisible((currentState) => !currentState);
  };

  return (
    <div className={styles.sideBar}>
      <SideBarHeader name={name} />

      <NewTaskButton showNewTaskWindow={showNewTaskWindow} />

      {SIDEBARBUTTONS.map((button) => (
        <SideBarButton
          key={button.id}
          icon={button.icon}
          text={button.text}
          onClick={button.onClick}
          counterBadget={button.counterBadget}
        />
      ))}

      {/* <ProjectAccordion /> */}
    </div>
  );
};

export default SideBar;
