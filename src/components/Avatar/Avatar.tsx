interface AvatarProps {
  color: string
  radius: string
  name: string
}

const Avatar = ({color, radius, name}: AvatarProps) => {
  return (


    <div
      className="avatar"
      style={{
        backgroundColor: color,
        borderRadius: radius,
      }}
    >
      {name}
    </div>
    
    
    

  )
}

export default Avatar