---
title: Getting started
description: Install kaxa, set a provider token, and create your first sandbox.
---

# Getting started

kaxa is a command-line interface for sandbox providers. Sprites, Modal, Daytona, and Blaxel go through their official Go SDKs. E2B and Docker Sandboxes use clients in kaxa. One set of commands creates a sandbox, runs a command in it, and deletes it.

You need an account and a token for each provider you use. Building from source needs Go 1.27 or newer. Installing a release binary does not.

## Install

On macOS:

```bash
brew install --cask perylemke/tap/kaxa
```

On Linux and macOS, the install script checks the release archive and puts `kaxa` in `~/.local/bin`:

```bash
curl -fsSL https://github.com/perylemke/kaxa/releases/latest/download/install.sh | sh
```

On Windows, PowerShell installs `kaxa.exe` to `%USERPROFILE%\bin`:

```powershell
irm https://github.com/perylemke/kaxa/releases/latest/download/install.ps1 | iex
```

Checksums, signatures, test versions, Gatekeeper, and a source build are in [Installation](/installation).

## Choose a provider

Configuration comes from the environment. A flag wins over the environment. Tokens are never flags, and they do not belong in a committed file.

```bash
export KAXA_DEFAULT_PROVIDER=sprites
export KAXA_SPRITES_TOKEN=...
```

The provider value is `sprites`, `modal`, `e2b`, `docker`, `daytona`, or `blaxel`. Account setup for each one is in [Sprites](/providers/sprites), [Modal](/providers/modal), [E2B](/providers/e2b), [Docker](/providers/docker), [Daytona](/providers/daytona), and [Blaxel](/providers/blaxel). Every variable is listed in [Configuration](/configuration).

You can pass `--provider sprites` on a command instead of `KAXA_DEFAULT_PROVIDER`.

## Create a sandbox

```bash
kaxa --help
kaxa version

kaxa create                     # form for name, provider, running, sync, and API
kaxa create my-sprite
kaxa create --running my-sprite  # stay up for 1 hour and open a tmux terminal in the browser
kaxa create --sync my-sprite     # copy this git repository into the sandbox workspace
kaxa create --provider modal --sync my-box
kaxa create --provider e2b --sync my-box
kaxa create --provider docker --sync my-box
kaxa create --provider daytona --sync my-box
kaxa create --provider blaxel --sync my-box
kaxa new my-sprite               # alias of create

kaxa list                        # interactive table in a terminal; plain columns when piped
kaxa ls                          # alias of list

kaxa exec my-sprite -- ls -la    # run a command; remote exit code is propagated
kaxa console my-sprite           # interactive bash (requires a terminal)
kaxa ssh my-sprite               # alias of console

kaxa sync my-sprite              # copy this git repository into a sandbox
kaxa sync --no-install my-sprite # copy it and skip toolchain and dependency installs

kaxa restart my-sprite
kaxa upgrade my-sprite

kaxa snapshot create my-sprite --comment "before the migration"
kaxa snapshot list
kaxa snapshot restore my-sprite v7
kaxa snapshot delete my-sprite v7

kaxa url my-sprite public
kaxa url my-sprite sprite

kaxa destroy my-sprite
kaxa destroy --force my-sprite
kaxa rm my-sprite                # alias of destroy
```

`create` labels the sandbox `kaxa`. `--sync` copies the Git repository of the current directory, including `.git` and excluding ignored files, then installs toolchains and project dependencies. `--no-install` copies the repository and skips the toolchain and the dependency commands. `--api` publishes one HTTP service. The full flag list is in [create](/commands/create).

`exec` and `console` start in the workspace of a sandbox created with `--sync`. On Blaxel, `console` attaches to the terminal the sandbox starts, and 15 minutes without input ends the session. See [exec](/commands/exec) and [console](/commands/console).

`sync` adds another Git repository to a sandbox that already has one. It does not replace a directory. See [sync](/commands/sync).

`list` prints `no sandboxes created` when there are none. In a terminal, Enter opens details. See [list](/commands/list).

`restart` works on Sprites, E2B, Docker, and Daytona. `upgrade` is Sprites only. See [restart](/commands/restart) and [upgrade](/commands/upgrade).

`snapshot` saves the filesystem of a sandbox. Sprites restores in place. Modal, Docker, and Daytona create a new sandbox named by `--to`. See [snapshot](/commands/snapshot).

`url` changes who can open a Sprites URL. See [url](/commands/url).

`destroy` asks before it deletes. `--force` skips the question. `destroy` does not delete snapshots. See [destroy](/commands/destroy).

## AI agents

`kaxa mcp` and `kaxa mcp start` serve sandboxes to an AI agent over the Model Context Protocol. `kaxa mcp init` writes the client entry for Claude Desktop, Claude Code, Cursor, Gemini CLI, or Windsurf. The entry runs `kaxa mcp start` and does not include tokens. See [MCP](/agents/mcp).
