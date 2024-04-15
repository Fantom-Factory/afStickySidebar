package fan.afStickySidebar;

import fan.sys.*;
import fan.dom.*;

public class ResizeObserverPeer {
	
	private ResizeObserver self;
	
	public ResizeObserverPeer(ResizeObserver self) {
		this.self = self;
	}

	public static ResizeObserverPeer make(ResizeObserver self) throws Exception {
		return new ResizeObserverPeer(self);
	}
	
	public ResizeObserver observe(Elem target, Map opts) {
		return self;
	}

	public ResizeObserver unobserve(Elem target) {
		return self;
	}

	public ResizeObserver disconnect() {
		return self;
	}
}
