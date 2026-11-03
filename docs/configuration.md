---
title: Configuration
description: Environment variables and the command index.
---

# Configuration

kaxa is a CLI for sandbox providers. Sprites is fully implemented. Modal supports create (including --sync), list, exec, console, snapshot, and destroy. E2B supports create (including --sync and --api), list, exec, console, restart, sync, and destroy. Docker supports create (including --sync, --template, and --api), list, exec, console, restart, sync, snapshot, and destroy through the Docker Sandboxes API. Daytona supports create (including --sync, --template, and --api), list, exec, console, restart, sync, snapshot, and destroy through the Daytona API. Blaxel supports create (including --sync, --template, and --api), list, exec, console, sync, and destroy through the Blaxel API. Features that only exist for Sprites are rejected for Modal, E2B, Docker, Daytona, and Blaxel with a message that names the providers that have them. Create, destroy, and the list URL auth prompt use the Dracula theme.

Install kaxa with Homebrew, a curl download, or from source: [install](/installation).

Set up an account and token in [Sprites account and token](/providers/sprites), [Modal account and token](/providers/modal), [E2B account and API key](/providers/e2b), [Docker Sandboxes](/providers/docker), [Daytona](/providers/daytona), or [Blaxel](/providers/blaxel).

## Environment

Every command except `version` and `--help` loads configuration before it runs.

| Source | What it sets |
| --- | --- |
| `--provider` | `sprites`, `modal`, `e2b`, `docker`, `daytona`, or `blaxel` for this invocation. `list` shows every provider when it is omitted |
| `KAXA_DEFAULT_PROVIDER` | Provider when `--provider` is omitted, except for `list` |
| `KAXA_SPRITES_TOKEN` | Sprites API token |
| `KAXA_MODAL_TOKEN_ID` | Modal token ID (`ak-...`) |
| `KAXA_MODAL_TOKEN_SECRET` | Modal token secret (`as-...`) |
| `KAXA_E2B_API_KEY` | E2B API key (`e2b_...`) |
| `KAXA_E2B_TEMPLATE` | E2B template for new sandboxes. Optional; default `base` |
| `KAXA_DOCKER_ID` | Docker ID |
| `KAXA_DOCKER_PAT` | Docker personal access token, created with Allow Cloud Sandboxes access |
| `KAXA_DOCKER_TEMPLATE` | Docker image for new sandboxes. Optional; default the shell agent image |
| `KAXA_DAYTONA_API_KEY` | Daytona API key |
| `KAXA_DAYTONA_TEMPLATE` | Daytona snapshot for new sandboxes. Optional; default the Daytona default snapshot |
| `KAXA_BLAXEL_API_KEY` | Blaxel API key |
| `KAXA_BLAXEL_WORKSPACE` | Blaxel workspace name |
| `KAXA_BLAXEL_TEMPLATE` | Blaxel image for new sandboxes. Optional; default `blaxel/base-image:latest` |
| `KAXA_BLAXEL_REGION` | Blaxel region. Optional; default `us-pdx-1` |
| `KAXA_BLAXEL_MEMORY` | Blaxel memory in megabytes. Optional; default `4096` |

`--provider` wins over `KAXA_DEFAULT_PROVIDER`. Tokens are never read from a flag, from the Sprites CLI config file, from `~/.modal.toml`, or from `E2B_API_KEY`, or from `BL_API_KEY`, `BL_WORKSPACE`, and `~/.blaxel`.

## Commands

| Command | Manual |
| --- | --- |
| `kaxa version` | [version](/commands/version) |
| `kaxa create` (`new`) | [create](/commands/create) |
| `kaxa list` (`ls`) | [list](/commands/list) |
| `kaxa exec` | [exec](/commands/exec) |
| `kaxa console` (`ssh`) | [console](/commands/console) |
| `kaxa sync` | [sync](/commands/sync) |
| `kaxa destroy` (`rm`) | [destroy](/commands/destroy) |
| `kaxa restart` | [restart](/commands/restart) |
| `kaxa upgrade` | [upgrade](/commands/upgrade) |
| `kaxa snapshot` | [snapshot](/commands/snapshot) |
| `kaxa url` | [url](/commands/url) |
| `kaxa mcp` (`start`, `init`, `config`) | [mcp](/agents/mcp) |
