"use client";

import { Remark } from "react-remark";

export function ProjectDescription({ children }: { children: string }) {
  return (
    <div className="markdown">
      <Remark>{children}</Remark>
    </div>
  );
}
