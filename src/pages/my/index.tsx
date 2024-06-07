import { useMemo, useState } from "react";
import Taro, { useDidShow } from "@tarojs/taro";
import { View } from "@tarojs/components";

import type CustomTabBar from "../../custom-tab-bar";
import { AtButton, AtDrawer } from "taro-ui";

export default function Index() {
  const page = useMemo(() => Taro.getCurrentInstance().page, []);
  const [show, setShow] = useState(false);

  useDidShow(() => {
    const tabbar = Taro.getTabBar<CustomTabBar>(page);
    tabbar?.setSelected(3);
  });

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <View className="index">
        <AtButton
          type="primary"
          circle={true}
          onClick={() => {
            setShow(true);
          }}
        >
          open
        </AtButton>
        <AtDrawer
          show={show}
          mask
          onClose={onClose}
          items={["菜单1", "菜单2"]}
        ></AtDrawer>
      </View>
    </>
  );
}
