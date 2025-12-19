# Driftchef räddningstjänst – Marknadsinsikter kring tvättlösning/system

## 1. Persona & kontext (kort)

1. **Typ av organisation och verksamhet**
   - Jag arbetar i ett **kommunalt räddningstjänstförbund** med både heltids- och deltidsstyrkor.  
   - Vi verkar i **mellanstor stad + landsbygd** med flera mindre orter.  
   - Vi har **6 stationer** och totalt runt **180 brandmän** (heltid + RiB) samt befäl och stödfunktioner.

2. **Mitt ansvar kopplat till tvättlösning/tvättrum**
   - Jag ansvarar för **driften av stationerna**, inklusive lokaler, utrustning, skyddskläder och rutiner för dekontaminering.  
   - Det innebär ansvar för **tvätt av larmställ, underkläder, handskar, huvor, underställ, filtar och handdukar** efter insats.  
   - Jag behöver säkerställa att tvättlösningen inte bara gör saker “rena” utan **minimerar cancerogener** och **bibehåller skyddsnivån** i utrustningen.  
   - Jag måste samtidigt se till att **beredskapen inte sjunker** när mycket materiel är ur bruk p.g.a. tvätt.

3. **Vilka andra roller jag samverkar med**
   - **Räddningschef**, **strategiska chefer**, **arbetsmiljöingenjör**, **skyddsombud** och **fackliga representanter**.  
   - **Fastighetsansvarig**, **upphandlingsenhet**, **ekonomifunktion** och externa **leverantörer/servicetekniker**.  
   - I praktiken även **styrkeledare** och **utbildningsansvariga**, eftersom rutinerna måste fungera i vardagen på skift.

---

## 2. Lista över funderingar, problem och utmaningar (tabell)

### Översikt

Nedan är en strukturerad lista i Markdown-tabell enligt dina instruktioner.

