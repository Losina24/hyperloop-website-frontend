
import { Directive, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
    selector: '[mouseWheel]'
})
export class MouseWheelDirective {
    @Output() mouseWheelUp = new EventEmitter();
    @Output() mouseWheelDown = new EventEmitter();

    // Listening to the host - that is, the DOM element the directive is attached to - is among the primary ways directives

    @HostListener('mousewheel', ['$event']) onMouseWheelChrome(event: any) {
        this.mouseWheelFunc(event)
    }

    @HostListener('DOMMouseScroll', ['$event']) onMouseWheelFirefox(event: any) {
        this.mouseWheelFunc(event);
    }

    @HostListener('onmousewheel', ['$event']) onMouseWheelIE(event: any) {
        this.mouseWheelFunc(event);
    }

    mouseWheelFunc(event: any) {
        //console.log("Mousewheel Directive called...")

        var event = window.event || event // old IE browser support

        var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)))

        if (delta > 0) {

            this.mouseWheelUp.emit(event);

        } else if (delta < 0) {
            
            this.mouseWheelDown.emit(event);

        }

        // for IE browser
        event.returnValue = false;

        // for Chrome and firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
    }
}