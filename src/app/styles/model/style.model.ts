export class Style {
    constructor(
        public id: string,
        public backgroundURL: string,
        public textAlignment: string,
        public textProperties: TextProperties,
        public styleProperties: StyleProperties,
        public shadowStyle: ShadowStyle
    ) { }


}

export class TextProperties {
    constructor(
        public fontFamily: string,
        public textAlignment: string,
        public fontStyle: string,
        public textColor: string
    ) {

    }
}

export class ShadowStyle {
    constructor(
        public shadowColor: string,
        public strokeColor: string,
        public radius: number,
        public dx: number,
        public dy: number
    ) {

    }

}

export class StyleProperties {
    constructor(public backgroundColor: string | undefined) { }
}