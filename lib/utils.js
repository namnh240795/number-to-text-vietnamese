const toString = Object.prototype.toString;

function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]";
  }
  return toString.call(value);
}

function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}

export function isNumber(value) {
  return (
    typeof value === "number" ||
    (isObjectLike(value) && getTag(value) == "[object Number]")
  );
}

export function addSeperator(result = "", seperator = "") {
  if (!seperator || !result) {
    return result;
  }

  // Split the result into words
  const words = result.split(" ");

  // Define unit hierarchy (higher index = higher priority)
  const unitHierarchy = {
    "nghìn": 1,
    "triệu": 2,
    "tỷ": 3,
  };

  // Find positions of major units
  const unitPositions = [];
  for (let i = 0; i < words.length; i++) {
    if (Object.prototype.hasOwnProperty.call(unitHierarchy, words[i])) {
      unitPositions.push({ index: i, unit: words[i], level: unitHierarchy[words[i]] });
    }
  }

  // Identify group markers:
  // - "tỷ" is ALWAYS a group marker
  // - "triệu" is a group marker ONLY if there's no "tỷ" after it
  // - "nghìn" is a group marker ONLY if there's no "triệu" or "tỷ" after it
  const groupMarkers = [];

  for (let i = 0; i < unitPositions.length; i++) {
    const unit = unitPositions[i];

    if (unit.unit === "tỷ") {
      groupMarkers.push(unit);
    } else if (unit.unit === "triệu") {
      // Check if there's a "tỷ" after this unit
      const hasTysAfter = unitPositions.slice(i + 1).some(u => u.unit === "tỷ");
      if (!hasTysAfter) {
        groupMarkers.push(unit);
      }
    } else if (unit.unit === "nghìn") {
      // Check if there's a "triệu" or "tỷ" after this unit
      const hasHigherAfter = unitPositions.slice(i + 1).some(u => u.unit === "triệu" || u.unit === "tỷ");
      if (!hasHigherAfter) {
        groupMarkers.push(unit);
      }
    }
  }

  // Add separator after each group marker if there's content after it
  const resultWords = [];
  for (let i = 0; i < words.length; i++) {
    resultWords.push(words[i]);

    const isGroupMarker = groupMarkers.find(u => u.index === i);
    if (isGroupMarker && i < words.length - 1) {
      resultWords[resultWords.length - 1] = words[i] + seperator;
    }
  }

  return resultWords.join(" ");
}
