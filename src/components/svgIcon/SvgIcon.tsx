export const SvgIcon = ({
  name = "",
  prefix = "icon",
  className,
  ...props
}) => {
  const symboldId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true" className={className}>
      <use href={symboldId} />
    </svg>
  );
};
