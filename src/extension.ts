import * as vscode from 'vscode';
import { WebviewOne } from './one';
import { WebviewTwo } from './two';
import { Container } from './container';

export function activate(context: vscode.ExtensionContext) {
	console.log('"webvieweventtest" is now active!');

	Container.initialize(context);

	vscode.commands.registerCommand("openone", Container.one.createOrShow, Container.one);
	vscode.commands.registerCommand("opentwo", Container.two.createOrShow, Container.two);

}

// this method is called when your extension is deactivated
export function deactivate() { }
