
class ResizeSensorPeer extends sys.Obj {

	#jsCallbackFn;

	constructor(self) { super(); }

	onResize(self, fanFn) {
		this.#jsCallbackFn = () => {
			fanFn(self.elem(), self);
		};
		let jsElem = ResizeSensorPeer._fromFantom(self.elem());
		new globalThis.ResizeSensor(jsElem, this.#jsCallbackFn);
		return self;
	}

	reset(self) {
		let jsElem = ResizeSensorPeer._fromFantom(self.elem());
		globalThis.ResizeSensor.reset(jsElem);
		return self;
	}

	detach(self) {
		if (this.#jsCallbackFn != null) {
			let jsElem = ResizeSensorPeer._fromFantom(self.elem());
			globalThis.ResizeSensor.detach(jsElem, this.#jsCallbackFn);
		}
		this.#jsCallbackFn = null;
		return self;
	}

	// we don't have access to afxWebJs.JsInterop... sigh'
	static _fromFantom(jsElem) {
		return jsElem.peer.elem;
	}
}
