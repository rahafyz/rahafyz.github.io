const skillss = document.getElementsByClassName('java')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(skillss)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  skillss.style.setProperty('--width', width + .1)
}, 5)
const spr = document.getElementsByClassName('sp')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(spr)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  spr.style.setProperty('--width', width + .1)
}, 5)
const cc = document.getElementsByClassName('c')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(cc)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  cc.style.setProperty('--width', width + .1)
}, 5)
const hc = document.getElementsByClassName('H')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(hc)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  hc.style.setProperty('--width', width + .1)
}, 5)
const j = document.getElementsByClassName('js')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(j)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  j.style.setProperty('--width', width + .1)
}, 5)
const l = document.getElementsByClassName('latex')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(l)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  l.style.setProperty('--width', width + .1)
}, 5)
const pr = document.getElementsByClassName('per')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(pr)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  pr.style.setProperty('--width', width + .1)
}, 5)
const eng = document.getElementsByClassName('en')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(eng)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  eng.style.setProperty('--width', width + .1)
}, 5)