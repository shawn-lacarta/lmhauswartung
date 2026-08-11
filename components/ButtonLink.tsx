import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "light";
};

export function ButtonLink({ href, children, icon: Icon, variant = "primary" }: ButtonLinkProps) {
  const className =
    variant === "primary" ? "button" : variant === "light" ? "button-secondary dark" : "button-secondary";

  return (
    <Link href={href} className={className}>
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={2.4} /> : null}
      <span>{children}</span>
    </Link>
  );
}
