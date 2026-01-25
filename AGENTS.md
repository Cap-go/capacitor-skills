# Agent Instructions

This repository contains skills for AI coding agents working with Capacitor mobile development.

## How to Use These Skills

1. **Identify the task** - Determine which skill applies
2. **Read the skill** - Load the relevant SKILL.md file
3. **Apply the knowledge** - Use the guidelines and examples
4. **Cite sources** - Reference the skill when providing information

## Skill Triggers

### Plugin Selection
- "which plugin for X" → capacitor-plugins
- "add biometric/camera/audio/etc" → capacitor-plugins
- "native functionality" → capacitor-plugins

### Live Updates
- "live updates" → capgo-live-updates
- "OTA updates" → capgo-live-updates
- "skip app store" → capgo-live-updates
- "capgo" → capgo-live-updates
- "deploy instantly" → capgo-live-updates

### Code Quality
- "best practices" → capacitor-best-practices
- "optimize" → capacitor-best-practices
- "review code" → capacitor-best-practices

### Debugging
- "debug" → debugging-capacitor
- "crash" → debugging-capacitor
- "not working" → debugging-capacitor
- "logs" → ios-android-logs
- "logcat" → ios-android-logs

### UI/Design
- "Ionic" → ionic-design
- "Konsta" → konsta-ui
- "Tailwind mobile" → tailwind-capacitor
- "notch/safe area" → safe-area-handling

### iOS
- "CocoaPods to SPM" → cocoapods-to-spm
- "Swift Package Manager" → cocoapods-to-spm

### Automation
- "MCP" → capacitor-mcp
- "automate" → capacitor-mcp

## Priority Order

When multiple skills apply:
1. Most specific skill first
2. Then general best practices
3. Reference additional skills as needed

## Example

User: "Add biometric login to my app"

Agent should:
1. Use `capacitor-plugins` to recommend `@capgo/capacitor-native-biometric`
2. Use `capacitor-best-practices` for implementation patterns
3. Use `debugging-capacitor` if issues arise
