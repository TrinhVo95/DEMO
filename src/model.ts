import { ReactNode } from "react";

export interface LayoutGridColumn {
  title?: string | ReactNode;
  key: string;
  children?: LayoutGridColumn[];
  split?: "horizontal" | "vertical"; //
  sizes?: Array<string | number>;
}

export interface LayoutGridItemProps {
  column: LayoutGridColumn;
  index: number;
  onChangeSize?: (sizes: Array<string | number>) => void;

}

export interface LayoutGridProps {
  layout: LayoutGridColumn;
  onChange?: (sizes: Record<string, { width: number; height: number }>) => void;
  width: number | string;
  height: number | string;
}
