# LCC-kalkylator (Livscykelkostnad)

## Jämför den VERKLIGA kostnaden över tid

Inköpspriset är bara toppen av isberget. Den verkliga kostnaden för ett tvättsystem är vad det kostar över 10-15 år – inte vad det kostar dag 1.

Denna kalkylator hjälper er räkna ut Total Cost of Ownership (TCO) / Livscykelkostnad (LCC) för olika alternativ.

---

## Hur använder man kalkylatorn?

### Steg 1: Samla grunddata om er verksamhet

**Verksamhetsinformation:**
- [ ] Verksamhetstyp: _________________ (ex. Äldreboende, Simhall, Hundpensionat)
- [ ] Storlek: _________________ (ex. 60 platser, 150 000 besökare/år)
- [ ] Tvättvolym/vecka: ________ kg (uppskattning)
- [ ] Toppar: ________ kg/vecka (max belastning)
- [ ] Planerad användningstid: ________ år (typiskt 10-15 år)

**Tips för uppskattning av tvättvolym:**
- Äldreboende: 8-12 kg/plats/vecka
- Hotell: 15-20 kg/rum/vecka
- Simhall: 0,5-1 kg/besökare/vecka
- Idrottsanläggning: 0,3-0,8 kg/besökare/vecka
- Räddningstjänst: 10-15 kg/brandman/månad

---

### Steg 2: Mata in kostnadsdata för Alternativ A

**ALTERNATIV A:** _________________________ (namn på lösning)

#### A1. Investeringskostnader (CapEx)

| Post | Kostnad | Anteckningar |
|------|---------|--------------|
| Tvättmaskiner (antal × pris) | ____________ kr | Ex. 2× 95 000 = 190 000 kr |
| Torktumlare/torkskåp (antal × pris) | ____________ kr | |
| Automatisk dosering (om tillämpligt) | ____________ kr | |
| Knivity/digital plattform | ____________ kr | Engångskostnad eller årslicens? |
| Installation (VVS, el, montage) | ____________ kr | Ofta 20-30% av utrustningskostnad |
| Infrastruktur (ventilation, avlopp, etc.) | ____________ kr | Om nytt/uppgradering behövs |
| Byggnadsåtgärder (väggar, golv, etc.) | ____________ kr | Zonsseparering, vattenskydd |
| Driftsättning och testning | ____________ kr | |
| Utbildning personal | ____________ kr | |
| Övrigt (specificera): _____________ | ____________ kr | |
| **TOTAL CAPEX (A)** | **____________ kr** | |

#### A2. Årliga driftskostnader (OpEx)

| Post | Kr/år | Beräkning |
|------|-------|-----------|
| **El** | __________ kr | Förbrukning kWh/kg × volym × elpris |
| - Uppskattning: ______ kWh/kg × ______ kg/år × ______ kr/kWh | | Ex. 0,65 × 15 000 × 1,80 = 17 550 kr |
| **Vatten och avlopp** | __________ kr | Liter/kg × volym × va-pris |
| - Uppskattning: ______ L/kg × ______ kg/år × ______ kr/m³ | | Ex. 7 × 15 000 × 0,040 = 4 200 kr |
| **Kemikalier (tvättmedel, etc.)** | __________ kr | Vanligt 0,80-1,50 kr/kg |
| - Uppskattning: ______ kr/kg × ______ kg/år | | Ex. 1,10 × 15 000 = 16 500 kr |
| **Service och underhåll** | __________ kr | Fast serviceavtal eller per tillfälle |
| - Serviceavtal: ______ kr/år | | Ex. 24 000 kr/år (2 000/mån) |
| - ELLER uppskattad reparationskostnad: ___ % av CapEx | | 3-5% av utrustningskostnad |
| **Försäkring** | __________ kr | Om separat försäkring |
| **Reservdelar (förväntade)** | __________ kr | Slitage delar (pumpar, gummi, etc.) |
| **Knivity-licens (årlig)** | __________ kr | Om ej inkluderad i CapEx |
| **Administration** | __________ kr | Intern personaltid, dokumentation |
| **Övrigt (specificera): _____________** | __________ kr | |
| **TOTAL OPEX/ÅR (B)** | **__________ kr** | |

#### A3. Utbyten och uppgraderingar över livstid

| Post | År | Kostnad |
|------|-----|---------|
| Större reparation/renovering | År _____ | __________ kr |
| Komponentutbyte (ex. pumpar) | År _____ | __________ kr |
| Uppgradering (ex. digital plattform) | År _____ | __________ kr |
| **TOTAL UTBYTEN (C)** | | **__________ kr** |

#### A4. Avslutskostnader

