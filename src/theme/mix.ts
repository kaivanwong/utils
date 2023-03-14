/**
 * @name colorMix
 * @description Color mixing method
 * @param color1 Main color
 * @param color2 Mix color
 * @param weight Mixability
 * @return hex color
 */
export const colorMix = (
  color1: string,
  color2: string,
  weight: number,
): string => {
  weight = Math.max(Math.min(Number(weight), 1), 0)
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)
  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)
  const r = Math.round(r1 * (1 - weight) + r2 * weight)
  const g = Math.round(g1 * (1 - weight) + g2 * weight)
  const b = Math.round(b1 * (1 - weight) + b2 * weight)
  const _r = (`0${(r || 0).toString(16)}`).slice(-2)
  const _g = (`0${(g || 0).toString(16)}`).slice(-2)
  const _b = (`0${(b || 0).toString(16)}`).slice(-2)
  return `#${_r}${_g}${_b}`
}

/**
 * @name getLevelColor
 * @description Gets the level of a color
 * @param color Hex Color, such as #ea3a72
 * @param level Color Level, such as 0.1
 * @param type Mix type, dark or light
 * @returns
 */
export const mixColor = (color: string, level: number, type: string) => {
  color = color.replace('#', '')
  let red = parseInt(color.slice(0, 2), 16)
  let green = parseInt(color.slice(2, 4), 16)
  let blue = parseInt(color.slice(4, 6), 16)

  if (type === 'light') {
    if (level === 0)
      return [red, green, blue].join(',')

    red += Math.round(level * (255 - red))
    green += Math.round(level * (255 - green))
    blue += Math.round(level * (255 - blue))
  }
  else if (type === 'dark') {
    red = Math.round((1 - level) * red)
    green = Math.round((1 - level) * green)
    blue = Math.round((1 - level) * blue)
  }

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
