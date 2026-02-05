import styles from "./Badge.module.css";

interface BadgeProps {
  tasksCounter: number;
}

const Badge = ({ tasksCounter }: BadgeProps) => {
  return <div className={styles.badge}>{tasksCounter}</div>;
};

export default Badge;
