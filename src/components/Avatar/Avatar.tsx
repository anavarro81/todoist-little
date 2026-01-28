import avatarStyles from './Avatar.module.css'

interface AvatarProps {
  name: string
}



const Avatar = ({name}: AvatarProps) => {
  return (


    <div
      className={avatarStyles.avatar}
    >

      <span className={avatarStyles.avatarinitial}>
        {name.charAt(0).toUpperCase()}
      </span>

      
    </div>
    
    
    

  )
}

export default Avatar