package fan.afStickySidebar;

import fan.sys.*;
import fan.dom.Elem;
//import fan.graphics.Size;
//import fan.graphics.Point;

public class StickySidebarPeer {
	
	private StickySidebar self;
	
	public StickySidebarPeer(StickySidebar self) {
		this.self = self;
	}

	public static StickySidebarPeer make(StickySidebar self) throws Exception {
		return new StickySidebarPeer(self);
	}
	
//	public static Size windowInnerSize() {
//		return Size.defVal();
//	}
//
//	public static Size clientSize(Elem elem) {
//		return Size.defVal();
//	}
//
//	public static Point offsetPoint(Elem elem) {
//		return Point.defVal();
//	}
//
//	public static Point docScrollPoint() {
//		return Point.defVal();
//	}
}
