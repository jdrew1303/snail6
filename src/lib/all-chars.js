const chars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
  "`",
  "~",
  "Á",
  "Á",
  "á",
  "á",
  "Ă",
  "ă",
  "∾",
  "∿",
  "∾̳",
  "Â",
  "Â",
  "â",
  "â",
  "´",
  "´",
  "А",
  "а",
  "Æ",
  "Æ",
  "æ",
  "æ",
  "𝔄",
  "𝔞",
  "À",
  "À",
  "à",
  "à",
  "ℵ",
  "ℵ",
  "Α",
  "α",
  "Ā",
  "ā",
  "⨿",
  "&",
  "&",
  "&",
  "&",
  "⩓",
  "∧",
  "⩕",
  "⩜",
  "⩘",
  "⩚",
  "∠",
  "⦤",
  "∠",
  "∡",
  "⦨",
  "⦩",
  "⦪",
  "⦫",
  "⦬",
  "⦭",
  "⦮",
  "⦯",
  "∟",
  "⊾",
  "⦝",
  "∢",
  "Å",
  "⍼",
  "Ą",
  "ą",
  "𝔸",
  "𝕒",
  "≈",
  "⩯",
  "⩰",
  "≊",
  "≋",
  "'",
  "≈",
  "≊",
  "Å",
  "Å",
  "å",
  "å",
  "𝒜",
  "𝒶",
  "≔",
  "*",
  "≈",
  "≍",
  "Ã",
  "Ã",
  "ã",
  "ã",
  "Ä",
  "Ä",
  "ä",
  "ä",
  "∳",
  "⨑",
  "≌",
  "϶",
  "‵",
  "∽",
  "⋍",
  "∖",
  "⫧",
  "⊽",
  "⌆",
  "⌅",
  "⌅",
  "⎵",
  "⎶",
  "≌",
  "Б",
  "б",
  "„",
  "∵",
  "∵",
  "∵",
  "⦰",
  "϶",
  "ℬ",
  "ℬ",
  "Β",
  "β",
  "ℶ",
  "≬",
  "𝔅",
  "𝔟",
  "⋂",
  "◯",
  "⋃",
  "⨀",
  "⨁",
  "⨂",
  "⨆",
  "★",
  "▽",
  "△",
  "⨄",
  "⋁",
  "⋀",
  "⤍",
  "⧫",
  "▪",
  "▴",
  "▾",
  "◂",
  "▸",
  "␣",
  "▒",
  "░",
  "▓",
  "█",
  "=⃥",
  "≡⃥",
  "⫭",
  "⌐",
  "𝔹",
  "𝕓",
  "⊥",
  "⊥",
  "⋈",
  "⧉",
  "╗",
  "╖",
  "╕",
  "┐",
  "╔",
  "╓",
  "╒",
  "┌",
  "═",
  "─",
  "╦",
  "╤",
  "╥",
  "┬",
  "╩",
  "╧",
  "╨",
  "┴",
  "⊟",
  "⊞",
  "⊠",
  "╝",
  "╜",
  "╛",
  "┘",
  "╚",
  "╙",
  "╘",
  "└",
  "║",
  "│",
  "╬",
  "╫",
  "╪",
  "┼",
  "╣",
  "╢",
  "╡",
  "┤",
  "╠",
  "╟",
  "╞",
  "├",
  "‵",
  "˘",
  "˘",
  "¦",
  "¦",
  "ℬ",
  "𝒷",
  "⁏",
  "∽",
  "⋍",
  "\\",
  "⧅",
  "⟈",
  "•",
  "•",
  "≎",
  "⪮",
  "≏",
  "≎",
  "≏",
  "Ć",
  "ć",
  "⋒",
  "∩",
  "⩄",
  "⩉",
  "⩋",
  "⩇",
  "⩀",
  "ⅅ",
  "∩︀",
  "⁁",
  "ˇ",
  "ℭ",
  "⩍",
  "Č",
  "č",
  "Ç",
  "Ç",
  "ç",
  "ç",
  "Ĉ",
  "ĉ",
  "∰",
  "⩌",
  "⩐",
  "Ċ",
  "ċ",
  "¸",
  "¸",
  "¸",
  "⦲",
  "¢",
  "¢",
  "·",
  "·",
  "ℭ",
  "𝔠",
  "Ч",
  "ч",
  "✓",
  "✓",
  "Χ",
  "χ",
  "○",
  "ˆ",
  "≗",
  "↺",
  "↻",
  "⊛",
  "⊚",
  "⊝",
  "⊙",
  "®",
  "Ⓢ",
  "⊖",
  "⊕",
  "⊗",
  "⧃",
  "≗",
  "⨐",
  "⫯",
  "⧂",
  "∲",
  "”",
  "’",
  "♣",
  "♣",
  "∷",
  ":",
  "⩴",
  "≔",
  "≔",
  ",",
  "@",
  "∁",
  "∘",
  "∁",
  "ℂ",
  "≅",
  "⩭",
  "≡",
  "∯",
  "∮",
  "∮",
  "ℂ",
  "𝕔",
  "∐",
  "∐",
  "©",
  "©",
  "©",
  "©",
  "℗",
  "∳",
  "↵",
  "⨯",
  "✗",
  "𝒞",
  "𝒸",
  "⫏",
  "⫑",
  "⫐",
  "⫒",
  "⋯",
  "⤸",
  "⤵",
  "⋞",
  "⋟",
  "↶",
  "⤽",
  "⋓",
  "∪",
  "⩈",
  "≍",
  "⩆",
  "⩊",
  "⊍",
  "⩅",
  "∪︀",
  "↷",
  "⤼",
  "⋞",
  "⋟",
  "⋎",
  "⋏",
  "¤",
  "¤",
  "↶",
  "↷",
  "⋎",
  "⋏",
  "∲",
  "∱",
  "⌭",
  "‡",
  "†",
  "ℸ",
  "↡",
  "⇓",
  "↓",
  "‐",
  "⫤",
  "⊣",
  "⤏",
  "˝",
  "Ď",
  "ď",
  "Д",
  "д",
  "ⅅ",
  "ⅆ",
  "‡",
  "⇊",
  "⤑",
  "⩷",
  "°",
  "°",
  "∇",
  "Δ",
  "δ",
  "⦱",
  "⥿",
  "𝔇",
  "𝔡",
  "⥥",
  "⇃",
  "⇂",
  "´",
  "˙",
  "˝",
  "`",
  "˜",
  "⋄",
  "⋄",
  "⋄",
  "♦",
  "♦",
  "¨",
  "ⅆ",
  "ϝ",
  "⋲",
  "÷",
  "÷",
  "÷",
  "⋇",
  "⋇",
  "Ђ",
  "ђ",
  "⌞",
  "⌍",
  "$",
  "𝔻",
  "𝕕",
  "¨",
  "˙",
  "≐",
  "≑",
  "≐",
  "∸",
  "∔",
  "⊡",
  "⌆",
  "∯",
  "¨",
  "⇓",
  "⇐",
  "⇔",
  "⫤",
  "⟸",
  "⟺",
  "⟹",
  "⇒",
  "⊨",
  "⇑",
  "⇕",
  "∥",
  "↓",
  "⇓",
  "↓",
  "⤓",
  "⇵",
  "⇊",
  "⇃",
  "⇂",
  "⥐",
  "⥞",
  "↽",
  "⥖",
  "⥟",
  "⇁",
  "⥗",
  "⊤",
  "↧",
  "⤐",
  "⌟",
  "⌌",
  "𝒟",
  "𝒹",
  "Ѕ",
  "ѕ",
  "⧶",
  "Đ",
  "đ",
  "⋱",
  "▿",
  "▾",
  "⇵",
  "⥯",
  "⦦",
  "Џ",
  "џ",
  "⟿",
  "É",
  "É",
  "é",
  "é",
  "⩮",
  "Ě",
  "ě",
  "≖",
  "Ê",
  "Ê",
  "ê",
  "ê",
  "≕",
  "Э",
  "э",
  "⩷",
  "Ė",
  "≑",
  "ė",
  "ⅇ",
  "≒",
  "𝔈",
  "𝔢",
  "⪚",
  "È",
  "È",
  "è",
  "è",
  "⪖",
  "⪘",
  "⪙",
  "∈",
  "⏧",
  "ℓ",
  "⪕",
  "⪗",
  "Ē",
  "ē",
  "∅",
  "∅",
  "◻",
  "∅",
  "▫",
  " ",
  " ",
  " ",
  "Ŋ",
  "ŋ",
  " ",
  "Ę",
  "ę",
  "𝔼",
  "𝕖",
  "⋕",
  "⧣",
  "⩱",
  "ε",
  "Ε",
  "ε",
  "ϵ",
  "≖",
  "≕",
  "≂",
  "⪖",
  "⪕",
  "⩵",
  "=",
  "≂",
  "≟",
  "⇌",
  "≡",
  "⩸",
  "⧥",
  "⥱",
  "≓",
  "ℰ",
  "ℯ",
  "≐",
  "⩳",
  "≂",
  "Η",
  "η",
  "Ð",
  "Ð",
  "ð",
  "ð",
  "Ë",
  "Ë",
  "ë",
  "ë",
  "€",
  "!",
  "∃",
  "∃",
  "ℰ",
  "ⅇ",
  "ⅇ",
  "≒",
  "Ф",
  "ф",
  "♀",
  "ﬃ",
  "ﬀ",
  "ﬄ",
  "𝔉",
  "𝔣",
  "ﬁ",
  "◼",
  "▪",
  "f",
  "♭",
  "ﬂ",
  "▱",
  "ƒ",
  "𝔽",
  "𝕗",
  "∀",
  "∀",
  "⋔",
  "⫙",
  "ℱ",
  "⨍",
  "½",
  "½",
  "⅓",
  "¼",
  "¼",
  "⅕",
  "⅙",
  "⅛",
  "⅔",
  "⅖",
  "¾",
  "¾",
  "⅗",
  "⅜",
  "⅘",
  "⅚",
  "⅝",
  "⅞",
  "⁄",
  "⌢",
  "ℱ",
  "𝒻",
  "ǵ",
  "Γ",
  "γ",
  "Ϝ",
  "ϝ",
  "⪆",
  "Ğ",
  "ğ",
  "Ģ",
  "Ĝ",
  "ĝ",
  "Г",
  "г",
  "Ġ",
  "ġ",
  "≧",
  "≥",
  "⪌",
  "⋛",
  "≥",
  "≧",
  "⩾",
  "⩾",
  "⪩",
  "⪀",
  "⪂",
  "⪄",
  "⋛︀",
  "⪔",
  "𝔊",
  "𝔤",
  "⋙",
  "≫",
  "⋙",
  "ℷ",
  "Ѓ",
  "ѓ",
  "≷",
  "⪥",
  "⪒",
  "⪤",
  "⪊",
  "⪊",
  "≩",
  "⪈",
  "⪈",
  "≩",
  "⋧",
  "𝔾",
  "𝕘",
  "`",
  "≥",
  "⋛",
  "≧",
  "⪢",
  "≷",
  "⩾",
  "≳",
  "𝒢",
  "ℊ",
  "≳",
  "⪎",
  "⪐",
  ">",
  ">",
  "≫",
  ">",
  ">",
  "⪧",
  "⩺",
  "⋗",
  "⦕",
  "⩼",
  "⪆",
  "⥸",
  "⋗",
  "⋛",
  "⪌",
  "≷",
  "≳",
  "≩︀",
  "≩︀",
  "ˇ",
  " ",
  "½",
  "ℋ",
  "Ъ",
  "ъ",
  "⇔",
  "↔",
  "⥈",
  "↭",
  "^",
  "ℏ",
  "Ĥ",
  "ĥ",
  "♥",
  "♥",
  "…",
  "⊹",
  "ℌ",
  "𝔥",
  "ℋ",
  "⤥",
  "⤦",
  "⇿",
  "∻",
  "↩",
  "↪",
  "ℍ",
  "𝕙",
  "―",
  "─",
  "ℋ",
  "𝒽",
  "ℏ",
  "Ħ",
  "ħ",
  "≎",
  "≏",
  "⁃",
  "‐",
  "Í",
  "Í",
  "í",
  "í",
  "Î",
  "Î",
  "î",
  "î",
  "И",
  "и",
  "İ",
  "Е",
  "е",
  "¡",
  "¡",
  "⇔",
  "ℑ",
  "𝔦",
  "Ì",
  "Ì",
  "ì",
  "ì",
  "ⅈ",
  "⨌",
  "∭",
  "⧜",
  "℩",
  "Ĳ",
  "ĳ",
  "ℑ",
  "Ī",
  "ī",
  "ℑ",
  "ⅈ",
  "ℐ",
  "ℑ",
  "ı",
  "⊷",
  "Ƶ",
  "⇒",
  "∈",
  "℅",
  "∞",
  "⧝",
  "ı",
  "∬",
  "∫",
  "⊺",
  "ℤ",
  "∫",
  "⊺",
  "⋂",
  "⨗",
  "⨼",
  "Ё",
  "ё",
  "Į",
  "į",
  "𝕀",
  "𝕚",
  "Ι",
  "ι",
  "⨼",
  "¿",
  "¿",
  "ℐ",
  "𝒾",
  "∈",
  "⋵",
  "⋹",
  "⋴",
  "⋳",
  "∈",
  "Ĩ",
  "ĩ",
  "І",
  "і",
  "Ï",
  "Ï",
  "ï",
  "ï",
  "Ĵ",
  "ĵ",
  "Й",
  "й",
  "𝔍",
  "𝔧",
  "ȷ",
  "𝕁",
  "𝕛",
  "𝒥",
  "𝒿",
  "Ј",
  "ј",
  "Є",
  "є",
  "Κ",
  "κ",
  "ϰ",
  "Ķ",
  "ķ",
  "К",
  "к",
  "𝔎",
  "𝔨",
  "ĸ",
  "Х",
  "х",
  "Ќ",
  "ќ",
  "𝕂",
  "𝕜",
  "𝒦",
  "𝓀",
  "⇚",
  "Ĺ",
  "ĺ",
  "⦴",
  "ℒ",
  "Λ",
  "λ",
  "⟪",
  "⟨",
  "⦑",
  "⟨",
  "⪅",
  "ℒ",
  "«",
  "«",
  "↞",
  "⇐",
  "←",
  "⇤",
  "⤟",
  "⤝",
  "↩",
  "↫",
  "⤹",
  "⥳",
  "↢",
  "⪫",
  "⤛",
  "⤙",
  "⪭",
  "⪭︀",
  "⤎",
  "⤌",
  "❲",
  "{",
  "[",
  "⦋",
  "⦏",
  "⦍",
  "Ľ",
  "ľ",
  "Ļ",
  "ļ",
  "⌈",
  "{",
  "Л",
  "л",
  "⤶",
  "“",
  "„",
  "⥧",
  "⥋",
  "↲",
  "≦",
  "≤",
  "⟨",
  "←",
  "⇐",
  "←",
  "⇤",
  "⇆",
  "↢",
  "⌈",
  "⟦",
  "⥡",
  "⇃",
  "⥙",
  "⌊",
  "↽",
  "↼",
  "⇇",
  "↔",
  "⇔",
  "↔",
  "⇆",
  "⇋",
  "↭",
  "⥎",
  "⊣",
  "↤",
  "⥚",
  "⋋",
  "⊲",
  "⧏",
  "⊴",
  "⥑",
  "⥠",
  "↿",
  "⥘",
  "↼",
  "⥒",
  "⪋",
  "⋚",
  "≤",
  "≦",
  "⩽",
  "⩽",
  "⪨",
  "⩿",
  "⪁",
  "⪃",
  "⋚︀",
  "⪓",
  "⪅",
  "⋖",
  "⋚",
  "⪋",
  "⋚",
  "≦",
  "≶",
  "≶",
  "⪡",
  "≲",
  "⩽",
  "≲",
  "⥼",
  "⌊",
  "𝔏",
  "𝔩",
  "≶",
  "⪑",
  "⥢",
  "↽",
  "↼",
  "⥪",
  "▄",
  "Љ",
  "љ",
  "⋘",
  "≪",
  "⇇",
  "⌞",
  "⇚",
  "⥫",
  "◺",
  "Ŀ",
  "ŀ",
  "⎰",
  "⎰",
  "⪉",
  "⪉",
  "≨",
  "⪇",
  "⪇",
  "≨",
  "⋦",
  "⟬",
  "⇽",
  "⟦",
  "⟵",
  "⟸",
  "⟵",
  "⟷",
  "⟺",
  "⟷",
  "⟼",
  "⟶",
  "⟹",
  "⟶",
  "↫",
  "↬",
  "⦅",
  "𝕃",
  "𝕝",
  "⨭",
  "⨴",
  "∗",
  "_",
  "↙",
  "↘",
  "◊",
  "◊",
  "⧫",
  "(",
  "⦓",
  "⇆",
  "⌟",
  "⇋",
  "⥭",
  "⊿",
  "‹",
  "ℒ",
  "𝓁",
  "↰",
  "↰",
  "≲",
  "⪍",
  "⪏",
  "[",
  "‘",
  "‚",
  "Ł",
  "ł",
  "<",
  "<",
  "≪",
  "<",
  "<",
  "⪦",
  "⩹",
  "⋖",
  "⋋",
  "⋉",
  "⥶",
  "⩻",
  "◃",
  "⊴",
  "◂",
  "⦖",
  "⥊",
  "⥦",
  "≨︀",
  "≨︀",
  "¯",
  "¯",
  "♂",
  "✠",
  "✠",
  "⤅",
  "↦",
  "↦",
  "↧",
  "↤",
  "↥",
  "▮",
  "⨩",
  "М",
  "м",
  "—",
  "∺",
  "∡",
  " ",
  "ℳ",
  "𝔐",
  "𝔪",
  "℧",
  "µ",
  "µ",
  "∣",
  "*",
  "⫰",
  "·",
  "·",
  "−",
  "⊟",
  "∸",
  "⨪",
  "∓",
  "⫛",
  "…",
  "∓",
  "⊧",
  "𝕄",
  "𝕞",
  "∓",
  "ℳ",
  "𝓂",
  "∾",
  "Μ",
  "μ",
  "⊸",
  "⊸",
  "∇",
  "Ń",
  "ń",
  "∠⃒",
  "≉",
  "⩰̸",
  "≋̸",
  "ŉ",
  "≉",
  "♮",
  "♮",
  "ℕ",
  " ",
  " ",
  "≎̸",
  "≏̸",
  "⩃",
  "Ň",
  "ň",
  "Ņ",
  "ņ",
  "≇",
  "⩭̸",
  "⩂",
  "Н",
  "н",
  "–",
  "≠",
  "⤤",
  "⇗",
  "↗",
  "↗",
  "≐̸",
  "≢",
  "⤨",
  "≂̸",
  "≫",
  "≪",
  "&",
  "∄",
  "∄",
  "𝔑",
  "𝔫",
  "≧̸",
  "≱",
  "≱",
  "≧̸",
  "⩾̸",
  "⩾̸",
  "⋙̸",
  "≵",
  "≫⃒",
  "≯",
  "≯",
  "≫̸",
  "⇎",
  "↮",
  "⫲",
  "∋",
  "⋼",
  "⋺",
  "∋",
  "Њ",
  "њ",
  "⇍",
  "↚",
  "‥",
  "≦̸",
  "≰",
  "⇍",
  "↚",
  "⇎",
  "↮",
  "≰",
  "≦̸",
  "⩽̸",
  "⩽̸",
  "≮",
  "⋘̸",
  "≴",
  "≪⃒",
  "≮",
  "⋪",
  "⋬",
  "≪̸",
  "∤",
  " ",
  "ℕ",
  "𝕟",
  "⫬",
  "¬",
  "¬",
  "≢",
  "≭",
  "∦",
  "∉",
  "≠",
  "≂̸",
  "∄",
  "≯",
  "≱",
  "≧̸",
  "≫̸",
  "≹",
  "⩾̸",
  "≵",
  "≎̸",
  "≏̸",
  "∉",
  "⋵̸",
  "⋹̸",
  "∉",
  "⋷",
  "⋶",
  "⋪",
  "⧏̸",
  "⋬",
  "≮",
  "≰",
  "≸",
  "≪̸",
  "⩽̸",
  "≴",
  "⪢̸",
  "⪡̸",
  "∌",
  "∌",
  "⋾",
  "⋽",
  "⊀",
  "⪯̸",
  "⋠",
  "∌",
  "⋫",
  "⧐̸",
  "⋭",
  "⊏̸",
  "⋢",
  "⊐̸",
  "⋣",
  "⊂⃒",
  "⊈",
  "⊁",
  "⪰̸",
  "⋡",
  "≿̸",
  "⊃⃒",
  "⊉",
  "≁",
  "≄",
  "≇",
  "≉",
  "∤",
  "∦",
  "∦",
  "⫽⃥",
  "∂̸",
  "⨔",
  "⊀",
  "⋠",
  "⪯̸",
  "⊀",
  "⪯̸",
  "⇏",
  "↛",
  "⤳̸",
  "↝̸",
  "⇏",
  "↛",
  "⋫",
  "⋭",
  "⊁",
  "⋡",
  "⪰̸",
  "𝒩",
  "𝓃",
  "∤",
  "∦",
  "≁",
  "≄",
  "≄",
  "∤",
  "∦",
  "⋢",
  "⋣",
  "⊄",
  "⫅̸",
  "⊈",
  "⊂⃒",
  "⊈",
  "⫅̸",
  "⊁",
  "⪰̸",
  "⊅",
  "⫆̸",
  "⊉",
  "⊃⃒",
  "⊉",
  "⫆̸",
  "≹",
  "Ñ",
  "Ñ",
  "ñ",
  "ñ",
  "≸",
  "⋪",
  "⋬",
  "⋫",
  "⋭",
  "Ν",
  "ν",
  "#",
  "№",
  " ",
  "≍⃒",
  "⊯",
  "⊮",
  "⊭",
  "⊬",
  "≥⃒",
  ">⃒",
  "⤄",
  "⧞",
  "⤂",
  "≤⃒",
  "<⃒",
  "⊴⃒",
  "⤃",
  "⊵⃒",
  "∼⃒",
  "⤣",
  "⇖",
  "↖",
  "↖",
  "⤧",
  "Ó",
  "Ó",
  "ó",
  "ó",
  "⊛",
  "⊚",
  "Ô",
  "Ô",
  "ô",
  "ô",
  "О",
  "о",
  "⊝",
  "Ő",
  "ő",
  "⨸",
  "⊙",
  "⦼",
  "Œ",
  "œ",
  "⦿",
  "𝔒",
  "𝔬",
  "˛",
  "Ò",
  "Ò",
  "ò",
  "ò",
  "⧁",
  "⦵",
  "Ω",
  "∮",
  "↺",
  "⦾",
  "⦻",
  "‾",
  "⧀",
  "Ō",
  "ō",
  "Ω",
  "ω",
  "Ο",
  "ο",
  "⦶",
  "⊖",
  "𝕆",
  "𝕠",
  "⦷",
  "“",
  "‘",
  "⦹",
  "⊕",
  "⩔",
  "∨",
  "↻",
  "⩝",
  "ℴ",
  "ℴ",
  "ª",
  "ª",
  "º",
  "º",
  "⊶",
  "⩖",
  "⩗",
  "⩛",
  "Ⓢ",
  "𝒪",
  "ℴ",
  "Ø",
  "Ø",
  "ø",
  "ø",
  "⊘",
  "Õ",
  "Õ",
  "õ",
  "õ",
  "⨷",
  "⊗",
  "⨶",
  "Ö",
  "Ö",
  "ö",
  "ö",
  "⌽",
  "‾",
  "⏞",
  "⎴",
  "⏜",
  "∥",
  "¶",
  "¶",
  "∥",
  "⫳",
  "⫽",
  "∂",
  "∂",
  "П",
  "п",
  "%",
  ".",
  "‰",
  "⊥",
  "‱",
  "𝔓",
  "𝔭",
  "Φ",
  "φ",
  "ϕ",
  "ℳ",
  "☎",
  "Π",
  "π",
  "⋔",
  "ϖ",
  "ℏ",
  "ℎ",
  "ℏ",
  "+",
  "⨣",
  "⊞",
  "⨢",
  "∔",
  "⨥",
  "⩲",
  "±",
  "±",
  "±",
  "⨦",
  "⨧",
  "±",
  "ℌ",
  "⨕",
  "ℙ",
  "𝕡",
  "£",
  "£",
  "⪻",
  "≺",
  "⪷",
  "≼",
  "⪳",
  "⪯",
  "≺",
  "⪷",
  "≼",
  "≺",
  "⪯",
  "≼",
  "≾",
  "⪯",
  "⪹",
  "⪵",
  "⋨",
  "≾",
  "″",
  "′",
  "ℙ",
  "⪹",
  "⪵",
  "⋨",
  "∏",
  "∏",
  "⌮",
  "⌒",
  "⌓",
  "∝",
  "∷",
  "∝",
  "∝",
  "≾",
  "⊰",
  "𝒫",
  "𝓅",
  "Ψ",
  "ψ",
  " ",
  "𝔔",
  "𝔮",
  "⨌",
  "ℚ",
  "𝕢",
  "⁗",
  "𝒬",
  "𝓆",
  "ℍ",
  "⨖",
  "?",
  "≟",
  '"',
  '"',
  "⇛",
  "∽̱",
  "Ŕ",
  "ŕ",
  "√",
  "⦳",
  "⟫",
  "⟩",
  "⦒",
  "⦥",
  "⟩",
  "»",
  "»",
  "↠",
  "⇒",
  "→",
  "⥵",
  "⇥",
  "⤠",
  "⤳",
  "⤞",
  "↪",
  "↬",
  "⥅",
  "⥴",
  "⤖",
  "↣",
  "↝",
  "⤜",
  "⤚",
  "∶",
  "ℚ",
  "⤐",
  "⤏",
  "⤍",
  "❳",
  "}",
  "]",
  "⦌",
  "⦎",
  "⦐",
  "Ř",
  "ř",
  "Ŗ",
  "ŗ",
  "⌉",
  "}",
  "Р",
  "р",
  "⤷",
  "⥩",
  "”",
  "”",
  "↳",
  "ℜ",
  "ℜ",
  "ℛ",
  "ℜ",
  "ℝ",
  "▭",
  "®",
  "®",
  "®",
  "®",
  "∋",
  "⇋",
  "⥯",
  "⥽",
  "⌋",
  "ℜ",
  "𝔯",
  "⥤",
  "⇁",
  "⇀",
  "⥬",
  "Ρ",
  "ρ",
  "ϱ",
  "⟩",
  "→",
  "⇒",
  "→",
  "⇥",
  "⇄",
  "↣",
  "⌉",
  "⟧",
  "⥝",
  "⇂",
  "⥕",
  "⌋",
  "⇁",
  "⇀",
  "⇄",
  "⇌",
  "⇉",
  "↝",
  "⊢",
  "↦",
  "⥛",
  "⋌",
  "⊳",
  "⧐",
  "⊵",
  "⥏",
  "⥜",
  "↾",
  "⥔",
  "⇀",
  "⥓",
  "˚",
  "≓",
  "⇄",
  "⇌",
  "⎱",
  "⎱",
  "⫮",
  "⟭",
  "⇾",
  "⟧",
  "⦆",
  "ℝ",
  "𝕣",
  "⨮",
  "⨵",
  "⥰",
  ")",
  "⦔",
  "⨒",
  "⇉",
  "⇛",
  "›",
  "ℛ",
  "𝓇",
  "↱",
  "↱",
  "]",
  "’",
  "’",
  "⋌",
  "⋊",
  "▹",
  "⊵",
  "▸",
  "⧎",
  "⧴",
  "⥨",
  "℞",
  "Ś",
  "ś",
  "‚",
  "⪼",
  "≻",
  "⪸",
  "Š",
  "š",
  "≽",
  "⪴",
  "⪰",
  "Ş",
  "ş",
  "Ŝ",
  "ŝ",
  "⪺",
  "⪶",
  "⋩",
  "⨓",
  "≿",
  "С",
  "с",
  "⋅",
  "⊡",
  "⩦",
  "⤥",
  "⇘",
  "↘",
  "↘",
  "§",
  "§",
  ";",
  "⤩",
  "∖",
  "∖",
  "✶",
  "𝔖",
  "𝔰",
  "⌢",
  "♯",
  "Щ",
  "щ",
  "Ш",
  "ш",
  "↓",
  "←",
  "∣",
  "∥",
  "→",
  "↑",
  "Σ",
  "σ",
  "ς",
  "ς",
  "∼",
  "⩪",
  "≃",
  "≃",
  "⪞",
  "⪠",
  "⪝",
  "⪟",
  "≆",
  "⨤",
  "⥲",
  "←",
  "∘",
  "∖",
  "⨳",
  "⧤",
  "∣",
  "⌣",
  "⪪",
  "⪬",
  "⪬︀",
  "Ь",
  "ь",
  "/",
  "⧄",
  "⌿",
  "𝕊",
  "𝕤",
  "♠",
  "♠",
  "∥",
  "⊓",
  "⊓︀",
  "⊔",
  "⊔︀",
  "√",
  "⊏",
  "⊑",
  "⊏",
  "⊑",
  "⊐",
  "⊒",
  "⊐",
  "⊒",
  "□",
  "□",
  "□",
  "⊓",
  "⊏",
  "⊑",
  "⊐",
  "⊒",
  "⊔",
  "▪",
  "▪",
  "→",
  "𝒮",
  "𝓈",
  "∖",
  "⌣",
  "⋆",
  "⋆",
  "☆",
  "★",
  "ϵ",
  "ϕ",
  "¯",
  "⋐",
  "⊂",
  "⪽",
  "⫅",
  "⊆",
  "⫃",
  "⫁",
  "⫋",
  "⊊",
  "⪿",
  "⥹",
  "⋐",
  "⊂",
  "⊆",
  "⫅",
  "⊆",
  "⊊",
  "⫋",
  "⫇",
  "⫕",
  "⫓",
  "≻",
  "⪸",
  "≽",
  "≻",
  "⪰",
  "≽",
  "≿",
  "⪰",
  "⪺",
  "⪶",
  "⋩",
  "≿",
  "∋",
  "∑",
  "∑",
  "♪",
  "⋑",
  "⊃",
  "¹",
  "¹",
  "²",
  "²",
  "³",
  "³",
  "⪾",
  "⫘",
  "⫆",
  "⊇",
  "⫄",
  "⊃",
  "⊇",
  "⟉",
  "⫗",
  "⥻",
  "⫂",
  "⫌",
  "⊋",
  "⫀",
  "⋑",
  "⊃",
  "⊇",
  "⫆",
  "⊋",
  "⫌",
  "⫈",
  "⫔",
  "⫖",
  "⤦",
  "⇙",
  "↙",
  "↙",
  "⤪",
  "ß",
  "ß",
  "&",
  "⌖",
  "Τ",
  "τ",
  "⎴",
  "Ť",
  "ť",
  "Ţ",
  "ţ",
  "Т",
  "т",
  "⌕",
  "𝔗",
  "𝔱",
  "∴",
  "∴",
  "∴",
  "Θ",
  "θ",
  "ϑ",
  "ϑ",
  "≈",
  "∼",
  " ",
  " ",
  " ",
  "≈",
  "∼",
  "Þ",
  "Þ",
  "þ",
  "þ",
  "∼",
  "˜",
  "≃",
  "≅",
  "≈",
  "×",
  "×",
  "⊠",
  "⨱",
  "⨰",
  "∭",
  "⤨",
  "⊤",
  "⌶",
  "⫱",
  "𝕋",
  "𝕥",
  "⫚",
  "⤩",
  "‴",
  "™",
  "™",
  "▵",
  "▿",
  "◃",
  "⊴",
  "≜",
  "▹",
  "⊵",
  "◬",
  "≜",
  "⨺",
  "⨹",
  "⧍",
  "⨻",
  "⏢",
  "𝒯",
  "𝓉",
  "Ц",
  "ц",
  "Ћ",
  "ћ",
  "Ŧ",
  "ŧ",
  "≬",
  "↞",
  "↠",
  "Ú",
  "Ú",
  "ú",
  "ú",
  "↟",
  "⇑",
  "↑",
  "⥉",
  "Ў",
  "ў",
  "Ŭ",
  "ŭ",
  "Û",
  "Û",
  "û",
  "û",
  "У",
  "у",
  "⇅",
  "Ű",
  "ű",
  "⥮",
  "⥾",
  "𝔘",
  "𝔲",
  "Ù",
  "Ù",
  "ù",
  "ù",
  "⥣",
  "↿",
  "↾",
  "▀",
  "⌜",
  "⌜",
  "⌏",
  "◸",
  "Ū",
  "ū",
  "¨",
  "¨",
  "_",
  "⏟",
  "⎵",
  "⏝",
  "⋃",
  "⊎",
  "Ų",
  "ų",
  "𝕌",
  "𝕦",
  "↑",
  "⇑",
  "↑",
  "⤒",
  "⇅",
  "↕",
  "⇕",
  "↕",
  "⥮",
  "↿",
  "↾",
  "⊎",
  "↖",
  "↗",
  "ϒ",
  "υ",
  "ϒ",
  "Υ",
  "υ",
  "⊥",
  "↥",
  "⇈",
  "⌝",
  "⌝",
  "⌎",
  "Ů",
  "ů",
  "◹",
  "𝒰",
  "𝓊",
  "⋰",
  "Ũ",
  "ũ",
  "▵",
  "▴",
  "⇈",
  "Ü",
  "Ü",
  "ü",
  "ü",
  "⦧",
  "⦜",
  "ϵ",
  "ϰ",
  "∅",
  "ϕ",
  "ϖ",
  "∝",
  "⇕",
  "↕",
  "ϱ",
  "ς",
  "⊊︀",
  "⫋︀",
  "⊋︀",
  "⫌︀",
  "ϑ",
  "⊲",
  "⊳",
  "⫫",
  "⫨",
  "⫩",
  "В",
  "в",
  "⊫",
  "⊩",
  "⊨",
  "⊢",
  "⫦",
  "⋁",
  "∨",
  "⊻",
  "≚",
  "⋮",
  "‖",
  "|",
  "‖",
  "|",
  "∣",
  "|",
  "❘",
  "≀",
  " ",
  "𝔙",
  "𝔳",
  "⊲",
  "⊂⃒",
  "⊃⃒",
  "𝕍",
  "𝕧",
  "∝",
  "⊳",
  "𝒱",
  "𝓋",
  "⫋︀",
  "⊊︀",
  "⫌︀",
  "⊋︀",
  "⊪",
  "⦚",
  "Ŵ",
  "ŵ",
  "⩟",
  "⋀",
  "∧",
  "≙",
  "℘",
  "𝔚",
  "𝔴",
  "𝕎",
  "𝕨",
  "℘",
  "≀",
  "≀",
  "𝒲",
  "𝓌",
  "⋂",
  "◯",
  "⋃",
  "▽",
  "𝔛",
  "𝔵",
  "⟺",
  "⟷",
  "Ξ",
  "ξ",
  "⟸",
  "⟵",
  "⟼",
  "⋻",
  "⨀",
  "𝕏",
  "𝕩",
  "⨁",
  "⨂",
  "⟹",
  "⟶",
  "𝒳",
  "𝓍",
  "⨆",
  "⨄",
  "△",
  "⋁",
  "⋀",
  "Ý",
  "Ý",
  "ý",
  "ý",
  "Я",
  "я",
  "Ŷ",
  "ŷ",
  "Ы",
  "ы",
  "¥",
  "¥",
  "𝔜",
  "𝔶",
  "Ї",
  "ї",
  "𝕐",
  "𝕪",
  "𝒴",
  "𝓎",
  "Ю",
  "ю",
  "Ÿ",
  "ÿ",
  "ÿ",
  "Ź",
  "ź",
  "Ž",
  "ž",
  "З",
  "з",
  "Ż",
  "ż",
  "ℨ",
  "Ζ",
  "ζ",
  "ℨ",
  "𝔷",
  "Ж",
  "ж",
  "⇝",
  "ℤ",
  "𝕫",
  "𝒵",
  "𝓏",
];

export default chars;
