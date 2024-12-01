export const SvgIcon = ({
  name = "",
  prefix = "icon",
  className,
  onClick,
  ...props
}) => {
  const symboldId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true" className={className} onClick={onClick}>
      <use href={symboldId} />
    </svg>
  );
};
