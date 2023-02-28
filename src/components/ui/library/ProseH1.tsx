import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const HeadingAnchor = (props: React.ComponentPropsWithoutRef<"a">) => {
  const { children, ...otherProps } = props;
  return (
    <a
      className="after:ml-2 after:opacity-80 hover:after:content-['#']"
      {...otherProps}
    >
      {children}
    </a>
  );
};

const ProseH1 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h1">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h1
        id={id}
        className={cn(
          "mt-8 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h1>
    );
  }
);

ProseH1.displayName = "ProseH1";

export { ProseH1 };
