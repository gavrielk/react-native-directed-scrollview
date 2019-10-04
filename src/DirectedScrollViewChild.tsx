import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
const NativeScrollViewChild = requireNativeComponent('DirectedScrollViewChild');

export class DirectedScrollViewChild extends Component {
  public render() {
    return <NativeScrollViewChild {...this.props}>{this.props.children}</NativeScrollViewChild>;
  }
}
