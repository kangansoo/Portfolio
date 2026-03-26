interface StrongProps {
  children: string
  fontSize: string
  onClick?: () => void
}

const Strong = ({ children, fontSize, onClick }: StrongProps) => {
  const style = `text-font-hover text-${fontSize} font-medium cursor-pointer underline`
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Strong
