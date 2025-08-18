import React from "react";

const LeftColumnSections = ({ children }: { children: React.ReactNode }) => {
  // Convert children to array if it's a single element
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray.map((child, index) => (
        <React.Fragment key={index}>
          {child}
          {index < childrenArray.length - 1 && (
            <div className="w-full mx-auto border-1 border-accent my-6 rounded-full" />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default LeftColumnSections;
