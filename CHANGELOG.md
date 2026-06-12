# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-06-12

### ⚠ BREAKING CHANGES

- **Error Handling**: Errors now propagate instead of being caught and logged to console
  - `getText(NaN)` now throws "Input is not a number" (was returning garbage)
  - `getText(1.5)` now throws "Input must be an integer" (was returning incorrect text)
  - `getText(Infinity)` now throws "Your number is too big" (was returning undefined)
- **Trailing Spaces**: Output no longer has trailing spaces
  - `getText(1000)` now returns "một nghìn" (was "một nghìn ")

### 🐛 Bug Fixes

- **NaN Handling**: Added `Number.isNaN()` check to prevent garbage output
- **Float Handling**: Added `Number.isInteger()` check to reject floating-point numbers
- **Error Propagation**: Removed try/catch block that swallowed errors
- **Trailing Spaces**: Updated getThousand, getMillion, getBillion to conditionally add space
- **TypeScript Declarations**: Fixed to use primitive types (number, string) instead of boxed types

### 🔒 Security Fixes

- Removed outdated dependencies with known CVEs
- Removed exposed credentials (yarn-error.log)
- Added comprehensive .gitignore patterns

### 🛠 Toolchain Updates

- **Package Manager**: Switched from yarn to pnpm
- **Bundler**: Replaced rollup with rolldown (Rust-based, faster)
- **TypeScript**: Added tsc for type checking and declaration generation
- **Test Runner**: Updated Jest from v27 to v29
- **Babel**: Updated to latest v7.26+ (removed deprecated v6 packages)
- **CI/CD**: Updated GitHub Actions to v4, added comprehensive CI workflow

### 📚 Documentation

- Updated README.md with pnpm installation instructions
- Added v2.0.0 migration guide
- Fixed SECURITY.md with correct version numbers
- Created comprehensive CHANGELOG

### 🧪 Testing

- Renamed test directory from `__test__` to `__tests__` (conventional)
- Fixed test file naming (`seperator.test.js` → `separator.test.js`)
- Added edge case tests for NaN, floats, Infinity, trailing spaces
- Total test coverage: 60+ test cases

## [1.1.7] - 2024-XX-XX

### Fixed

- Case 14 bug fix

## [1.1.6] - 2024-XX-XX

### Fixed

- Various bug fixes

## [1.0.0] - 2024-XX-XX

### Added

- Initial release
- Vietnamese number to text conversion
- Support for integers up to MAX_SAFE_INTEGER
- Separator support for major units (tỷ, triệu, nghìn)
