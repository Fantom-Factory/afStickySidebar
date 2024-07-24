
class ResizeObserverPeer extends sys.Obj {

	#observer;

	constructor(self) {
		super();

		this.#observer = new ResizeObserver((entries) => {
			var list = ResizeObserverPeer._makeEntryList(entries);
			var args = sys.List.make(sys.Obj.type$, [list]);
			// FIXME - does this work?
			self.callback().callOn(self, args);
		});
	}

	observe(self, fanTarget, opts) {
		let config = null;
		if (opts != null)
			config = {
				box:	opts.get("box"),
			};
		let jsTarget = ResizeObserverPeer._fromFantom(fanTarget);
		this.#observer.observe(jsTarget, config);
		return self;
	}

	unobserve(self, fanElem) {
		let jsElem = ResizeObserverPeer._fromFantom(fanElem);
		this.#observer.unobserve(jsElem);
		return self
	}

	disconnect(self) {
		this.#observer.disconnect();
		return self
	}

	static _makeEntryList(entries) {
		let list = new Array();
		for (var i=0; i<entries.length; i++)
			list.push(ResizeObserverPeer._makeEntry(entries[i]));
		return sys.List.make(ResizeEntry.type$, list);
	}

	static _makeEntry(entry) {
		let fanEntry = ResizeEntry.make();

		fanEntry.target(		dom.ElemPeer.wrap(entry.target));
		fanEntry.contentRect(	graphics.Rect.makeInt(entry.contentRect.x, entry.contentRect.y, entry.contentRect.width, entry.contentRect.height));

		return fanEntry;
	}

	// we don't have access to afxWebJs.JsInterop... sigh'
	static _fromFantom(jsElem) {
		return jsElem.peer.elem;
	}
}