| ID | Fas i processen | Kategori                          | Typ       | Beskrivning (i jag-form) | Varför det är viktigt | Konsekvens om det hanteras dåligt |
|----|-----------------|-----------------------------------|-----------|---------------------------|------------------------|------------------------------------|
| 1  | Nuvarande drift | Teknik/Funktion                  | Problem   | Jag är osäker på om våra nuvarande tvättprogram verkligen tar bort cancerogener (sot, PAH, PFAS) från larmställen, eller bara gör dem “synligt rena”. | Brandmännen ska inte bära runt på osynliga restprodukter som ökar cancerrisk över tid. | Personalen går i förorenade ställ i åratal, vilket kan leda till ökad sjuklighet, misstänkt arbetsskada och förlorat förtroende för ledningen. |
| 2  | Behovsanalys    | Teknik/Funktion                  | Fundering | Jag vet inte exakt hur många tvättcykler ett larmställ klarar innan skyddsnivån försämras, och hur olika tvättmetoder påverkar livslängden. | För att göra rätt investerings- och tvättstrategi måste jag förstå klädernas faktiska livslängd. | Antingen byter vi för sent (sämre skydd) eller för tidigt (onödiga kostnader), som båda skapar kritik från personal eller ekonomiavdelning. |
| 3  | Nuvarande drift | Teknik/Funktion                  | Utmaning  | Jag kämpar med att separera “smutsig zon” och “ren zon” praktiskt i tvättrummet – särskilt på mindre stationer. | Rätt flöde minskar risken att smuts sprids vidare till rena utrymmen eller personalens socialytor. | Smutsiga ställ passerar genom rena delar av stationen, vilket ökar exponering för personal, och ger dåligt intryck vid tillsyn eller skyddsronder. |
| 4  | Behovsanalys    | Teknik/Funktion                  | Fundering | Jag är osäker på vilka maskintyper (storlek, G-kraft, program, automatiska doseringssystem) som faktiskt är bäst för räddningstjänstens behov, inte bara “vanlig tvätt”. | Fel maskinval låser oss i 10–15 år med suboptimal lösning. | Vi investerar i utrustning som antingen inte klarar toppar, inte kan hantera kontaminerad tvätt korrekt, eller sliter sönder dyr skyddsutrustning. |
| 5  | Löpande drift   | Teknik/Funktion                  | Problem   | Vid stora bränder får vi plötsligt in enorma mängder smutsiga larmställ och filtar, och tvättkapaciteten räcker inte till. | Vi måste kunna hantera toppbelastning utan att beredskapen kollapsar. | Ställ blir liggande för länge, personal får gå i reservställ i fel storlek eller med sämre funktion, vilket påverkar både säkerhet och arbetsmiljö. |
| 6  | Nuvarande drift | Teknik/Funktion                  | Problem   | Vi blandar ibland olika textiltyper i samma tvätt, för att spara tid, trots att de borde behandlas olika. | Olika material kräver olika program för att bevara egenskaper och dekontaminering. | Skyddshandskar, huvor eller underställ slits ut i förtid eller blir inte tillräckligt rena, vilket både kostar pengar och försämrar skyddet. |
| 7  | Behovsanalys    | Teknik/Funktion                  | Fundering | Jag funderar på om vi ska ha torkskåp, torkrum eller tumlare – och hur det påverkar materialens livslängd och insatstider. | Torklösningen påverkar hur snabbt ställ kommer tillbaka i tjänst och hur de åldras. | För lång torktid ger lägre beredskap; fel torkmetod förstör reflextape, membran eller passform vilket försämrar skyddsnivån. |
| 8  | Implementering  | Teknik/Funktion                  | Utmaning  | Att få till praktisk spårbarhet på plagg-nivå (taggar, chip, logg av tvättar) utan att skapa ett administrativt monster. | Spårbarhet är nyckeln vid incidenter, cancerutredningar och tillsyn. | Vi kan inte visa vem som bar vilket ställ när, eller hur det skötts, vilket gör oss sårbara juridiskt och skadar förtroendet för organisationen. |
| 9  | Behovsanalys    | Teknik/Funktion                  | Fundering | Jag är inte helt trygg i vilka standarder och rekommendationer (MSB, EN-standarder, AFS m.m.) som borde styra kravspecen. | Vi måste luta oss mot erkända standarder för att kunna motivera valen. | Vi upphandlar på “känsla” istället för evidens, vilket gör det svårt att försvara lösningen vid kritiska frågor, revisioner eller olyckor. |
| 10 | Behovsanalys    | Ekonomi/LCC                      | Fundering | Jag behöver bättre beslutsunderlag för jämförelse mellan intern tvätt och extern tvätt (total kostnad över 10–15 år). | Ekonomin är avgörande för att få politiskt stöd och budget. | Vi fastnar i en lösning som känns billig på fakturan men blir dyr i längden via restider, administration, slit på ställen och extra reservmateriel. |
| 11 | Upphandling     | Ekonomi/LCC                      | Problem   | Upphandlingstexten tenderar att fokusera på inköpspris, inte livscykelkostnad (energi, service, stillestånd). | Fel fokus i upphandlingen leder till fel leverantör och fel system. | Vi “vinner” upphandlingen på lågt pris men “förlorar” i drift – högre driftkostnader, mer stillestånd och sämre funktion under många år. |
| 12 | Löpande drift   | Ekonomi/LCC                      | Problem   | Energi-, vatten- och kemikalieförbrukningen i tvättprocessen är svår att följa upp på ett konkret sätt. | Hållbarhet, miljökrav och ekonomi hänger ihop – jag måste kunna visa siffror. | Vi får kritik för dåligt miljöarbete, högre kostnader än nödvändigt och svårt att argumentera för investeringar i bättre teknik. |
| 13 | Löpande drift   | Ekonomi/LCC                      | Utmaning  | Personaltiden kring tvätt (sortering, hantering, hängning, loggning) äts upp av brandmännens arbetstid. | Varje timme lagd på tvätt är en timme mindre för övning, underhåll eller utryckningsförberedelser. | Vi får sämre övningsnivå, mer stress och risk att tvättrutiner prioriteras ned när det kör ihop sig. |
| 14 | Löpande drift   | Ekonomi/LCC                      | Problem   | Vi är sårbara när en maskin går sönder – service kan ta dagar, ibland veckor. | Tvättkapaciteten måste vara robust med backup-lösningar. | Smutsiga ställ blir liggande, vi skickar spontant till extern tvätt (dyrt, rörigt), och beredskapen på små stationer försämras markant. |
| 15 | Behovsanalys    | Ekonomi/LCC                      | Fundering | Jag saknar en tydlig modell för hur många reservställ vi behöver per station för att hantera tvätt och slitage. | För få reservställ ger sämre beredskap; för många binder onödig kapital. | Antingen står vi utan rätt storlekar när det behövs, eller också sitter vi på överlager som ekonomiavdelningen ifrågasätter. |
| 16 | Nuvarande drift | Risk/Arbetsmiljö/Beredskap       | Problem   | Trots riktlinjer ser jag att brandmän ibland går in i sociala utrymmen med delvis kontaminerade kläder. | Vi måste minska vardagsexponeringen för cancerogener, inte bara under insats. | Föroreningar sprids i fikarum, kontor och fordon, vilket på sikt ökar hälsoriskerna och skapar misstro mot ledningens “arbetsmiljö-snack”. |
| 17 | Löpande drift   | Risk/Arbetsmiljö/Beredskap       | Utmaning  | Att förändra kultur och beteenden kring dekontaminering är svårt – särskilt bland erfarna brandmän som “alltid gjort så här”. | Rutiner fungerar bara om människor faktiskt följer dem. | Vi får ett glapp mellan policy och verklighet; vid en arbetsskada står vi svagt när någon visar hur det egentligen går till i vardagen. |
| 18 | Nuvarande drift | Risk/Arbetsmiljö/Beredskap       | Problem   | Vi har inte alltid perfekta rutiner för smittförande material (blod, kroppsvätskor) kombinerat med sot och kemikalier. | Kombinationen biologiska risker och kemiska risker kräver tydliga processer. | Personal kan utsättas för infektioner eller farliga blandningar, och vi kan få kritik vid tillsyn eller efter en incident. |
| 19 | Upphandling     | Risk/Arbetsmiljö/Beredskap       | Fundering | Jag är osäker på hur vi tydligt ska skriva in arbetsmiljö- och beredskapskrav i upphandlingen, inte bara tekniska specar. | Om kraven inte står tydligt blir de heller inte levererade eller uppföljda. | Vi får ett system som är “rätt på papperet” men inte tar verklig hänsyn till arbetsmiljörisker, kultur och beredskap. |
| 20 | Löpande drift   | Risk/Arbetsmiljö/Beredskap       | Problem   | Ställ kan bli kvar i tvätt eller tork när larmet går, och personal springer och letar efter utrustning i fel läge. | Vid larm ska det vara glasklart var utrustningen finns och att den är klar att använda. | Förlorade minuter, felaktiga storlekar, stress – i värsta fall försenad insats eller att någon går ut med bristfälligt skydd. |
| 21 | Implementering  | Risk/Arbetsmiljö/Beredskap       | Utmaning  | Att förankra nya rutiner och system med skyddsombud, fack och personal utan att processen drar ut i evigheter. | Delaktighet är viktigt, men vi måste också komma i mål. | Antingen kör vi över folk och får motstånd, eller så händer inget på 2–3 år och
 inget vårdigt händer och vi sitter kvar med en dålig lösning. |
