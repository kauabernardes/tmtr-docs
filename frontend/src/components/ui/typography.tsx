import React from "react"

const TypographyH1 = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className || ''}`} {...props}>
      {children}
    </h1>
  )
}

const TypographyH2 = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
 return (
    <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className || ''}`} {...props}>
      {children}
    </h2>
  )
}

const TypographyH3 = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
 return (
     <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className || ''}`} {...props}>
      {children}
    </h3>
  )
}

const TypographyH4 = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
 return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className || ''}`} {...props}>
      {children}
    </h4>
  )
}

const TypographyP = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className || ''}`} {...props}>
      {children}
    </p>
  )
}

const TypographyBlockquote = ({ children, className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className || ''}`} {...props}>
      {children}
    </blockquote>
  )
}

export {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyP,
    TypographyBlockquote
}