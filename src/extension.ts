import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'timestamp-inserter.insert',
    () => {}
  );

  context.subscriptions.push(disposable);
}
