
fan.afStickySidebar.ResizeSensorPeer = fan.sys.Obj.$extend(fan.sys.Obj);

fan.afStickySidebar.ResizeSensorPeer.prototype.$

fan.afStickySidebar.ResizeSensorPeer.prototype.$ctor = function(self) {
	this.callbackFn = null;
}

fan.afStickySidebar.ResizeSensorPeer.prototype.onResize = function(self, fanFn) {
	this.callbackFn = function() {
		fanFn.call(self.m_elem, self);
	};
	new ResizeSensor(self.m_elem.peer.elem, this.callbackFn);
	return self;
}

fan.afStickySidebar.ResizeSensorPeer.prototype.reset = function(self) {
	ResizeSensor.reset(self.m_elem.peer.elem);
	return self;
}

fan.afStickySidebar.ResizeSensorPeer.prototype.detach = function(self) {
	if (this.callbackFn != null)
		ResizeSensor.detach(self.m_elem.peer.elem, this.callbackFn);
	this.callbackFn = null;
	return self;
}
