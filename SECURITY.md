# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| 1.1.x   | :x:                |
| < 1.1   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within number-to-text-vietnamese, please send an email to Nam Nguyễn via namnh240795@gmail.com. All security vulnerabilities will be promptly addressed.

## Security Best Practices

- This library is a pure function with no side effects
- No network requests or file system access
- Input validation prevents injection attacks
- No eval() or dynamic code execution

## Dependencies

We regularly audit dependencies for known vulnerabilities using `pnpm audit`. All dependencies are kept up to date to ensure security.
