import React from "react";

export default function StyleLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "contents" }}>
      <link rel="stylesheet" href={href} />
      {children}
    </div>
  );
}
