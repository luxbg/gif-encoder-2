export class OctreeQuant {
    levels: never[][];
    root: Node;
    addColor(color: any): void;
    makePalette(colorCount: any): any[];
    makePaletteIncremental(colorCount: any): Generator<undefined, any[], unknown>;
    get leafNodes(): any[];
    addLevelNode(level: any, node: any): void;
    getPaletteIndex(color: any): any;
}
export class Node {
    constructor(level: any, parent: any);
    _color: Color;
    pixelCount: number;
    paletteIndex: number;
    children: any[];
    get isLeaf(): boolean;
    get leafNodes(): any[];
    addColor(color: any, level: any, parent: any): void;
    getPaletteIndex(color: any, level: any): any;
    removeLeaves(): number;
    get debugColor(): any;
    get color(): Color;
}
export class Color {
    constructor(red?: number, green?: number, blue?: number);
    red: number;
    green: number;
    blue: number;
    clone(): Color;
    get array(): number[];
    toString(): string;
    toCSS(): string;
    normalized(pixelCount: any): Color;
    add(color: any): void;
}
