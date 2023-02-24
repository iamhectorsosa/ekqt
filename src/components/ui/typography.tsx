import { ComponentPropsWithoutRef, forwardRef } from "react";

const ProseH1 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h1">>(
  (props, ref) => {
    const { children, id, ...otherProps } = props;
    return (
      <h1
        id={id}
        className="mt-8 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl"
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <a
            className="after:ml-2 after:text-slate-500 hover:after:content-['#']"
            href={`#${id}`}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </h1>
    );
  }
);

ProseH1.displayName = "ProseH1";

const ProseH2 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h2">>(
  (props, ref) => {
    const { children, id, ...otherProps } = props;
    return (
      <h2
        id={id}
        className="mt-8 scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl"
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <a
            className="after:ml-2 after:text-slate-500 hover:after:content-['#']"
            href={`#${id}`}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </h2>
    );
  }
);

ProseH2.displayName = "ProseH2";

const ProseH3 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h3">>(
  (props, ref) => {
    const { children, id, ...otherProps } = props;
    return (
      <h3
        id={id}
        className="mt-8 scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl"
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <a
            className="after:ml-2 after:text-slate-500 hover:after:content-['#']"
            href={`#${id}`}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </h3>
    );
  }
);

ProseH3.displayName = "ProseH3";

const ProseH4 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h4">>(
  (props, ref) => {
    const { children, id, ...otherProps } = props;
    return (
      <h4
        id={id}
        className="mt-8 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl"
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <a
            className="after:ml-2 after:text-slate-500 hover:after:content-['#']"
            href={`#${id}`}
          >
            {children}
          </a>
        ) : (
          children
        )}
      </h4>
    );
  }
);

ProseH4.displayName = "ProseH4";

const ProseLead = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<"p">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <p
      className="mt-2 text-xl font-medium opacity-80"
      ref={ref}
      {...otherProps}
    >
      {children}
    </p>
  );
});

ProseLead.displayName = "ProseLead";

const ProseP = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<"p">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <p
        className="text-lg font-light leading-loose [&:not(:first-of-type)]:mt-4"
        ref={ref}
        {...otherProps}
      >
        {children}
      </p>
    );
  }
);

ProseP.displayName = "ProseP";

const ProseStrong = forwardRef<HTMLElement, ComponentPropsWithoutRef<"strong">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <strong className="font-semibold" ref={ref} {...otherProps}>
        {children}
      </strong>
    );
  }
);

ProseStrong.displayName = "ProseStrong";

const ProseAnchor = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <a
      className="font-semibold text-slate-900 underline underline-offset-8 transition-colors hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300"
      ref={ref}
      {...otherProps}
    >
      {children}
    </a>
  );
});

ProseAnchor.displayName = "ProseAnchor";

const ProseBlockquote = forwardRef<
  HTMLQuoteElement,
  ComponentPropsWithoutRef<"blockquote">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div className="relative my-4 p-8 before:absolute before:top-2 before:left-4 before:font-serif before:text-9xl before:opacity-10 before:content-[open-quote] after:sr-only after:content-[close-quote]">
      <blockquote
        className="text-xl font-medium leading-loose md:text-2xl md:leading-10"
        ref={ref}
        {...otherProps}
      >
        {children}
      </blockquote>
    </div>
  );
});

ProseBlockquote.displayName = "ProseBlockquote";

const ProseUL = forwardRef<HTMLUListElement, ComponentPropsWithoutRef<"ul">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <ul
        className="my-6 ml-4 list-inside list-disc text-lg font-light leading-loose marker:text-slate-500 [&>li]:mt-3 [&>li>p]:inline"
        ref={ref}
        {...otherProps}
      >
        {children}
      </ul>
    );
  }
);

ProseUL.displayName = "ProseUL";

const ProseInlineCode = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"code">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <code
      className="whitespace-nowrap rounded bg-slate-200 py-[0.2rem] px-[0.3rem] font-mono text-base font-medium dark:bg-slate-800 dark:text-slate-400"
      ref={ref}
      {...otherProps}
    >
      {children}
    </code>
  );
});

ProseInlineCode.displayName = "ProseInlineCode";

export {
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseLead,
  ProseP,
  ProseStrong,
  ProseAnchor,
  ProseBlockquote,
  ProseUL,
  ProseInlineCode,
};
