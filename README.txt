Anxiyoga static website (HTML/CSS/JS)

What you get
- index.html : matches the supplied screenshot style (hero layout + buttons)
- buy-tickets.html : roll-index style list of regular events (newest at top) with Eventbrite links
- private-events.html : price list + booking request form + Google Calendar embed + payment button
- contact.html : simple contact page (demo form)
- app.js : edit Eventbrite links, private pricing, payment link
- styles.css : site styling
- assets/hero.png : your provided screenshot used as the hero background

How to use locally
1) Open index.html in Chrome (double click).
2) Or run a local server (recommended for some browsers):
   - Windows:   python -m http.server 8000
   - macOS:     python3 -m http.server 8000
   Then open: http://localhost:8000

Configure Eventbrite
- Open app.js
- Edit SITE.events items:
  - title, date, location, description
  - image (can be your own image path in assets/)
  - buyUrl = your Eventbrite event page link

If you want auto-sync from Eventbrite:
- Use Eventbrite API (requires a token) and replace renderEvents() to fetch events.
- I can wire that up once you share your Eventbrite organizer/event URLs.

Configure Google Calendar availability
- In private-events.html, replace:
  src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Australia%2FSydney"
- To get YOUR_CALENDAR_ID:
  Google Calendar -> Settings -> your calendar -> Integrate calendar -> Public URL / Embed code.

Configure payment
- Put your hosted payment link in app.js:
  SITE.paymentLink = "https://buy.stripe.com/..."
- The “Pay deposit” button will use it.

Make the forms actually send email
This build is static. To send form submissions, easiest options:
- Formspree (add an action URL to the <form>)
- Netlify Forms (if hosting on Netlify)
- Or a tiny backend endpoint

