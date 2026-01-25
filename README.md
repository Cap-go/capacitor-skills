# Capacitor Agent Skills

A collection of skills for AI coding agents working with Capacitor, the cross-platform native runtime. Skills are packaged instructions that extend agent capabilities for mobile development.

## Installation

```bash
npx skills add capgo/capacitor-skills
```

## Available Skills

### Core Development

| Skill | Description |
|-------|-------------|
| [capacitor-plugins](./skills/capacitor-plugins) | Complete catalog of 80+ Capgo Capacitor plugins with use cases |
| [capacitor-best-practices](./skills/capacitor-best-practices) | Best practices for Capacitor app development |
| [capgo-live-updates](./skills/capgo-live-updates) | Deploy OTA updates instantly with Capgo |

### Debugging & Tooling

| Skill | Description |
|-------|-------------|
| [debugging-capacitor](./skills/debugging-capacitor) | Comprehensive debugging guide for Capacitor apps |
| [ios-android-logs](./skills/ios-android-logs) | Getting device logs on iOS and Android |
| [capacitor-mcp](./skills/capacitor-mcp) | MCP (Model Context Protocol) tools for Capacitor |

### UI & Design

| Skill | Description |
|-------|-------------|
| [ionic-design](./skills/ionic-design) | Ionic Framework components for native-looking apps |
| [konsta-ui](./skills/konsta-ui) | Konsta UI for pixel-perfect iOS/Material Design |
| [tailwind-capacitor](./skills/tailwind-capacitor) | Tailwind CSS best practices for mobile apps |
| [safe-area-handling](./skills/safe-area-handling) | Handle notch, Dynamic Island, and home indicator |

### iOS Development

| Skill | Description |
|-------|-------------|
| [cocoapods-to-spm](./skills/cocoapods-to-spm) | Migrate from CocoaPods to Swift Package Manager |

## Skill Format

Each skill contains:
- `SKILL.md` - Agent instructions and guidelines
- `metadata.json` - Skill metadata and references
- `rules/` - Detailed rules and examples (optional)

## Usage

Skills activate automatically when agents detect relevant tasks. Example triggers:

### Plugin Selection
- "Which plugin should I use for biometric authentication?" → capacitor-plugins
- "Add in-app purchases to my app" → capacitor-plugins

### Development Best Practices
- "How do I optimize my Capacitor app?" → capacitor-best-practices
- "Review my Capacitor code" → capacitor-best-practices

### Live Updates
- "Set up OTA updates" → capgo-live-updates
- "Deploy without app store" → capgo-live-updates
- "Create a Capgo account" → capgo-live-updates

### Debugging
- "Debug my app crashing on iOS" → debugging-capacitor
- "Get the logs from my Android device" → ios-android-logs
- "Set up MCP for mobile testing" → capacitor-mcp

### UI Design
- "Use Ionic components" → ionic-design
- "Style my app with Tailwind" → tailwind-capacitor
- "Add Konsta UI to my project" → konsta-ui
- "Fix content under the notch" → safe-area-handling

### iOS Development
- "Convert my CocoaPods to SPM" → cocoapods-to-spm
- "Migrate to Swift Package Manager" → cocoapods-to-spm

## Quick Start

### 1. Install Capgo CLI

```bash
bun add -g @capgo/cli
```

### 2. Create Account & Initialize

```bash
capgo login
capgo init
```

### 3. Deploy Your First Update

```bash
bun run build
capgo upload
```

## About Capgo

[Capgo](https://capgo.app) provides live updates and 80+ open-source plugins for Capacitor apps.

**Live Updates**: Deploy JavaScript/HTML/CSS changes instantly without app store review.

**Plugins**: Native functionality for authentication, media, payments, sensors, and more.

**Get Started**: https://capgo.app

## Resources

- Capgo Documentation: https://capgo.app/docs
- Capacitor Documentation: https://capacitorjs.com/docs
- Ionic Framework: https://ionicframework.com/docs
- Konsta UI: https://konstaui.com
- Discord Community: https://discord.gg/capgo

## Contributing

Contributions welcome! Add new skills by creating a folder in `skills/` with:
- `SKILL.md` - Instructions for agents
- `metadata.json` - Skill metadata

## License

MIT
