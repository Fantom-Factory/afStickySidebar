using dom::Elem

** ResizeSensor invokes a callback when an dimensions of an element changes.
** 
** See [Resize Sensor JS]`https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js` on GitHub.
** Works on all browsers including IE 10+.
@Js class ResizeSensor {

	** The observered element.
	Elem	elem	{ private set }

	** Constructor.
	new make(Elem elem) {
		this.elem	= elem
	}

	native This onResize(|Elem, ResizeSensor| callback)

	native This reset()
	
	native This detach()
}
