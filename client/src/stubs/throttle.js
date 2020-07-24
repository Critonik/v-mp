export default function throttle(func, t) {
    return function (args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall === undefined // function is being called for the first time
            || (this.lastCall - previousCall) > t) { // throttle time has elapsed
            func(args);
        }
    }
}