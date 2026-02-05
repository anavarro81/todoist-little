import styles from "./SideBarButton.module.css";
import Badge from "../Badge/Badge";
interface SideBarButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  counterBadget?: number;
}

const SideBarButton = ({
  icon,
  text,
  onClick,
  counterBadget,
}: SideBarButtonProps) => {
  return (
    <button className={styles.SideBarButton} onClick={onClick}>
      {icon}
      {text}
      {counterBadget && <Badge tasksCounter={counterBadget} />}
    </button>
  );
};

export default SideBarButton;
