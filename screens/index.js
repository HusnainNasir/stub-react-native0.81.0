import mods from "./*/index.js";

console.log(mods, 'mods');

export const screens = mods.map(mod => {
  return Object.assign(mod, {
    value: {
      navigator: mod.value,
      title: mod.name
    }
  })
});

export function getNavigationScreen(name) {
  const screen = screens.find(screen => screen.name == name);

  if (screen) {
    return screen.name
  }

  return name
}
