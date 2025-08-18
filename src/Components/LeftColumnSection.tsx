const LeftColumnSection = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`flex flex-col ${className}`}>
      <h2 className={`ml-2 text-2xl font-thin mb-4`}>{title}</h2>
      {children}
    </section>
  );
};

export default LeftColumnSection;