| Post | Kostnad |
|------|---------|
| Demontering och bortforsling | __________ kr |
| Återställning av lokaler | __________ kr |
| **TOTAL AVSLUT (D)** | **__________ kr** |

#### A5. Restresidualvärde (minus = intäkt)

| Post | Värde |
|------|-------|
| Begagnatvärde utrustning efter ___ år | - __________ kr |
| **RESTVÄRDE (E)** | **- __________ kr** |

---

### Steg 3: Beräkna LCC för Alternativ A

**Formel:**
```
LCC = CapEx + (OpEx × antal år) + Utbyten + Avslut - Restvärde
LCC = A + (B × år) + C + D - E
```

**Beräkning Alternativ A (__________ år):**

```
LCC (A) = __________ kr (CapEx)
        + __________ kr/år × _____ år (OpEx)
        + __________ kr (Utbyten)
        + __________ kr (Avslut)
        - __________ kr (Restvärde)

LCC (A) = ______________ kr (Total)
```

**LCC per år:** _____________ kr / _____ år = ____________ kr/år

**LCC per kg tvätt:** _____________ kr / (_____ kg/år × _____ år) = _______ kr/kg

---

### Steg 4: Upprepa för Alternativ B (och C, D...)

**ALTERNATIV B:** _________________________ (ex. Lease-modell, annan leverantör, etc.)

#### B1. Investeringskostnader
| Post | Kostnad |
|------|---------|
| Initial kostnad (om någon) | ____________ kr |
| **TOTAL CAPEX (A)** | **____________ kr** |

#### B2. Årliga kostnader
| Post | Kr/år |
|------|-------|
| Leaseavgift/hyra (om tillämpligt) | __________ kr |
| El | __________ kr |
| Vatten och avlopp | __________ kr |
| Kemikalier | __________ kr |
| Service (om ej inkl. i lease) | __________ kr |
| Övrigt | __________ kr |
| **TOTAL/ÅR (B)** | **__________ kr** |

#### B3-B5. Utbyten, Avslut, Restvärde
| Post | Kostnad |
|------|---------|
| Utbyten | __________ kr |
| Avslut | __________ kr |
| Restvärde | - __________ kr |

**LCC (B) = ________________ kr**
**LCC per år = _____________ kr/år**
**LCC per kg = ____________ kr/kg**

---

### Steg 5: Jämför alternativen

| Metrisk | Alt A | Alt B | Alt C | Bäst |
|---------|-------|-------|-------|------|
| **Total LCC** | _____ kr | _____ kr | _____ kr | _____ |
| **LCC per år** | _____ kr | _____ kr | _____ kr | _____ |
| **LCC per kg** | _____ kr | _____ kr | _____ kr | _____ |
| **Initial kostnad** | _____ kr | _____ kr | _____ kr | _____ |
| **Årlig kostnad** | _____ kr | _____ kr | _____ kr | _____ |

**Viktiga iakttagelser:**

- Vilket alternativ har lägst total LCC? _______________
- Vilket alternativ har lägst initial kostnad? _______________
- Vilket alternativ har lägst årlig kostnad? _______________
- Skillnad mellan lägsta och högsta LCC: _______________ kr (______ %)

**Sensitivitetsanalys:**
- Vad händer om elpriser ökar 30%? Alternativ _____ blir bäst
- Vad händer om volymer ökar 40%? Alternativ _____ blir bäst
- Vad händer om servicekostnader fördubblas? Alternativ _____ blir bäst

---

## Exempel: Äldreboende (60 platser)

### Alternativ A: KEN-system (köp)

**Verksamhet:**
- 60 platser äldreboende
- 14 400 kg/år (60 platser × 4,8 kg/vecka × 52 veckor)
- 15 års livstid

#### Investeringskostnader
| Post | Kostnad |
|------|---------|
| 2× tvättmaskiner (18 kg) | 190 000 kr |
| 2× torktumlare (16 kg) | 145 000 kr |
| Automatisk dosering | 35 000 kr |
| Knivity-plattform | 25 000 kr |
| Installation | 85 000 kr |
| Infrastruktur (ventilation) | 45 000 kr |
| Utbildning | 12 000 kr |
| **TOTAL CAPEX** | **537 000 kr** |

#### Årliga driftskostnader
| Post | Kr/år |
|------|-------|
| El (0,62 kWh/kg × 14 400 × 1,85 kr) | 16 502 kr |
| Vatten (6,8 L/kg × 14 400 × 0,042 kr) | 4 113 kr |
| Kemikalier (1,05 kr/kg × 14 400) | 15 120 kr |
| Service (fast avtal) | 28 000 kr |
| Knivity-licens | 9 600 kr |
| Reservdelar (uppskattning) | 4 500 kr |
| **TOTAL OPEX/ÅR** | **77 835 kr** |

