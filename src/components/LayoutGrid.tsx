import { useRef} from "react";
import { LayoutGridProps } from "../model";
import LayoutGridItem from "./LayoutGridItem";
import 'split-pane-react/esm/themes/default.css';

export const LayoutGrid = ({
  layout,
  height,
  width,
}: LayoutGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  
  
  const handleChangeSize = () => {
  const items = containerRef.current?.querySelectorAll('.item');
  const mainKey = layout.key
for (const key in {...items}) {
  console.log(`${mainKey} {${items[key].clientHeight} , ${items[key].clientWidth}}`
 );

}
 


  }

  return (
    <div ref={containerRef} style={{ width, height }}>
      <LayoutGridItem column={layout} index={0} onChangeSize={handleChangeSize} />
    </div>
  );
};

export default LayoutGrid;
