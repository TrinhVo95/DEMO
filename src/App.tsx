import LayoutGrid from "./components/LayoutGrid";
import { LayoutGridColumn } from "./model";

const App = () => {

  const layout: LayoutGridColumn = {
    split: "horizontal",
    sizes: [300, "auto"],
    key: 'main',
    children: [
      {
        sizes: [100, 'auto'],
        title: "Panel 1",
        split: "vertical",
        key: '1',
        children: [
          {
            title: 'P11',
            key: '1.1',
          },
          {
            title: 'P12',
            key: '1.2',
          }
        ]
      },
      {
        title: "Panel 2",
        key: '2',
      }
    ],
  }; 
  // const layout: LayoutGridColumn = {
  //   split: "horizontal",
  //   sizes: ["auto", "auto", "auto"],
  //   children: [
  //     {
  //       sizes: ["auto", "auto", "auto"],
  //       title: "Panel 1",
  //       split: 'vertical',
  //       children: [
  //         {
  //           title: "Panel 1 1",
  //         },
  //         {
  //           title: "Panel 1 2",
  //         },
  //         {
  //           title: "Panel 1 3",
  //         },
  //       ]
  //     },
  //     {
  //       sizes: ["auto", "auto", "auto"],
  //       title: "Panel 2",
  //       split: 'vertical',
  //       children: [
  //         {
  //           title: "Panel 2 1",
  //         },
  //         {
  //           title: "Panel 2 2",
  //         },
  //         {
  //           title: "Panel 2 3",
  //         },
  //       ]
  //     },
  //     {
  //       sizes: ["auto", "auto", "auto"],
  //       title: "Panel 3",
  //       split: 'vertical',
  //       children: [
  //         {
  //           title: "Panel 3 1",
  //         },
  //         {
  //           title: "Panel 3 2",
  //         },
  //         {
  //           title: "Panel 3 3",
  //         },
  //       ]
  //     }
  //   ],
  // };

  return (
    <LayoutGrid
      width={500}
      height={500}
      layout={layout}
    />
  );
};

export default App;
