import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('enchantCopyPath.copyPath', async (uri) => {
    const config = vscode.workspace.getConfiguration('enchantCopyPath');
    const commandPrefix = config.get<string>('commandPrefix') || 'nano';

    const filePath = uri?.fsPath ?? vscode.window.activeTextEditor?.document.uri.fsPath;
    if (!filePath) {
      vscode.window.showErrorMessage('No file selected.');
      return;
    }

    const textToCopy = `${commandPrefix} "${filePath}"`;

    await vscode.env.clipboard.writeText(textToCopy);
    vscode.window.showInformationMessage(`Copied to clipboard: ${textToCopy}`);
  });

  context.subscriptions.push(disposable);
}
