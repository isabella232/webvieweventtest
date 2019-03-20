import { WebviewPanel, window, ViewColumn, Disposable, WebviewPanelOnDidChangeViewStateEvent } from "vscode";

export class WebviewTwo {
    private _disposablePanel: Disposable | undefined;
    private _panel: WebviewPanel | undefined;

    constructor() {

    }

    createOrShow() {
        if (this._panel === undefined) {
            this._panel = window.createWebviewPanel(
                'simple',
                'two',
                ViewColumn.Active,
                { retainContextWhenHidden: true, enableScripts: true }
            );

            this._disposablePanel = Disposable.from(
                this._panel,
                this._panel.onDidDispose(this.onPanelDisposed, this),
                this._panel.onDidChangeViewState(this.onViewStateChanged, this)
            );

            this._panel.webview.html = "<p>webview two</p>";
        }
        else {
            this._panel.webview.html = "<p>webview two</p>";
            this._panel.reveal(ViewColumn.Active);
        }
    }

    private onViewStateChanged(e: WebviewPanelOnDidChangeViewStateEvent) {

        console.log("two received state change. visible: ", e.webviewPanel.visible);
    }

    private onPanelDisposed() {
        if (this._disposablePanel) { this._disposablePanel.dispose(); }
        this._panel = undefined;
    }

    public dispose() {
        if (this._disposablePanel) {
            this._disposablePanel.dispose();
        }
    }
}