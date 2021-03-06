/* eslint-disable key-spacing */

export const entities  = {
  pound:    '£',
  frac23:   '⅔',
  frac13:   '⅓',
  frac12:   '½',
  frac14:   '¼',
  frac15:   '⅕',
  frac25:   '⅖',
  frac35:   '⅗',
  frac45:   '⅘',
  frac16:   '⅙',
  frac56:   '⅚',
  frac17:   '⅐',
  frac18:   '⅛',
  frac38:   '⅜',
  frac58:   '⅝',
  frac19:   '⅑',
  frac1x10: '⅒',
  '?':      '�', /* Place-holder for unknown or illegible character. */
  hand:     '☞', /* pointing hand (printer's "fist") */
  fist:     '☞', /* pointing hand (printer's "fist") */
  asterism: '⁂',
  sect:     '§',
  sharp:    '♯',
  flat:     '♭',
  natural:  '♮',
  th:       'th',
  OE:       'Œ',
  oe:       'œ',
  ae:       'æ',
  AE:       'Æ',
  aemac:    'ǣ',
  edh:      'ð',
  EDH:      'Ð',
  thorn:    'þ',
  yogh:     'ȝ',
  deg:      '°',
  min:      '′',
  middot:   '•',
  root:     '√',
  cuberoot: '∛',
  breve:    '˘',
  ounceap:  '℥',
  filig:    'ﬁ',
  fllig:    'ﬂ',
  ffllig:   'ﬄ',
  upslur:   '⏜',
  downslur: '⏝',

  // A column break. Unnecessary in the Dictionary app.
  colbreak: '',

  // Asper (see wiki/rough breathing)
  asper:  'ʽ',
  cre:    '˘',
  iques:  '¿',
  nabla:  '∇',
  bar:    '|',
  times:  '×',
  divide: '÷',
  umlaut: '¨',
  dele:   '₰',

  /* Greek alphabet */
  alpha:   'α',
  beta:    'β',
  gamma:   'γ',
  delta:   'δ',
  epsilon: 'ε',
  zeta:    'ζ',
  eta:     'η',
  theta:   'θ',
  iota:    'ι',
  kappa:   'κ',
  lambda:  'λ',
  mu:      'μ',
  nu:      'ν',
  xi:      'ξ',
  omicron: 'ο',
  pi:      'π',
  rho:     'ρ',
  sigma:   'σ',
  sigmat:  'ς',
  tau:     'τ',
  upsilon: 'υ',
  phi:     'φ',
  chi:     'χ',
  psi:     'ψ',
  omega:   'ω',
  digamma: 'ϝ',
  ALPHA:   'Α',
  BETA:    'Β',
  GAMMA:   'Γ',
  DELTA:   'Δ',
  EPSILON: 'Ε',
  ZETA:    'Ζ',
  ETA:     'Η',
  THETA:   'Θ',
  IOTA:    'Ι',
  KAPPA:   'Κ',
  LAMBDA:  'Λ',
  MU:      'Μ',
  NU:      'Ν',
  XI:      'Ξ',
  OMICRON: 'Ο',
  PI:      'Π',
  RHO:     'Ρ',
  SIGMA:   'Σ',
  TAU:     'Τ',
  UPSILON: 'Υ',
  PHI:     'Φ',
  CHI:     'Χ',
  PSI:     'Ψ',
  OMEGA:   'Ω',

  /* Primes */
  prime:  '´',
  bprime: '˝',
  Prime:  '′',
  sec:    '˝',
  mdash:  '—',

  /* Quotes */
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',

  dagger: '†',
  dag:    '†',
  Dagger: '‡',
  ddag:   '‡',
  para:   '§',
  gt:     '&gt;',
  lt:     '&lt;',
  rarr:   '→',
  larr:   '←',
  schwa:  'ə',
  pause:  '𝄐',
  Crev:   'Ↄ',

  '8star':    '∗',
  lbrace2:    '{',
  rbrace2:    '}',
  integral2l: '∫',

  Mercury:     '☿',
  Female:      '♀',
  Earth:       '♁',
  Male:        '♂',
  Jupiter:     '♃',
  Saturn:      '♄',
  Uranus:      '♅',
  Neptune:     '♆',
  Pluto:       '♇',
  Aries:       '♈',
  Taurus:      '♉',
  Gemini:      '♊',
  Cancer:      '♋',
  Leo:         '♌',
  Virgo:       '♍',
  Libra:       '♎',
  Scorpio:     '♏',
  Sagittarius: '♐',
  Capricorn:   '♑',
  Aquarius:    '♒',
  Pisces:      '♓',
  Sun:         '☉',

  astascending:  '☊',
  astdescending: '☋',

  br:   '<br/>\n',
  nbsp: '&nbsp;',
  and:  'and',
  or:   'or'
};

