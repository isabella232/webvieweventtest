import { WebviewPanel, window, ViewColumn, Disposable, WebviewPanelOnDidChangeViewStateEvent } from "vscode";

export class WebviewOne {
    private _disposablePanel: Disposable | undefined;
    private _panel: WebviewPanel | undefined;

    constructor() {

    }

    createOrShow() {
        if (this._panel === undefined) {
            this._panel = window.createWebviewPanel(
                'simple',
                'one',
                ViewColumn.Active,
                { retainContextWhenHidden: true, enableScripts: true }
            );

            this._disposablePanel = Disposable.from(
                this._panel,
                this._panel.onDidDispose(this.onPanelDisposed, this),
                this._panel.onDidChangeViewState(this.onViewStateChanged, this)
            );

            this._panel.webview.html = "<p>webview one</p>";
        }
        else {
            this._panel.webview.html = "<p>webview one</p>";
            this._panel.reveal(ViewColumn.Active);
        }
    }

    private onViewStateChanged(e: WebviewPanelOnDidChangeViewStateEvent) {
        console.log("one received state change. visible: ", e.webviewPanel.visible);
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