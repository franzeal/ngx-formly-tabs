export function isString(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object String]';
}

export function addClassName(element: Element, className: string): void {
    if (element && isString(className) && !element.className.split(' ').some(name => name === className)) {
        element.className = element.className ? element.className + ' ' + className : className;
    }
}
