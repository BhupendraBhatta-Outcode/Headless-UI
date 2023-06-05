import { Menu } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import Block from "../components/Block";

export default function Arrow() {
  return (
    <Block
      title="Arrow"
      contentClass="relative h-[320px] flex justify-center items-center border rounded"
      data-testid="block-arrow"
    >
      <Menu>
        <Float placement="bottom-start" offset={12} flip arrow={5}>
          <Menu.Button className="flex justify-center items-center px-5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 text-sm rounded-md">
            More Options
          </Menu.Button>
          <Menu.Items
            static
            className="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none"
          >
            <Float.Arrow className="absolute bg-white w-5 h-5 rotate-45 border border-gray-200" />
            <div className="relative bg-white rounded-md overflow-hidden">
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
            </div>
          </Menu.Items>
        </Float>
      </Menu>
    </Block>
  );
}
