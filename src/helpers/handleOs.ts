export const getOs = (): string => {
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];

  const userAgent = window.navigator?.userAgent;
  console.log(userAgent);

  if (macosPlatforms.some((platform) => userAgent.includes(platform))) {
    return OperatingSystem.mac;
  }

  if (iosPlatforms.some((platform) => userAgent.includes(platform))) {
    return OperatingSystem.ios;
  }

  if (windowsPlatforms.some((platform) => userAgent.includes(platform))) {
    return OperatingSystem.windows;
  }

  if (/Android/.test(userAgent)) {
    return OperatingSystem.android;
  }

  return OperatingSystem.linux;
};

export enum OperatingSystem {
  mac = 'mac',
  ios = 'ios',
  windows = 'windows',
  android = 'android',
  linux = 'linux',
}
