using dom::Elem
using graphics::Rect

** ResizeObserver invokes a callback when the dimensions of an element changes.
** 
** 'ResizeObserver' is a wrapper around the official [Resize Observer API]`https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API`.
** See the [W3C Working Draft]`https://drafts.csswg.org/resize-observer-1/`.
** 
** 'ResizeObserver' is not supported by IE or earlier versions of Firefox. See [Can I Use]`https://caniuse.com/mdn-api_resizeobserver`. In these instances, `ResizeSensor` may be used as a ponyfill.
@Js class ResizeObserver {

	private Func? callback

	** Constructor.
	** Throws Err if ResizeObserver is not available.
	new make(|ResizeEntry[]| callback) {
		this.callback = callback
	}

	** Register to receive resize events for given node.
	** Valid options:
	**  - "box": 'content-box' (the default) or 'border-box'
	native This observe(Elem target, [Str:Obj?]? opts := null)

	** Ends the observing of a specified node.
	native This unobserve(Elem target)
	
	** Disconnect this observer from receiving resize events.
	native This disconnect()
}

** ResizeRec represents an individual element resize.
@Js class ResizeEntry {

	** It-block constructor.
	new make(|This|? f := null) { f?.call(this) }

	** Target node that was resized.
	Elem target

	** The new size of the observed node. 
	Rect contentRect 
}
