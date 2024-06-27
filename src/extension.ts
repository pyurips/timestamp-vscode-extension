import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'timestamp-inserter.insert',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.selection;
        const timestamp = Date.now().toString();
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, timestamp);
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}
