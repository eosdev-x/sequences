export interface ComposeKey {
  unicode: string;
  char: string;
  alternatives: string[];
  description: string;
}

export interface Category {
  name: string;
  keys: ComposeKey[];
}

export type OperatingSystem = 'linux' | 'mac' | 'windows';

export interface OSShortcut {
  linux: string[];
  mac: string[];
  windows: string[];
}