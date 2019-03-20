import { ExtensionContext } from "vscode";
import { WebviewOne } from "./one";
import { WebviewTwo } from "./two";

export class Container {
    static initialize(context: ExtensionContext) {
        context.subscriptions.push((this._one = new WebviewOne()));
        context.subscriptions.push((this._two = new WebviewTwo()));
    }

    private static _one: WebviewOne;
    static get one() {
        return this._one;
    }

    private static _two: WebviewTwo;
    static get two() {
        return this._two;
    }
}