| 22 | Löpande drift   | Risk/Arbetsmiljö/Beredskap       | Problem   | Dokumentation av tvätt, incidenter och avvikelser sker spretigt i olika system eller inte alls. | Vid en allvarlig sjukdom eller olycka måste vi kunna följa historiken. | Vi kan inte visa vad vi gjort eller inte gjort, vilket ger juridisk osäkerhet, dålig lärandeprocess och risk för misstro från personal och myndigheter. |
| 23 | Löpande drift   | Risk/Arbetsmiljö/Beredskap       | Fundering | Jag funderar på hur hårt vi ska driva miljökraven (kemikalier, avlopp, energi) i förhållande till renhets- och säkerhetskraven. | Vi måste balansera arbetsmiljö, yttre miljö och budget utan att kompromissa med säkerhet. | Antingen får vi kritik för miljöpåverkan, eller så använder vi medel/program som försämrar dekontamineringen eller kortar livslängden på utrustningen. |
| 24 | Nuvarande drift | Annat                            | Utmaning  | Jag har svårt att hitta bra, enkla sätt att utbilda nya och deltidsbrandmän i hela tvätt- och dekontamineringskedjan. | Systemet faller om många inte förstår varför och hur det ska göras. | Vi får ojämn kvalitet mellan stationer, beroende på vem som råkade introducera rutinerna, och det blir personberoende istället för systemberoende. |

---

## 3. Fördjupning: Topp-5 viktigaste dilemman

### Dilemma 1: Maximal dekontaminering vs bevarad livslängd och skyddsnivå

- **Kärnkonflikt:**  
  Jag vill köra så tuffa program som möjligt för att få bort cancerogener, men jag vet att för hård tvätt förstör membran, sömmar, reflexer och flammskydd. Varje tvätt förbättrar renheten men äter samtidigt av klädernas tekniska livslängd.
