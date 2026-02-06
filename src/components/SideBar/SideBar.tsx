import styles from "./SideBar.module.css";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import NewTaskButton from "../NewTaskButton/NewTaskButton";
import SideBarButton from "../SideBarButton/SideBarButton";
import ProjectAccordion from "../ProjectAccordion/ProjectAccordion";
import Icons from "../Icons";
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

const toggleSearch = () => {
  console.log("click on toggleSearch");
};

const showInboxTasks = () => {
  console.log("click on showInboxTasks");
};

const showTodayTask: React.MouseEventHandler<HTMLButtonElement> = () => {
  console.log("click on showTodayTask");
};

const showUpComingTask: React.MouseEventHandler<HTMLButtonElement> = () => {
  console.log("click on showUpComingTask");
};

const showTagsScreen: React.MouseEventHandler<HTMLButtonElement> = () => {
  console.log("click on showTagsScreen");
};

const SIDEBARBUTTONS: SideBarItem[] = [
  { id: "search", icon: Icons.search, text: "Buscador", onClick: toggleSearch },
  {
    id: "inbox",
    icon: Icons.message,
    text: "Bandeja de entrada",
    onClick: showInboxTasks,
  },
  {
    id: "today",
    icon: Icons.today,
    text: "Hoy",
    onClick: showTodayTask,
    counterBadget: Math.floor(Math.random() * 10) + 1,
  },
  {
    id: "upcoming",
    icon: Icons.upcoming,
    text: "Próximo",
    onClick: showUpComingTask,
    counterBadget: Math.floor(Math.random() * 10) + 1,
  },
  {
    id: "labels",
    icon: Icons.label,
    text: "Etiquetas",
    onClick: showTagsScreen,
  },
];

const SideBar = ({ name }: SideBarProps) => {
  const [isVisible, setisVisible] = useState(false);

  const showNewTaskWindow = () => {
    setisVisible((currentState) => !currentState);
    console.log("isVisible ", isVisible);
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

      <ProjectAccordion />
    </div>
  );
};

export default SideBar;
