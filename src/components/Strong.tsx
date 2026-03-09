interface StrongProps {
  children: string
  fontSize: string
  onClick?: () => void
}

const Strong = ({ children, fontSize, onClick }: StrongProps) => {
  const style = `text-font-hover text-${fontSize} font-medium cursor-pointer underline`
  return (
    <strong className={style} onClick={onClick}>
      {children}
    </strong>
  )
}

export default Strong