- **Typisk vardagssituation:**  
  Efter en större industribrand kommer 30–40 ställ in, rejält nedsmutsade och stinkande. Personalen vill “köra hårt” så de känns rena. Samtidigt vet jag att om vi alltid gör så, har vi snart ett enormt behov av nya ställ – som vi inte har budget för.
- **Vad jag önskar att en leverantör kunde lösa:**  
  En kombination av **bevisad dekontamineringsmetod + konkreta livslängdsdata** för våra ställ. Jag vill se svart på vitt: så här ren blir det, så här många tvättar klarar de, så här anpassas program och kemi för just våra plagg.

---

### Dilemma 2: Egen tvättkapacitet och kontroll vs extern tvätt och avlastning

- **Kärnkonflikt:**  
  Med egen tvätt har vi kontroll, korta ledtider och bättre beredskap – men det kräver investeringar, service och interna rutiner. Extern tvätt minskar vår arbetsbörda men skapar transporter, ledtider, slitage och beroende av en aktör vi inte styr över.
- **Typisk vardagssituation:**  
  Vi har redan fullt i schemat med övningar, tillsyn och rapportering. Samtidigt belastas personalen med tvätt och hantering. Förslaget “skicka mer externt” dyker upp – men jag vet att vi då riskerar att stå utan ställ en söndag kväll när något gått snett i logistiken.
- **Vad jag önskar att en leverantör kunde lösa:**  
  En **hybridmodell** där vi har tillräcklig intern kapacitet för akuta behov och toppar, men där extern part kan avlasta planerad tvätt. Dessutom tydliga beräkningsmodeller för total kostnad, beredskapseffekt och risk.

---

### Dilemma 3: Hög säkerhetsnivå och spårbarhet vs administrativ och teknisk komplexitet

- **Kärnkonflikt:**  
  Jag vill ha full spårbarhet: vem bar vilket ställ, när tvättades det, vilket program användes. Men varje ny nivå av spårbarhet riskerar att lägga på mer administration och systemkrångel för brandmän och styrkeledare.
- **Typisk vardagssituation:**  
  En enkel utryckning blir snabbt en administrativ kedja: logga vilka som var med, skanna ställ, knappa in tvättprogram, registrera tvättresultat. När det är stressigt prioriteras detta sist – eller inte alls.
- **Vad jag önskar att en leverantör kunde lösa:**  
  **Automatiserad spårbarhet** med minsta möjliga handpåläggning: t.ex. RFID/QR-lösningar som integrerar med befintliga system, där tvätten loggas automatiskt när stället tvättas, utan extra inloggningar och papperslappar.

---

### Dilemma 4: Säker arbetsmiljö i smutsig zon vs fysiska begränsningar i befintliga lokaler

- **Kärnkonflikt:**  
  Vi ska ha tydlig separation mellan smutsigt och rent, men våra stationer är byggda för flera decennier sedan, med trånga utrymmen, fel dörrar och genomgångsstråk där folk “alltid” gått.
- **Typisk vardagssituation:**  
  Ett smutsigt ställ hängs tillfälligt “bara här” i en korridor, någon bär det genom fikarummet för att komma snabbare till tvättmaskinen, fordonhallen används som torkplats i praktiken. Allt för att lokalerna inte är planerade för dagens krav.
- **Vad jag önskar att en leverantör kunde lösa:**  
  **Konkreta ombyggnads- eller layoutförslag** anpassade för räddningstjänst, inklusive tvättlösning, flöden och zonindelning – inte bara sälja maskiner utan paketera ett funktionellt tvätt- och dekontamineringskoncept för trånga och äldre stationer.

---

### Dilemma 5: Snabb återställning av beredskap vs konsekvent efterlevnad av rutiner

- **Kärnkonflikt:**  
  Vid hög larmfrekvens vill alla att ställen snabbt ska vara “klara igen”, vilket gör att man ibland genar i tvätt- och dekontamineringsprocessen. Samtidigt vet vi att rutinerna är framtagna just för att minska risker på lång sikt.
- **Typisk vardagssituation:**  
  Efter två täta insatser är personalen trött, det är sent, och någon föreslår att man “tar ställen imorgon” eller hoppar över vissa moment. Nästa dag fortsätter vardagen och ingen riktigt vet vad som blivit gjort eller inte.
- **Vad jag önskar att en leverantör kunde lösa:**  
  En lösning med **snabba, standardiserade flöden** och tydliga visuella stöd: t.ex. enkla checkflöden, färgkodning, automatiska påminnelser – så att det går snabbare att göra rätt än att göra fel. Och gärna tidssparande teknik som gör det möjligt att följa rutiner även när det är tryck.
