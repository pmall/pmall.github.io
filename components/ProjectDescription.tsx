"use client";

import { Remark } from "react-remark";

export function ProjectDescription({ children }: { children: string }) {
  return <Remark>{children}</Remark>;
}
