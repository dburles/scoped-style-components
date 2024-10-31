import React from "react";

export default function Style({
  css,
  children,
}: {
  css: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "contents" }}>
      <style dangerouslySetInnerHTML={{ __html: `@scope { ${css} }` }} />
      {children}
    </div>
  );
}
