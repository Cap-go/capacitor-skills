---
name: ionic-enterprise-sdk-migration
description: Guides the agent through migrating Capacitor apps from Ionic Enterprise SDK plugins to Capgo and Capacitor alternatives. Covers dependency detection, API replacement, local storage changes, and platform cleanup. Do not use for generic Capacitor version upgrades or Capgo live updates.
---

# Ionic Enterprise SDK Migration

Migrate Capacitor apps away from Ionic Enterprise SDK plugins and onto open alternatives.

## When to Use This Skill

- User is replacing `@ionic-enterprise/*` plugins
- User wants to remove Ionic Enterprise dependencies from an app
- User needs a migration path for auth, biometric unlock, or secure local storage

## Replacement Map

| Ionic Enterprise plugin | Typical use | Replacement path |
| ----------------------- | ----------- | ---------------- |
| Auth Connect | Social or OIDC login | `@capgo/capacitor-social-login` for social providers, or a Browser + App deep-link flow for custom OAuth |
| Identity Vault | Biometric gate + protected session state | `@capgo/capacitor-native-biometric` plus app-managed session storage |
| Secure Storage | Key-value storage | `@capacitor/preferences` for non-sensitive state |

If the app depends on encrypted local storage, keep that requirement explicit. There is no one-size-fits-all drop-in replacement in this skill pack.

## Agent Behavior

- Auto-detect Ionic Enterprise dependencies in `package.json` before asking questions.
- Migrate one plugin at a time when the app uses multiple Ionic Enterprise packages.
- Preserve behavior: same redirect URIs, same scopes, same session rules, and same stored keys whenever possible.

## Procedures

### Step 1: Detect Ionic Enterprise Dependencies

Read `package.json` and look for:

- `@ionic-enterprise/auth`
- `@ionic-enterprise/identity-vault`
- `@ionic-enterprise/secure-storage`

If none are present, tell the user no Ionic Enterprise plugins were detected.

If multiple are present, list them and migrate them in a clear order.

### Step 2: Replace Auth Connect

For social login, move to `@capgo/capacitor-social-login`.

For custom OIDC or enterprise identity providers, build the flow with:

- `@capacitor/browser` for the auth page
- `@capacitor/app` for redirect handling
- the app's existing backend token exchange

Keep the same scopes, redirect URLs, and callback handling.

### Step 3: Replace Identity Vault

Identity Vault usually combines biometric unlock with protected app state.

Use `@capgo/capacitor-native-biometric` for device-level unlock checks, then rebuild the session timeout and lock screen behavior in app code.

Keep secrets out of plain client storage. Store only the minimum local state required for UX continuity.

### Step 4: Replace Secure Storage

If the app uses key-value storage, move non-sensitive values to `@capacitor/preferences`.

If the app stores authenticated session data, keep the sensitive token lifecycle on the server or in a native secure store you control.

If the app uses SQLite-backed storage, preserve the database schema and migrate the access layer instead of rewriting the data model.

### Step 5: Search for Remaining Enterprise Imports

After the replacement work, search the project for remaining enterprise references:

```bash
rg -n "@ionic-enterprise" .
```

Replace or remove any leftovers before continuing.

### Step 6: Clean Up and Verify

Remove unused enterprise packages from `package.json`, reinstall dependencies, and sync the project:

```bash
bun install
bunx cap sync
```

Then verify the app builds on every shipped platform.

## Error Handling

- If there is no direct replacement for a storage or session feature, stop and define the minimum safe fallback instead of guessing.
- If OAuth behavior changes after migration, compare the before-and-after redirect and token exchange flow before shipping.
- If the app already has a secure native store, reuse it rather than introducing a second storage model.
