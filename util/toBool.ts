const toBool = (value: string): boolean => {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  } else {
    throw new Error(`Invalid boolean value: ${value}`);
  }
};

export default toBool;
