import React, { Component } from 'react';
import ReactNative, { requireNativeComponent, ScrollViewProps, UIManager, View } from 'react-native';

// @ts-ignore
// tslint:disable-next-line: no-submodule-imports
import ScrollResponder from 'react-native/Libraries/Components/ScrollResponder';

const NativeScrollView = requireNativeComponent('DirectedScrollView');

export type IDirectedScrollViewProps = ScrollViewProps;

function createScrollResponder(node: DirectedScrollView): ScrollResponder.Mixin {
  const scrollResponder = { ...ScrollResponder.Mixin };

  for (const key in scrollResponder) {
    if (typeof scrollResponder[key] === 'function') {
      scrollResponder[key] = scrollResponder[key].bind(node);
    }
  }

  return scrollResponder;
}

export class DirectedScrollView extends Component<IDirectedScrollViewProps> {
  public state = {
    ...ScrollResponder.Mixin.scrollResponderMixinGetInitialState(),
  };

  private scrollViewRef = React.createRef<DirectedScrollView>();
  private scrollResponder: ScrollResponder.Mixin = createScrollResponder(this);

  public constructor(props: IDirectedScrollViewProps) {
    super(props);
  }

  public getScrollResponder() {
    return this.scrollResponder;
  }

  public getScrollableNode() {
    return ReactNative.findNodeHandle(this.scrollViewRef.current);
  }

  public scrollTo({ x, y, animated }: { x?: number; y?: number; animated?: boolean }) {
    UIManager.dispatchViewManagerCommand(
      this.getScrollableNode(),
      UIManager.getViewManagerConfig('DirectedScrollView').Commands.scrollTo,
      [x || 0, y || 0, animated !== false]
    );
  }

  public zoomToStart({ animated }: { animated: boolean }) {
    UIManager.dispatchViewManagerCommand(
      this.getScrollableNode(),
      UIManager.getViewManagerConfig('DirectedScrollView').Commands.zoomToStart,
      [animated !== false]
    );
  }

  public componentDidMount() {
    this.zoomToStart({ animated: false });
  }

  public render() {
    return (
      <NativeScrollView
        {...this.props}
        ref={this.scrollViewRef}
        onScrollBeginDrag={this.scrollResponder.scrollResponderHandleScrollBeginDrag}
        onScrollEndDrag={this.scrollResponder.scrollResponderHandleScrollEndDrag}
        onScroll={this.scrollResponder.scrollResponderHandleScroll}
        onMomentumScrollBegin={this.scrollResponder.scrollResponderHandleMomentumScrollBegin}
        onMomentumScrollEnd={this.scrollResponder.scrollResponderHandleMomentumScrollEnd}
        onStartShouldSetResponder={this.scrollResponder.scrollResponderHandleStartShouldSetResponderCapture}
        onScrollShouldSetResponder={this.scrollResponder.scrollResponderHandleScrollShouldSetResponder}
        onResponderGrant={this.scrollResponder.scrollResponderHandleResponderGrant}
        onResponderTerminationRequest={this.scrollResponder.scrollResponderHandleTerminationRequest}
        onResponderTerminate={this.scrollResponder.scrollResponderHandleTerminate}
        onResponderRelease={this.scrollResponder.scrollResponderHandleResponderRelease}
        onResponderReject={this.scrollResponder.scrollResponderHandleResponderReject}
      >
        <View style={this.props.contentContainerStyle} pointerEvents={'box-none'}>
          {this.props.children}
        </View>
      </NativeScrollView>
    );
  }
}

export default DirectedScrollView;
