import * as React from "react";
import { Frame, addPropertyControls, ControlType, Page } from "framer";

export function PageRemover(props) {
  const { ...rest } = props;

  const [items, setItems] = React.useState(props.children);

  React.useEffect(() => {
    console.log("render");
  }, []);

  return (
    <Page {...rest} overflow={props.overflow}>
      {items.map((x, index) => {
        return (
          <Frame
            key={index}
            background={null}
            height={"100%"}
            width={"100%"}
            onClick={() => {
              let newItems = items
                .slice(0, index)
                .concat(items.slice(index + 1, items.length));
              setItems(newItems);
            }}
          >
            {x}
          </Frame>
        );
        // return x
      })}
    </Page>
  );
}

addPropertyControls(PageRemover, {
  ...Page.propertyControls,
  overflow: {
    type: ControlType.Enum,
    title: "Overflow",
    options: ["visible", "hidden"],
    optionTitles: ["Show", "Hide"]
  },
  children: {
    type: ControlType.Array,
    title: "Items",
    propertyControl: { type: ControlType.ComponentInstance }
  }
});
