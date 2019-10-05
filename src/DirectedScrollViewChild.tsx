import React, { Component } from 'react';
import { requireNativeComponent, ScrollViewProps } from 'react-native';
const NativeScrollViewChild = requireNativeComponent('DirectedScrollViewChild');

export interface IDirectedScrollViewChildOwnProps {
  scrollDirection?: 'vertical' | 'horizontal' | 'both' | string;
}

export type IDirectedScrollViewChildProps = IDirectedScrollViewChildOwnProps & ScrollViewProps;
export class DirectedScrollViewChild extends Component<IDirectedScrollViewChildProps> {
  public render() {
    return <NativeScrollViewChild {...this.props}>{this.props.children}</NativeScrollViewChild>;
  }
}