#### Utbyten över 15 år
| Post | År | Kostnad |
|------|-----|---------|
| Pumpbyte båda maskiner | År 8 | 18 000 kr |
| Uppdatering dosering | År 10 | 12 000 kr |
| **TOTAL UTBYTEN** | | **30 000 kr** |

#### Avslut och restvärde
| Post | Värde |
|------|-------|
| Bortforsling | 8 000 kr |
| Begagnatvärde (15% av CapEx) | - 55 000 kr |

**LCC-beräkning:**
```
LCC = 537 000 + (77 835 × 15) + 30 000 + 8 000 - 55 000
LCC = 537 000 + 1 167 525 + 30 000 + 8 000 - 55 000
LCC = 1 687 525 kr
```

**Per år:** 112 502 kr/år
**Per kg:** 7,81 kr/kg

---

### Alternativ B: KEN Full Service Lease

**Verksamhet:** Samma (60 platser, 14 400 kg/år, 15 år)

#### Investeringskostnader
| Post | Kostnad |
|------|---------|
| Initial | 0 kr |
| **TOTAL CAPEX** | **0 kr** |

#### Årliga kostnader
| Post | Kr/år |
|------|-------|
| Leaseavgift (all-inclusive) | 168 000 kr |
| El (betalar ni) | 16 502 kr |
| Vatten (betalar ni) | 4 113 kr |
| **TOTAL/ÅR** | **188 615 kr** |

*(Leasen inkluderar: utrustning, service, kemikalier, Knivity, utbyten, support)*

#### Utbyten, avslut, restvärde
| Post | Kostnad |
|------|---------|
| Utbyten | 0 kr (inkl. i lease) |
| Avslut | 0 kr |
| Restvärde | 0 kr |

**LCC-beräkning:**
```
LCC = 0 + (188 615 × 15) + 0 + 0 - 0
LCC = 2 829 225 kr
```

**Per år:** 188 615 kr/år
**Per kg:** 13,10 kr/kg

---

### Alternativ C: Standard kommersiell (lägsta pris)

**Verksamhet:** Samma

#### Investeringskostnader
| Post | Kostnad |
|------|---------|
| 2× tvättmaskiner (standard) | 140 000 kr |
| 2× torktumlare | 110 000 kr |
| Installation | 65 000 kr |
| Infrastruktur | 40 000 kr |
| **TOTAL CAPEX** | **355 000 kr** |

#### Årliga driftskostnader
| Post | Kr/år |
|------|-------|
| El (0,78 kWh/kg – mindre effektivt) | 20 793 kr |
| Vatten (9 L/kg – högre förbrukning) | 5 443 kr |
| Kemikalier (1,20 kr/kg) | 17 280 kr |
| Service (per tillfälle, uppskattning) | 18 000 kr |
| Reparationer (högre pga lägre kvalitet) | 12 000 kr |
| **TOTAL OPEX/ÅR** | **73 516 kr** |

#### Utbyten över 15 år
| Post | År | Kostnad |
|------|-----|---------|
| Totalrenovering år 7 (lägre kvalitet) | År 7 | 85 000 kr |
| Diverse utbyten | Löpande | 45 000 kr |
| **TOTAL UTBYTEN** | | **130 000 kr** |

#### Avslut och restvärde
| Post | Värde |
|------|-------|
| Bortforsling | 8 000 kr |
| Begagnatvärde (10% pga ålder/skick) | - 25 000 kr |

**LCC-beräkning:**
```
LCC = 355 000 + (73 516 × 15) + 130 000 + 8 000 - 25 000
LCC = 355 000 + 1 102 740 + 130 000 + 8 000 - 25 000
LCC = 1 570 740 kr
```

**Per år:** 104 716 kr/år
**Per kg:** 7,27 kr/kg

---

### Jämförelse: Alla alternativ

| Metrisk | KEN (köp) | KEN (lease) | Standard | Vinnare |
|---------|-----------|-------------|----------|---------|
| **Total LCC (15 år)** | 1 687 525 kr | 2 829 225 kr | 1 570 740 kr | Standard |
| **LCC per år** | 112 502 kr | 188 615 kr | 104 716 kr | Standard |
| **LCC per kg** | 7,81 kr | 13,10 kr | 7,27 kr | Standard |
| **Initial kostnad** | 537 000 kr | 0 kr | 355 000 kr | Lease |
| **Årlig kostnad (genomsnitt)** | 77 835 kr | 188 615 kr | 73 516 kr | Standard |

**Analys:**

**Lägst total LCC:** Standard (7% billigare än KEN-köp)

**MEN – viktiga kvalifikationer:**