export const accents = {
  // Proper
  cir:   '&#x0302;',
  circ:  '&#x0302;',
  til:   '&#x0303;',
  mac:   '&#x0304;',
  breve: '&#x0306;',
  dot:   '&#x0307;',
  sdot:  '&#x0323;',
  dd:    '&#x0324;',
  sm:    '&#x0331;',
  cr:    '&#x0306;',
  um:    '&#x0308;',
  acute: '&#x0301;',
  grave: '&#x0300;',
  ring:  '&#x030A;',
  ced:   '&#x0327;',

  // Semilong (macron with vertical bar on top)
  sl: '&#x0304;&#x030d;'
};

export const doubleAccents = {
  // Double length marks
  cr:  '&#x035D;',
  mac: '&#x035E;'
};

export const greek = {
  "'A":   'Ἀ',
  "'A:":  'ᾈ',
  "'A^":  'Ἆ',
  "'A`":  'Ἄ',
  "'A~":  'Ἂ',
  "'E":   'Ἐ',
  "'E`":  'Ἔ',
  "'E~":  'Ἒ',
  "'H":   'Ἠ',
  "'H:":  'ᾘ',
  "'H^":  'Ἦ',
  "'H`":  'Ἤ',
  "'H~":  'Ἢ',
  "'I":   'Ἰ',
  "'I^":  'Ἶ',
  "'I`":  'Ἴ',
  "'I~":  'Ἲ',
  "'O":   'Ὀ',
  "'O`":  'Ὄ',
  "'O~":  'Ὂ',
  "'W":   'Ὠ',
  "'W:":  'ᾨ',
  "'W^":  'Ὦ',
  "'W`":  'Ὤ',
  "'W~":  'Ὢ',
  "'`O":  'Ὄ',
  "'a":   'ἀ',
  "'a:":  'ᾀ',
  "'a^":  'ἆ',
  "'a^:": 'ᾆ',
  "'a`":  'ἄ',
  "'a`:": 'ᾄ',
  "'a~":  'ἂ',
  "'a~:": 'ᾂ',
  "'e":   'ἐ',
  "'e`":  'ἔ',
  "'e~":  'ἒ',
  "'h":   'ἠ',
  "'h:":  'ᾐ',
  "'h^":  'ἦ',
  "'h^:": 'ᾖ',
  "'h`":  '῎η',
  "'h`:": 'ᾔ',
  "'h~":  'ἢ',
  "'h~:": 'ᾒ',
  "'i":   'ἰ',
  "'i^":  'ἶ',
  "'i`":  'ἴ',
  "'i~":  'ἲ',
  "'o":   'ὀ',
  "'o`":  'ὄ',
  "'o~":  'ὂ',
  "'r":   'ῤ',
  "'u":   'ὐ',
  "'u^":  'ὖ',
  "'u`":  'ὔ',
  "'u~":  'ὒ',
  "'w":   'ὠ',
  "'w:":  'ᾠ',
  "'w^":  'ὦ',
  "'w^:": 'ᾦ',
  "'w`":  'ὤ',
  "'w`:": 'ᾤ',
  "'w~":  'ὢ',
  "'w~:": 'ᾢ',
  "'y":   'ὐ',
  "'y^":  'ὖ',
  "'y`":  'ὔ',
  "'y~":  'ὒ',
  A:      'Α',
  'A:':   'ᾼ',
  'A`':   'Ά',
  'A~':   'Ἁ',
  B:      'Β',
  CH:     'Χ',
  Ch:     'Χ',
  D:      'Δ',
  E:      'Ε',
  'E`':   'Έ',
  'E~':   'Ἑ',
  F:      'Φ',
  G:      'Γ',
  H:      'Η',
  'H:':   'ῌ',
  'H`':   'Ή',
  'H~':   'Ἡ',
  I:      'Ι',
  'I`':   'Ί',
  'I~':   'Ἱ',
  K:      'Κ',
  L:      'Λ',
  M:      'Μ',
  N:      'Ν',
  O:      'Ο',
  'O`':   'Ό',
  'O~':   'Ὁ',
  P:      'Π',
  PS:     'Ψ',
  Ps:     'Ψ',
  Q:      'Θ',
  R:      'Ρ',
  S:      'Σ',
  T:      'Τ',
  U:      'Υ',
  'U`':   'Ύ',
  'U~':   'Ὑ',
  W:      'Ω',
  'W:':   'ῼ',
  'W`':   'Ώ',
  'W~':   'Ὡ',
  X:      'Ξ',
  Y:      'Υ',
  'Y`':   'Ύ',
  'Y~':   'Ὑ',
  Z:      'Ζ',
  '"A':   'Ὰ',
  '"A:':  'ᾉ',
  '"A^':  'Ἇ',
  '"A^:': 'ᾏ',
  '"A`':  'Ἅ',
  '"A`:': 'ᾍ',
  '"A~':  'Ἃ',
  '"A~:': 'ᾋ',
  '"E':   'Ὲ',
  '"E`':  'Ἕ',
  '"E~':  'Ἓ',
  '"H':   'Ὴ',
  '"H:':  'ᾙ',
  '"H^':  'Ἧ',
  '"H^:': 'ᾟ',
  '"H`':  'Ἥ',
  '"H`:': 'ᾝ',
  '"H~':  'Ἣ',
  '"H~:': 'ᾛ',
  '"I':   'Ὶ',
  '"I^':  'Ἷ',
  '"I`':  'Ἵ',
  '"I~':  'Ἳ',
  '"O':   'Ὸ',
  '"O`':  'Ὅ',
  '"O~':  'Ὃ',
  '"R':   'Ῥ',
  '"U':   'Ὺ',
  '"U^':  'Ὗ',
  '"U`':  'Ὕ',
  '"U~':  'Ὓ',
  '"W':   'Ὼ',
  '"W:':  'ᾩ',
  '"W^':  'Ὧ',
  '"W^:': 'ᾯ',
  '"W`':  'Ὥ',
  '"W`:': 'ᾭ',
  '"W~':  'Ὣ',
  '"W~:': 'ᾫ',
  '"Y':   'Ὺ',
  '"Y^':  'Ὗ',
  '"Y`':  'Ὕ',
  '"Y~':  'Ὓ',
  '"a':   'ἁ',
  '"a:':  'ᾁ',
  '"a^':  'ἇ',
  '"a^:': 'ᾇ',
  '"a`':  'ἄ',
  '"a`:': 'ᾅ',
  '"a~':  'ἂ',
  '"a~:': 'ᾃ',
  '"e':   'ἑ',
  '"e`':  'ἕ',
  '"e~':  'ἓ',
  '"h':   'ἡ',
  '"h:':  'ᾑ',
  '"h^':  'ἧ',
  '"h^:': 'ᾗ',
  '"h`':  'ἤ',
  '"h`:': 'ᾕ',
  '"h~':  'ἣ',
  '"h~:': 'ᾓ',
  '"i':   'ἱ',
  '"i^':  'ἷ',
  '"i`':  'ἵ',
  '"i~':  'ἳ',
  '"o':   'ὁ',
  '"o`':  'ὅ',
  '"o~':  'ὃ',
  '"r':   'ῥ',
  '"u':   'ὑ',
  '"u^':  'ὗ',
  '"u`':  'ὕ',
  '"u~':  'ὓ',
  '"w':   'ὡ',
  '"w:':  'ᾡ',
  '"w^':  'ὣ',
  '"w^:': 'ᾧ',
  '"w`':  'ὥ',
  '"w`:': 'ᾥ',
  '"w~:': 'ᾣ',
  '"y':   'ὑ',
  '"y^':  'ὗ',
  '"y`':  'ὕ',
  '"y~':  'ὓ',
  a:      'α',
  'a:':   'ᾳ',
  'a^':   'ᾶ',
  'a^:':  'ᾷ',
  'a`':   'ά',
  'a`:':  'ᾴ',
  'a~':   'ὰ',
  'a~:':  'ᾲ',
  b:      'β',
  ch:     'χ',
  d:      'δ',
  e:      'ε',
  'e`':   'έ',
  'e~':   'ὲ',
  f:      'φ',
  g:      'γ',
  h:      'η',
  'h:':   'ῃ',
  'h^':   'ῆ',
  'h^:':  'ῇ',
  'h`':   'ή',
  'h`:':  'ῄ',
  'h~':   'ὴ',
  'h~:':  'ῂ',
  i:      'ι',
  'i:':   'ϊ',
  'i:^':  'ῗ',
  'i:`':  'ῒ',
  'i^':   'ῖ',
  'i^:':  'ῗ',
  'i`':   'ί',
  'i`:':  'ῒ',
  'i~':   'ὶ',
  k:      'κ',
  l:      'λ',
  m:      'μ',
  n:      'ν',
  o:      'ο',
  'o`':   'ό',
  'o~':   'ὸ',
  p:      'π',
  ps:     'ψ',
  q:      'θ',
  r:      'ρ',
  s:      'σ',
  t:      'τ',
  u:      'υ',
  'u:':   'ϋ',
  'u:^':  'ῧ',
  'u:`':  'ΰ',
  'u:~':  'ῢ',
  'u^':   'ῦ',
  'u^:':  'ῧ',
  'u`':   'ύ',
  'u`:':  'ΰ',
  'u~':   'ὺ',
  'u~:':  'ῢ',
  w:      'ω',
  'w:':   'ῳ',
  'w^':   'ῶ',
  'w^:':  'ῷ',
  'w`':   'ώ',
  'w`:':  'ῴ',
  'w~':   'ὼ',
  'w~:':  'ῲ',
  x:      'ξ',
  y:      'υ',
  'y:':   'ϋ',
  'y:^':  'ῧ',
  'y:`':  'ΰ',
  'y:~':  'ῢ',
  'y^':   'ῦ',
  'y^:':  'ῧ',
  'y`':   'ύ',
  'y`:':  'ΰ',
  'y~':   'ὺ',
  'y~:':  'ῢ',
  z:      'ζ'
};
