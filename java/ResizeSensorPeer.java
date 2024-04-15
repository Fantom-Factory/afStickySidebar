package fan.afStickySidebar;

import fan.sys.*;
import fan.dom.*;

public class ResizeSensorPeer {
	
	private ResizeSensor self;
	
	public ResizeSensorPeer(ResizeSensor self) {
		this.self = self;
	}

	public static ResizeSensorPeer make(ResizeSensor self) throws Exception {
		return new ResizeSensorPeer(self);
	}
	
	public ResizeSensor onResize(Func callback) {
		return self;
	}

	public ResizeSensor reset() {
		return self;
	}

	public ResizeSensor detatch() {
		return self;
	}
}
