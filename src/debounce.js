
/**
 * Run the function the next time the browser paint the page
 * @param  {Function} fn [description]
 * @return {[type]}      [description]
 */
export (fn) => {
	let timer;

	return () => {
		// Cancel
		if (timer) window.cancelAnimationFrame(timeout);

		// Fire on next repaint
		timeout = window.requestAnimationFrame(function () {
			fn();
		});

	}
}