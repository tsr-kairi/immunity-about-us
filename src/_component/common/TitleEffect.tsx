interface SectionTitleProps {
  title: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  size?: string;
  className?: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  const {
    title,
    subheading = "",
    align = "left", // left | center | right
    size = "text-2xl", // tailwind size
    className = "",
  } = props;
  const alignment =
    align === "center"
      ? "text-center mx-auto"
      : align === "right"
      ? "text-right ml-auto"
      : "text-left";

  return (
    <div className={`section-title ${alignment} ${className}`}>
        {subheading && (
            <h6 className="text-sm font-semibold text-gray-500 mb-3">
                {subheading}
            </h6>
        )}
        <h2 className={`title-effect font-heading ${size}`}>
        {title.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </h2>
    </div>
  );
}