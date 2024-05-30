import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.less";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick() {
    console.log("点击");
  }

  render() {
    return (
      <View className="index">
        <Text className="size-20">Author:zxl</Text>
        <AtButton type="primary" circle={true} onClick={this.handleClick}>
          起飞
        </AtButton>
      </View>
    );
  }
}
