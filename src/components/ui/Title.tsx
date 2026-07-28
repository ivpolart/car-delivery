interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
    return(
        <div className="title-block">
            <h6>{title}</h6>
            <h2>{subtitle}</h2>
        </div>
    )
}