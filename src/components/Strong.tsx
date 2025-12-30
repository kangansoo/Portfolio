interface StrongProps {
  children: string
  fontSize: string
}

const Strong = ({ children, fontSize }: StrongProps) => {
  const style = `text-font-hover text-${fontSize} font-medium`
  return <strong className={style}>{children}</strong>
}

export default Strong
