---
title: TexMacgic Privacy Policy
layout: default
permalink: /texmacgic/privacy/
published: true
---

## TexMacgic Privacy Policy

**Effective date: August 25, 2026**

**Operator: Ming Hei Wong**

TexMacgic is a local, native macOS LaTeX editor. It contains no advertising, cross-app tracking,
third-party analytics, or developer-operated crash reporting. The developer does not receive your
documents or usage data. Editing, TeX compilation, Git tools, and Apple Intelligence run on your Mac.
If you deliberately enable Power User mode and send a request, the separately installed AI provider
you select may receive the content needed for that request under your account with that provider.

### Information stored on your Mac

TexMacgic works with files and folders that you select. It may store local settings, recent-project
references and app-scoped security bookmarks, source history and recovery copies, preview caches,
templates, gallery items, project to-do entries, and agent chat history so requested features can
work. These local stores are not uploaded to a TexMacgic server. Deleting local app data does not
delete source documents that you saved elsewhere on your Mac.

### Apple Intelligence

On a compatible Mac running macOS 27 or later, TexMacgic can use Apple's on-device Foundation Models
for reviewed image-to-LaTeX transcription and focused writing tasks. Version 1.0 has no Private Cloud
Compute route. Screen capture occurs only after you choose **Capture Region** and grant macOS
permission; TexMacgic captures the selected region once. The reviewed image and generated text remain
on the Mac unless you copy or insert the result.

### Optional Power User providers

Power User mode can invoke Codex from OpenAI, Claude Code from Anthropic, or Antigravity from Google.
TexMacgic does not bundle a provider account. You install and sign into the selected command-line tool
separately. Before the first provider request, TexMacgic names the providers, explains what may be
shared, and requires your permission. You can revoke that permission in **Settings > Intelligence**;
revocation blocks new requests, stops active provider work, and disables external MCP access.

For a request you initiate, the selected provider may receive:

- your prompt, retained conversation context, and optional standing instructions;
- selected text, attached files or images, and project content needed for the task;
- compiler diagnostics, build logs, PDF or source renderings, MCP tool inputs and results, and output
  from commands you approved;
- rendered or annotated images used for AI Touch Up; and
- short excerpts from the first user and assistant messages when TexMacgic asks the provider to
  suggest a chat title.

The provider tool runs with your project as its working directory and may inspect additional project
files needed for the task. If you enable **Bypass permission**, it can run native commands and access
data allowed by macOS with fewer per-action prompts. Provider processing, retention, model-improvement
choices, and account linkage are governed by your provider settings and policy:
[OpenAI](https://openai.com/policies/privacy-policy/),
[Anthropic](https://www.anthropic.com/legal/privacy), and
[Google](https://policies.google.com/privacy). TexMacgic's developer does not operate those services
or change your provider privacy choices.

### Local MCP service and build tools

When enabled, the MCP control service listens only on `127.0.0.1` at a random port and requires random
instance and turn credentials. It is intended only for an agent running on the same Mac. Tool content
remains local until a provider requests a result, at which point that result can become part of the
provider request described above.

LaTeX compilation uses the compatible MacTeX, TeX Live, or TinyTeX distribution installed and enabled
by you. TexMacgic does not upload documents for compilation. Shell escape and custom build scripts are
user-enabled local automation; TexMacgic displays warnings and requires a trusted per-project opt-in.
Those scripts may read files or use the network according to their own commands.

### Analytics, advertising, tracking, and updates

TexMacgic contains no advertising SDK, product analytics, cross-app tracking, developer-operated
crash reporter, or GitHub update client. Mac App Store updates are delivered by Apple. Apple may
process App Store downloads, purchases, or crash information under Apple's policies and user settings;
TexMacgic does not receive personal data from Apple for analytics or advertising. TexMacgic does not
sell personal information.

### Your choices and deletion

You can use AI Off, revoke provider permission, delete chat sessions, clear Recent projects, remove
trusted-project decisions, and inspect or delete local history. Templates and user-added TikZ gallery
items can also be removed. A provider may separately retain data under its account controls and
policy; use that provider's privacy tools for those copies.

### Security, children, and changes

The Store edition uses the macOS App Sandbox, security-scoped access to folders you select, explicit
capability consent, project-containment checks, and authenticated loopback access. No storage or
transmission method is perfectly secure. TexMacgic is a general-purpose scientific writing and
productivity tool and is not directed to children. This policy may change when features or practices
change; the effective date will be updated.

### Contact

Privacy questions or deletion requests may be sent to
[mingheiwong501@gmail.com](mailto:mingheiwong501@gmail.com). For ordinary support or bug reports,
visit [TexMacgic Support]({{site.baseurl}}/texmacgic/support/). Do not include confidential documents
or personal information in a public issue.
