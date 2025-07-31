# enchant-copy-path

A VS Code extension to copy file paths prefixed with a customizable editor command.

## Features

- Copy file paths prefixed by a user-configurable editor command (e.g., `nano`, `vim`, `less`, `code`).
- Easily change the default editor command via VS Code settings.

## Extension Settings

This extension provides the following setting:

- `enchantCopyPath.commandPrefix`:  
  Editor command to prepend when copying file paths.  
  Default: `"nano"`.

### How to change the default editor command

1. Open VS Code **Settings** (`Ctrl + ,` or `Cmd + ,`).  
2. Search for `enchantCopyPath.commandPrefix` or `Enchant Copy Path`.  
3. Select your preferred editor from the dropdown menu (e.g., `vim`, `less`, `code`).  
4. The chosen editor will be used as prefix when copying paths.

## Why did I make this?

I’m just lazy. 😄

**Enjoy!**