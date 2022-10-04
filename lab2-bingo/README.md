# Lab 2
Codesandbox link: https://codesandbox.io/s/lab2-bingo-ebn2j8

## ES2021 - JavaScript Numeric Seperator
De numeric seperator zorgt ervoor dat grote getallen makkelijker leesbaar zijn. Een voorbeeld hiervan: 
```
const budget = 1000000000;
```

'Seperator' vertaald betekent scheider of scheidingsteken en dit is ook exact wat het doet. We passen het toe op vorig voorbeeld en geven nog een ander:
```
const budget = 1_000_000_000;
let amount = 23_534_276;
```

Je kan het ook gebruiken bij kommagetallen, voor en achter de komma:
```
let amount = 120_201_123.05;
let amount = 0.000_001 
```

Ook kunnen we ze gebruiken voor BigInt's, binair, octal en hexadecimaal.

