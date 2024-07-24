
class StickySidebarPeer extends sys.Obj {

	constructor(self) { super(); }

	static windowInnerSize() {
		return graphics.Size.makeInt(window.innerWidth, window.innerHeight);
	}

	static clientSize(fanElem) {
		let elem	= StickySidebarPeer._fromFantom(fanElem);
		let w		= elem.offsetWidth  || 0;
		let h		= elem.offsetHeight || 0;
		// stash clientSize on the jsElem
		if (!elem.m_clientSize || elem.m_clientSize.w() != w || elem.m_clientSize.h() != h)
			elem.m_clientSize = graphics.Size.makeInt(w, h);
		return elem.m_clientSize;
	};

	// Get current coordinates left and top of specific element.
	static offsetPoint(fanElem) {
		let jsElem	= StickySidebarPeer._fromFantom(fanElem);
		let result	= {left: 0, top: 0};

		do {
			let offsetTop	= jsElem.offsetTop;
			let offsetLeft	= jsElem.offsetLeft;

			if (!isNaN(offsetTop))
				result.top += offsetTop;

			if (!isNaN(offsetLeft))
				result.left += offsetLeft;

			jsElem = ("BODY" == jsElem.tagName) ? jsElem.parentElement : jsElem.offsetParent;
		} while(jsElem)

		return graphics.Point.makeInt(result.left, result.top);
	}

	static docScrollPoint() {
		let top	 = document.documentElement.scrollTop  || document.body.scrollTop;
		let left = document.documentElement.scrollLeft || document.body.scrollLeft;
		return graphics.Point.makeInt(left, top);
	}

	// we don't have access to afxWebJs.JsInterop... sigh'
	static _fromFantom(jsElem) {
		return jsElem.peer.elem;
	}
}
