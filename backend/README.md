# Backend Server för tvättlösningar.se

Detta är backend-servern för lead capture och verktygsresultat.

## Installation

1. **Installera Node.js** (om du inte har det):
   - Ladda ner från [nodejs.org](https://nodejs.org/)
   - Rekommenderad version: 18.x eller senare

2. **Installera dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Konfigurera miljövariabler**:
   ```bash
   cp .env.example .env
   ```

   Redigera `.env` och fyll i dina uppgifter:
   - SMTP-inställningar för e-post (Gmail, SendGrid, eller annan SMTP-server)
   - Admin e-postadress
   - Port (standard: 3000)

## Användning

### Starta servern (produktion):
```bash
npm start
```

### Starta servern (utveckling med auto-reload):
```bash
npm run dev
```

Servern kommer att köras på `http://localhost:3000`

## API Endpoints

### POST `/api/leads`
Registrera ett nytt lead (från formulär).

**Request body:**
```json
{
  "name": "Anna Andersson",
  "email": "anna@example.com",
  "company": "Äldreboende AB",
  "phone": "070-123 45 67",
  "source": "landing-page-vard",
  "downloadType": "vard-hygien-guide",
  "consent": true
}
```

**Response:**
```json
{
  "success": true,
  "leadId": 123,
  "message": "Lead captured successfully"
}
```

### POST `/api/tool-results`
Spara resultat från verktyg (volymberäknare, LCC-kalkyl, quiz).

**Request body:**
```json
{
  "leadId": 123,
  "toolType": "volume-calculator",
  "resultData": {
    "washers": 2,
    "dryers": 2,
    "capacity": 60,
    "dailyVolume": 240
  }
}
```

### GET `/api/admin/leads`
Hämta alla leads (kräver autentisering i produktion).

**Query params:**
- `page` (default: 1)
- `limit` (default: 50)

### GET `/api/admin/leads/export`
Exportera alla leads till CSV-fil.

## Databas

Servern använder **SQLite** som databas. Databasen skapas automatiskt vid första start i filen `leads.db`.

### Tabeller:

**leads:**
- id (INTEGER PRIMARY KEY)
- name (TEXT)
- email (TEXT)
- company (TEXT)
- phone (TEXT)
- source (TEXT)
- download_type (TEXT)
- consent (BOOLEAN)
- created_at (DATETIME)
- ip_address (TEXT)
- user_agent (TEXT)

**tool_results:**
- id (INTEGER PRIMARY KEY)
- lead_id (INTEGER, FOREIGN KEY)
- tool_type (TEXT)
- result_data (TEXT/JSON)
- created_at (DATETIME)

## E-post

Servern skickar automatiskt:
1. **Bekräftelse-mail till användaren** när de fyller i formulär
2. **Notifiering till admin** när nytt lead registreras

### Gmail SMTP Setup:

1. Aktivera 2-faktorautentisering på ditt Gmail-konto
2. Generera ett "App-lösenord":
   - Gå till Google Account → Security → 2-Step Verification → App passwords
   - Välj "Mail" och "Other (Custom name)"
   - Kopiera lösenordet till `.env` som `SMTP_PASS`

## CRM Integration

För att integrera med ett CRM-system (t.ex. HubSpot, Pipedrive, Salesforce):

1. Lägg till CRM API-nycklar i `.env`
2. Uppdatera `sendAdminNotification()` funktionen i `server.js`
3. Alternativt: Använd Zapier eller Make.com för att koppla samman

Exempel med webhook:
```javascript
// I server.js, efter lead skapats:
await fetch('https://hooks.zapier.com/your-webhook', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead)
});
```

## Säkerhet

⚠️ **Viktigt för produktion:**

1. **Lägg till autentisering** för admin-endpoints:
   ```javascript
   const basicAuth = require('express-basic-auth');

   app.use('/api/admin', basicAuth({
       users: { 'admin': process.env.ADMIN_PASSWORD }
   }));
   ```

2. **Använd HTTPS** i produktion
3. **Rate limiting** för API-endpoints:
   ```bash
   npm install express-rate-limit
   ```

4. **Validera och sanitera input** (redan implementerat grundläggande)

5. **Backup av databas** regelbundet

## Deployment

### Enkel deployment med PM2:
```bash
npm install -g pm2
pm2 start server.js --name tvattlosningar-backend
pm2 save
pm2 startup
```

### Docker (alternativ):
Skapa `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

Bygg och kör:
```bash
docker build -t tvattlosningar-backend .
docker run -p 3000:3000 --env-file .env tvattlosningar-backend
```

## Felsökning

**Problem: E-post skickas inte**
- Kontrollera SMTP-inställningar i `.env`
- Se till att Gmail App-lösenord är korrekt
- Kolla serverlogs för felmeddelanden

**Problem: Database locked**
- SQLite stödjer inte många samtidiga skrivningar
- För hög trafik: Byt till PostgreSQL eller MySQL

**Problem: CORS-fel från frontend**
- Servern tillåter alla origins (för utveckling)
- I produktion: Konfigurera specifika origins i `cors()`

## Support

För frågor, kontakta: tech@tvattlosningar.se
