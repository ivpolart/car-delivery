interface TitleProps {
  title: string;
  subtitle: string;
}

export default function Title({ title, subtitle }: TitleProps) {
    return(
        <div className="title-block text-center mb-10">
            <h6 className="font-semibold text-orange-500 mb-5">{title}</h6>
            <h2 className="">{subtitle}</h2>
        </div>
    )
}