import SplitPane from "split-pane-react";
import { LayoutGridItemProps } from "../model";
import { useState } from "react";

export const LayoutGridItem = ({
  column,
  onChangeSize,

}: LayoutGridItemProps) => {
  const [sizes, setSizes] = useState(column.sizes);

  const handleChange = (newSizes: Array<string | number>) => {
    setSizes(newSizes);
    onChangeSize?.(newSizes);
  };

  if (!column.children || !sizes) {
// console.log (column.key);

    return (
      <div
    key={column.key}
        className="item"
        style={{ border: "1px solid", width: "100%", height: "100%" }}
      >
        {column.title}
       
      </div>
    );

  }
  
  return (
    
    <SplitPane
  
      className="item"
      split={column.split}
      sizes={sizes}
      sashRender={() => <></>}
      onChange={handleChange}
    >
      {column.children.map((child, indexChild) => (
        // console.log(child,indexChild)
        
        <LayoutGridItem
          key={indexChild}
          column={child}
          index={indexChild}
          onChangeSize={onChangeSize}
        />
      ))}
    </SplitPane>
  );
};

export default LayoutGridItem;
