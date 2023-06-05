import { Menu } from "@headlessui/react";
import HighOrderFloat from "../components/Hoc-float";
import Block from "../components/Block";

export default function Hoc() {
  return (
    <Block
      title="Higher Order Component"
      contentClass="relative h-[320px] flex justify-center items-center border rounded"
      data-testid="block-hoc"
    >
      <Menu>
        <HighOrderFloat>
          <Menu.Button className="flex justify-center items-center px-5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-500 text-sm rounded-md">
            Options
          </Menu.Button>

          <Menu.Items className="w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden focus:outline-none">
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
                className="block w-full p-3 opacity-50 text-left"
              >
                Disabled button
              </button>
            </Menu.Item>
          </Menu.Items>
        </HighOrderFloat>
      </Menu>
    </Block>
  );
}
