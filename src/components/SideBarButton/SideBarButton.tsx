import styles from './SideBarButton.module.css'

interface SideBarButtonProps {
    icon: React.ReactNode,
    text: string, 
    onClick: React.MouseEventHandler<HTMLButtonElement>
    counterBadget?: number
}

const SideBarButton = ({icon, text, onClick}: SideBarButtonProps) => {
  return (
    <button className={styles.SideBarButton} onClick={onClick}>    
        {icon}
        {text}
    </button>
  )
}

export default SideBarButton