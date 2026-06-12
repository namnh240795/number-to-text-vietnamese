# number-to-text-vietnamese

## Project Overview

A JavaScript library that converts integers to Vietnamese text representation.

## Current Version

v1.1.7 (production)

## Active Development

### v2.0.0 Implementation Plan

<!-- SPECKIT START -->
**Plan File**: `.specify/plans/v2.0.0-implementation-plan.md`

**Status**: Planning Complete

**Key Changes**:
- Fix critical bugs (NaN, floats, trailing spaces, error handling)
- Switch from yarn to pnpm
- Replace rollup with rolldown
- Add TypeScript with tsc
- Update all dependencies to latest versions
- Add comprehensive test coverage
- Establish CI/CD pipeline

**Constitution Reference**: `.specify/memory/constitution.md`
<!-- SPECKIT END -->

## Development Guidelines

### Code Quality

- Follow the project constitution principles
- Vietnamese language accuracy is top priority
- API must remain simple and intuitive
- TypeScript support is required
- Performance matters for user-facing applications

### Testing

- All changes must include tests
- Test edge cases (NaN, floats, Infinity, error handling)
- Verify no trailing spaces in output
- Test both CJS and ESM imports

### Build

- Use rolldown for bundling (Rust-based, fast)
- Output CJS and ESM bundles
- Generate TypeScript declarations with tsc
- Verify build before committing

### Git

- Commit messages should be descriptive
- Use conventional commits (fix:, feat:, docs:, etc.)
- Reference issues when applicable

## Quick Commands

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Type check
pnpm typecheck

# Build
pnpm build

# Lint
pnpm lint
```

## Architecture

```
lib/
  index.js       - Main getText function
  utils.js       - Utility functions
  index.d.ts     - TypeScript declarations
__tests__/
  single.test.js - Unit tests
  separator.test.js - Separator tests
dist/
  index.js       - CJS bundle
  index.es.js    - ESM bundle
  index.d.ts     - TypeScript declarations
```

## Constitution

See `.specify/memory/constitution.md` for project principles and governance.

## Plans

See `.specify/plans/` for implementation plans and design documents.
