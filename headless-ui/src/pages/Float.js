import { Float } from "@headlessui-float/react";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import Block from "../components/Block";

export default function FloatingUi() {
  return <FloatPlacement />;
}

function FloatPlacement() {
  const [placement, setPlacement] = useState("bottom-start");
  return (
    <>
      <Block
        title="Placement"
        contentClass="relative h-[320px] flex justify-center items-center border rounded"
        data-testid="block-placement"
        form={
          <div className="absolute top-0 right-0">
            <select
              className="pl-2 pr-1 py-1 border border-gray-300 rounded"
              value={placement}
              onChange={(event) => setPlacement(event.target.value)}
              data-testid="placement-select"
            >
              <option>top-start</option>
              <option>top</option>
              <option>top-end</option>
              <option>right-start</option>
              <option>right</option>
              <option>right-end</option>
              <option>bottom-start</option>
              <option>bottom</option>
              <option>bottom-end</option>
              <option>left-start</option>
              <option>left</option>
              <option>left-end</option>
            </select>
          </div>
        }
      >
        <div className="">
          <Menu>
            <Float show placement={placement}>
              <Menu.Button className="flex justify-center items-center px-5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 text-sm rounded-md">
                More Options
              </Menu.Button>
              <Menu.Items
                static
                className="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`block w-full p-3 text-left ${
                        active ? "bg-indigo-500 text-white" : ""
                      }`}
                    >
                      Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`block w-full p-3  text-left ${
                        active ? "bg-indigo-500 text-white" : ""
                      }`}
                    >
                      Change Password
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  <button
                    type="button"
                    className="block w-full p-3 opacity-50   text-left"
                  >
                    Disabled button
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Float>
          </Menu>
        </div>
      </Block>
    </>
  );
}
