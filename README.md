

### Installation

  yarn add number-to-text-vietnamese

  npm install number-to-text-vietnamese

### How to use
Support integer to text only
```javascript
  import { getText } from 'number-to-text-vietnamese';
  getText(109231123456);
```

```
Result: một trăm linh chín tỷ hai trăm ba mươi mốt triệu một trăm hai mươi ba nghìn bốn trăm năm mươi sáu
```

Support integer to text only with seperator

```javascript
  import { getText } from 'number-to-text-vietnamese';
  getText(109231123456, ',');
```

```
Result: một trăm linh chín tỷ, hai trăm ba mươi mốt triệu, một trăm hai mươi ba nghìn, bốn trăm năm mươi sáu
```
