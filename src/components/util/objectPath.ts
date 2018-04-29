function getKey(key: string) {
  const intKey = parseInt(key, 10);
  if (intKey.toString() === key) {
    return intKey;
  }
  return key;
}

class ObjectPath {
  static get(
    object: object,
    path: string | number | any[],
    defaultValue: any
  ): any {
    if (typeof path === 'number') {
      path = [path];
    }

    if (!path || path.length === 0) {
      return object;
    }

    if (object == null) {
      return defaultValue;
    }

    if (typeof path === 'string') {
      return ObjectPath.get(object, path.split('.'), defaultValue);
    }

    const currentPath = getKey(path[0]);
    const nextObj = object[currentPath];
    if (nextObj === void 0) {
      return defaultValue;
    }

    if (path.length === 1) {
      return nextObj;
    }

    return ObjectPath.get(object[currentPath], path.slice(1), defaultValue);
  }

  static set(
    object: object,
    path: string | number | any[],
    value: any,
    doNotReplace: boolean
  ): any {
    if (typeof path === 'number') {
      path = [path];
    }
    if (!path || path.length === 0) {
      return object;
    }
    if (typeof path === 'string') {
      return ObjectPath.set(
        object,
        path.split('.').map(getKey),
        value,
        doNotReplace
      );
    }
    const currentPath = path[0];
    const currentValue = object[currentPath];
    if (path.length === 1) {
      if (currentValue === void 0 || !doNotReplace) {
        object[currentPath] = value;
      }
      return currentValue;
    }

    if (currentValue === void 0) {
      if (typeof path[1] === 'number') {
        object[currentPath] = [];
      } else {
        object[currentPath] = {};
      }
    }

    return ObjectPath.set(
      object[currentPath],
      path.slice(1),
      value,
      doNotReplace
    );
  }
}