1. **Risk:** Standard har 130 000 kr utbyten (osäkra) vs. KEN 30 000 kr
2. **Kvalitet:** Standard högre el/vatten-förbrukning (+25-30%)
3. **Tillförlitlighet:** Standard högre reparationskostnad (uppskattning)
4. **Garanti:** KEN garanterar TCO, Standard gör ej

**Sensitivitet:**

Om servicekostnader Standard ökar 50% (troligt vid äldre utrustning):
- Standard LCC: 1 840 740 kr (KEN blir billigare)

Om elpriser ökar 40% (energikris):
- Standard extra: 124 752 kr → Total 1 695 492 kr (nästan samma som KEN)

---

## Slutsatser från LCC-kalkylering

### Vanliga insikter

1. **Initial kostnad ≠ Total kostnad**
   - Billigaste i inköp ofta DYRAST över tiden
   - Driftskostnader 2-3× investeringskostnad över 15 år

2. **Energieffektivitet lönar sig**
   - 20% lägre elförbrukning = 15-25% lägre LCC
   - Med stigande elpriser: än viktigare

3. **Serviceavtal vs. ad-hoc**
   - Fast serviceavtal dyrare initialt
   - Ofta billigare totalt (förebyggande < reaktivt)
   - Viktigare: Förutsägbarhet

4. **Lease vs. köp**
   - Lease alltid dyrare totalt (20-40%)
   - Fördel: Noll CapEx, noll risk
   - Värt premien för många organisationer

5. **Kvalitet betalar sig**
   - Högkvalitetsutrustning 30-50% högre CapEx
   - Men 20-30% lägre OpEx + färre utbyten
   - Ofta lägst LCC

---

## Tips för korrekt LCC-kalkylering

### 1. Använd realistiska antaganden

**EJ:** "Vi kommer tvätta 10 000 kg/år"
**BÄTTRE:** "Historiskt 8 500-11 500 kg/år, använd 10 500 för säkerhet"

**EJ:** "Servicekostnad 2 000 kr/år (leverantörens uppskattning)"
**BÄTTRE:** "Validera med referenser – vad betalar de faktiskt?"

### 2. Inkludera alla kostnader

Lätt att glömma:
- [ ] Infrastrukturåtgärder (el, vatten, vent)
- [ ] Byggnadsanpassningar
- [ ] Utbildning (initial + återkommande vid personalomsättning)
- [ ] Kemikalier (ofta "glömt")
- [ ] Administration och dokumentation
- [ ] Försäkring
- [ ] Avslutningskostnader

### 3. Använd nuvärdesanalys för lång tid

För >10 år: Diskontera framtida kostnader

**Formel:**
```
Nuvärde = Framtida kostnad / (1 + diskonteringsränta)^år
```

**Exempel:**
- Utbyte år 10: 50 000 kr
- Diskonteringsränta: 3%
- Nuvärde: 50 000 / (1,03)^10 = 37 205 kr

*(Gör kalkylen mer exakt men också mer komplex)*

### 4. Sensitivitetsanalys

Testa "vad händer om":
- Elpriser +50%
- Volymer +30%
- Servicekostnader dubbla
- Livslängd 20 år istället för 15

**Robust lösning:** Vinner i de flesta scenarier

### 5. Kvantifiera kvalitativa faktorer

Försök sätta siffra på:
- Tillförlitlighet: Vad kostar 1 dag driftstopp? (förlorad intäkt, extern tvätt)
- Användarnöjdhet: Vad kostar missnöjda kunder? (churn rate)
- Rykte: Vad kostar dålig hygien? (regelbrott, böter)

**Exempel:**
- 1 dag driftstopp idrottshall = 15 000 kr förlorad intäkt
- Om Standard har 3× fler driftstopp/år (3 dagar vs. 1 dag)
- Extra kostnad Standard: 2 dagar × 15 000 kr × 15 år = 450 000 kr
- → KEN faktiskt billigare totalt

---

## Excel/Google Sheets-mall

**Ladda ner färdig kalkylator:**
[Länk till Excel-mall →]

**Funktioner i mallen:**
- Automatiska beräkningar
- Jämförelse upp till 5 alternativ
- Sensitivitetsanalys inbyggd
- Grafisk jämförelse
- Exporterbar rapport för beslutsfattare

---

## Behöver ni hjälp?

**KEN-support:**
- Vi hjälper er fylla i kalkylatorn (gratis)
- Vi tillhandahåller realistiska data för era volymer
- Vi validerar era antaganden mot verkliga projekt

[Boka hjälp med LCC-kalkylering →]

---

*KEN Tvättlösningar – Transparens i varje krona*

**"Vi visar hela kostnaden INNAN ni beslutar – ingen vill ha överraskningar"**
