import { FC, ReactNode } from "react";
import { default as NextLink } from "next/link";
import cls from "classnames";

// Use for scenario like '/download' in the same domain
// is faster loading than using <a></a> tag, which reload the entire page.

interface LinkProps {
  href: string;
  children?: ReactNode;
  className?: string;
}
// eslint-disable-next-line react/prop-types
const Link: FC<LinkProps> = ({ children, href, className }) => {
  const childClassName = cls(className, "cursor-pointer");

  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={childClassName}>{children}</a>
    </NextLink>
  );
};

export default Link;
