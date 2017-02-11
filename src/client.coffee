#!/usr/bin/env coffee

DEFAULT = {
  n: 5
  startColor: '#000000'
  endColor: '#FFFFFF'
}

LIB = {
  gradient: require '../lib/gradient'
}

VENDOR = {
  program: require 'commander'
}

VENDOR.program.version 'α'
VENDOR.program.option '-n, --colorNumber [int]', "Nombre de couleur [#{DEFAULT.n}]", DEFAULT.n
VENDOR.program.option '-s, --startColor [hex]', "Couleur de départ [#{DEFAULT.startColor}]", DEFAULT.startColor
VENDOR.program.option '-e, --endColor [hex]', "Couleur d\'arrivé [#{DEFAULT.endColor}}]", DEFAULT.endColor
VENDOR.program.parse process.argv

colors = LIB.gradient VENDOR.program.startColor, VENDOR.program.endColor, VENDOR.program.colorNumber
console.log color for color in colors.split (',')
