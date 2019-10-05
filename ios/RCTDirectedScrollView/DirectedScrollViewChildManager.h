//
//  DirectedScrollViewChildManager.h
//  DirectedScrollViewChildManager
//
//

#import <Foundation/Foundation.h>
#import <React/RCTView.h>
#import <React/RCTViewManager.h>

@interface DirectedScrollViewChild : RCTView

@property (nonatomic, strong) NSString *scrollDirection;

- (BOOL)shouldScrollHorizontally;

- (BOOL)shouldScrollVertically;

@end

@interface DirectedScrollViewChildManager : RCTViewManager

@end
