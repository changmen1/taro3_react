import { Component } from "react";
import { View, Image, Swiper, SwiperItem } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";

import type CustomTabBar from "../../custom-tab-bar";
import { AtNoticebar } from "taro-ui";
import "./index.less";
import github from "../../assets/GitHub.jpg";
import ban1 from "../../assets/banner1.jpg";
import ban2 from "../../assets/banner2.jpg";
import ban3 from "../../assets/banner3.jpg";

export default class Index extends Component {
  state = {
    value: "",
  };
  pageCtx = Taro.getCurrentInstance().page;

  componentDidShow() {
    const tabbar = Taro.getTabBar<CustomTabBar>(this.pageCtx);
    tabbar?.setSelected(0);
  }
  onChange = (value: string) => {
    console.log("触发onChange");
    this.setState({
      value: value,
    });
  };
  onActionClick = () => {
    console.log("开始搜索");
  };
  handleChange = () => {};
  render() {
    return (
      <>
        <AtNoticebar className="bar" marquee icon="volume-plus" single={true}>
          极客精神的开源项目 Taro3 react18 Android 4.1 ios 8
          源码地址:https://github.com/changmen1
        </AtNoticebar>
        <AtSearchBar
          actionName="搜一下"
          value={this.state.value}
          onChange={this.onChange}
          onActionClick={this.onActionClick}
        />
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
          interval={2500}
          duration={500}
          style={{ height: "200px" }}
        >
          <SwiperItem>
            <Image className="banimg" src={ban1} mode="widthFix" />
          </SwiperItem>
          <SwiperItem>
            <Image className="banimg" src={ban2} mode="widthFix" />
          </SwiperItem>
          <SwiperItem>
            <Image className="banimg" src={ban3} mode="widthFix" />
          </SwiperItem>
        </Swiper>
        <View className="at-article">
          <View className="at-article__h1">请帮我在Github点一个Star</View>
          <View className="Github">https://github.com/changmen1</View>
        </View>
        <Image className="at-article__img" src={github} mode="widthFix" />
      </>
    );
  }
}
