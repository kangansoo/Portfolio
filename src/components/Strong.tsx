interface StrongProps {
    children: string,
    fontSize: string,
}

const Strong = ({ children, fontSize }:StrongProps) => {
    const style=`text-font-hover text-${fontSize}`;
    return <span className={style}>{children}</span>;
}

export default Strong