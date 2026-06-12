# number-to-text-vietnamese

Convert numbers to Vietnamese text representation.

## Installation

```bash
# Using pnpm (recommended)
pnpm add number-to-text-vietnamese

# Using npm
npm install number-to-text-vietnamese

# Using yarn
yarn add number-to-text-vietnamese
```

## Usage

### Basic Usage

```javascript
import { getText } from 'number-to-text-vietnamese';

getText(109231123456);
// => "một trăm linh chín tỷ hai trăm ba mươi mốt triệu một trăm hai mươi ba nghìn bốn trăm năm mươi sáu"
```

### With Separator

```javascript
import { getText } from 'number-to-text-vietnamese';

getText(109231123456, ',');
// => "một trăm linh chín tỷ, hai trăm ba mươi mốt triệu, một trăm hai mươi ba nghìn, bốn trăm năm mươi sáu"
```

### CommonJS

```javascript
const { getText } = require('number-to-text-vietnamese');

getText(123);
// => "một trăm hai mươi ba"
```

## API

### `getText(number, separator?)`

Converts an integer to its Vietnamese text representation.

**Parameters:**
- `number` (required): The integer to convert
  - Type: `number`
  - Constraints: Must be an integer, not NaN, not Infinity, within safe integer range
- `separator` (optional): Separator to insert between major units (tỷ, triệu, nghìn)
  - Type: `string`
  - Default: `''` (empty string)

**Returns:** Vietnamese text representation of the number

**Throws:**
- `Error` with message "Input is not a number" if input is NaN or not a number
- `Error` with message "Input must be an integer" if input is a floating-point number
- `Error` with message "Your number is too big" if input exceeds MAX_SAFE_INTEGER

**Examples:**

```javascript
getText(0);                    // => "không"
getText(1);                    // => "một"
getText(10);                   // => "mười"
getText(100);                  // => "một trăm"
getText(1000);                 // => "một nghìn"
getText(1000000);              // => "một triệu"
getText(1000000000);           // => "một tỷ"
getText(-123);                 // => "âm một trăm hai mươi ba"
getText(109231123456, ',');    // => "một trăm linh chín tỷ, hai trăm ba mươi mốt triệu, ..."
```

## Error Handling

```javascript
import { getText } from 'number-to-text-vietnamese';

try {
  getText(NaN);
} catch (error) {
  console.error(error.message); // "Input is not a number"
}

try {
  getText(1.5);
} catch (error) {
  console.error(error.message); // "Input must be an integer"
}

try {
  getText(Infinity);
} catch (error) {
  console.error(error.message); // "Your number is too big"
}
```

## TypeScript

This library includes TypeScript declarations. Full type safety is supported:

```typescript
import { getText } from 'number-to-text-vietnamese';

const text: string = getText(123);
const textWithSep: string = getText(123, ',');
```

## Migration from v1.x

### Breaking Changes

1. **Error Handling**: Errors now propagate instead of being caught and logged to console
   - `getText(NaN)` now throws "Input is not a number" (was returning garbage)
   - `getText(1.5)` now throws "Input must be an integer" (was returning incorrect text)
   - `getText(Infinity)` now throws "Your number is too big" (was returning undefined)

2. **Trailing Spaces**: Output no longer has trailing spaces
   - `getText(1000)` now returns "một nghìn" (was "một nghìn ")

### Migration Guide

Update your error handling to catch thrown errors:

```javascript
// v1.x (old)
const result = getText(NaN);
if (result === undefined) {
  // Handle error
}

// v2.0.0 (new)
try {
  const result = getText(NaN);
} catch (error) {
  // Handle error
}
```

## License

MIT
