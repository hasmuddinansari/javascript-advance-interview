const flatObject = (obj) => {
  const flat = (current, mainKey, result = {}) => {
    Object.entries(current).forEach(([key, item]) => {
      const newKey = mainKey ? `${mainKey}.${key}` : key;
      if (typeof item === "object" && item && !Array.isArray(item)) {
        flat(item, newKey, result);
      } else {
        result[newKey] = item;
      }
    });
    return result;
  };
  return flat(obj);
};
