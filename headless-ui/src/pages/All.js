import FloatingUi from "./Float";
import Transition from "./Transition";
import Arrow from "./Arrow";
import Hoc from "./Hoc";
import ListboxDrawer from "./Listbox";

export default function All() {
  return (
    <>
      <Hoc />
      <hr />
      <FloatingUi />
      <hr />
      <Transition />
      <hr />
      <Arrow />
      <hr />
      <ListboxDrawer />
    </>
  );
}
