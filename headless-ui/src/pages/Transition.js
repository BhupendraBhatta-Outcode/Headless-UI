import { Menu } from "@headlessui/react";
import { Float } from "@headlessui-float/react";
import Block from "../components/Block";

export default function Transition() {
  return (
    <Block
      title="Transition"
      contentClass="relative h-[320px] flex justify-center items-center border rounded"
      data-testid="block-transition"
    >
      <Menu>
        <Float
          placement="bottom-start"
          offset={4}
          enter="transition duration-200 ease-out"
          enterFrom="scale-95 opacity-0"
          enterTo="scale-100 opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="scale-100 opacity-100"
          leaveTo="scale-95 opacity-0"
          tailwindcssOriginClass
        >
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
    </Block>
  );
}
