import { MMKV_STORAGE } from './storageConfig'

export function storageColorModeSave(isDarkMode: boolean) {
  MMKV_STORAGE.set('isDarkMode', isDarkMode)
}

export function storageColorModeGet() {
  const isDarkMode = MMKV_STORAGE.getBoolean('isDarkMode') ?? false

  return isDarkMode
}
