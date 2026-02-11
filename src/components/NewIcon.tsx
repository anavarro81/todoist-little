import Chevron from '../assets/icons/Chevron'

const icons = {
    Chevron: Chevron
}

type IconName = keyof typeof icons

export const NewIcon =({name, ...props}: {name: IconName} & React.SVGProps<SVGSVGElement>) => {
    const Component = icons[name]
    return <Component {...props} />
}