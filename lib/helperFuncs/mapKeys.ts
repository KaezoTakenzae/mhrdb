const mapKeys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];

export default mapKeys;
