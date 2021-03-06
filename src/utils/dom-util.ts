//https://github.com/kasperisager/doem/tree/master/lib
//https://github.com/umbrellajs/umbrella/tree/master/src/plugins
//https://github.com/kenwheeler/cash/tree/master
//https://github.com/gawkermedia/traverse-dom/blob/master/src/traverse-dom.js

export function domParents(elem: any, selector?: string): Element[] {
  let elements = [];
  let ishaveselector = selector !== undefined;

  while ((elem = elem.parentElement) !== null) {
    if (elem.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    if (!ishaveselector || elem.matches(selector)) {
      elements.push(elem);
    }
  }

  return elements;
}

export function domRemovableEvent(
  callback: (e: Event) => boolean,
  element: any = document,
  event: string = "click"
) {
  let clickFn = function (e) {
    if (callback(e)) document.removeEventListener(event, clickFn);
  };

  setTimeout(() => {
    //setTimeout konulmasının sebebi select2/open daki click çağrıldıktan sonra document click oluşuyor onu atlatmak içindir
    document.addEventListener(event, clickFn);
  });
}

export function domStylesAdd(elem: Node, styles) {
  for (let key in styles) {
    elem["style"][key] = styles[key];
  }
}

export function domStylesRemove(elem: Node, ...styleNames: string[]) {
  styleNames.forEach(name => {
    delete elem["style"][name];
  });
}

export function domListStylesAdd(elements: NodeList, styles) {
  for (let i = 0; i < elements.length; i++) {
    domStylesAdd(elements.item(i), styles);
  }
}

export function domListStylesRemove(
  elements: NodeList,
  ...styleNames: string[]
) {
  for (let i = 0; i < elements.length; i++) {
    domStylesRemove.apply(elements.item(i), styleNames);
  }
}

export function domOffset(elem: Element): { top: number; left: number } {
  let rect = elem.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

export function domMouseInElement(e: MouseEvent, element: Element) {
  let rect = element.getBoundingClientRect();
  let x = e.clientX;
  let y = e.clientY;
  return x > rect.left && x < rect.right && y < rect.bottom && y > rect.top;
}

export const domIsVisible = (elem: HTMLElement) => {
  return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
};