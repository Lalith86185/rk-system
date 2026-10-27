# RK System — FAQ / How-it-works wording fix (draft, NOT deployed)
Prepared 2026-10-11 (Sun) after a live-site health check. Source of truth: ~/workspace/rk-system-site/index.html
Status: local draft only. Nothing changed in index.html and nothing uploaded to ProFreeHost. Deploy only on Lalith's approval.

## Why
The live homepage still describes the OLD booking/review flow in 3 places, contradicting features shipped and verified live on 2026-10-09:
- Reviews no longer require a booking ID (name + stars + comment, admin-approved before showing).
- Bookings are saved by the form itself (Firebase) and reach the admin by Gmail alert — there is no "send the booking on WhatsApp" step, and the green WhatsApp button was removed on 2026-10-09.

A customer reading the FAQ today could think their booking is incomplete without a WhatsApp message, or that they cannot review without a booking ID.

## Exact replacements (English)

1. index.html line 340 — "How booking works", step 4 "You rate us"
OLD: "After the visit you get a link to rate the service with your booking ID."
NEW: "After the visit, rate the service on the Reviews page — just your name, stars and a comment. No booking ID is needed."

2. index.html line 365 — FAQ "How do I book?"
OLD: "Tap Book now, choose a new system or a service, fill in your details and share your location. Then send the booking on WhatsApp so it reaches us right away."
NEW: "Tap Book now, choose a new system or a service, fill in your details and share your location, then tap Confirm booking. Your booking is saved right away and you will see your booking ID on screen — we call you to confirm the visit."

3. index.html line 368 — FAQ "How do I rate your service?"
OLD: "After a completed job you receive a link and your booking ID. Open the Reviews page, enter the ID and choose your stars."
NEW: "Open the Reviews page, add your name, choose your stars and write a short comment — no booking ID is needed. Your review appears on the site after we have checked it."

## Kannada dictionary note (important)
The KN translation table in index.html (line ~709) is keyed by the exact English strings. Changing the 3 English strings above without updating their keys would drop those 3 strings to English in Kannada mode. On deploy, update the 3 keys and use these translations:
1. "ಭೇಟಿಯ ನಂತರ, ವಿಮರ್ಶೆಗಳ ಪುಟದಲ್ಲಿ ಸೇವೆಗೆ ರೇಟಿಂಗ್ ನೀಡಿ — ನಿಮ್ಮ ಹೆಸರು, ಸ್ಟಾರ್‌ಗಳು ಮತ್ತು ಕಾಮೆಂಟ್ ಮಾತ್ರ ಸಾಕು. ಬುಕಿಂಗ್ ID ಬೇಕಿಲ್ಲ."
2. "'ಈಗಲೇ ಬುಕ್ ಮಾಡಿ' ಒತ್ತಿ, ಹೊಸ ಸಿಸ್ಟಮ್ ಅಥವಾ ಸೇವೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ, ನಿಮ್ಮ ವಿವರಗಳನ್ನು ತುಂಬಿ, ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಹಂಚಿಕೊಂಡು 'ಬುಕಿಂಗ್ ದೃಢಪಡಿಸಿ' ಒತ್ತಿ. ನಿಮ್ಮ ಬುಕಿಂಗ್ ತಕ್ಷಣ ಉಳಿಯುತ್ತದೆ ಮತ್ತು ಪರದೆಯ ಮೇಲೆ ನಿಮ್ಮ ಬುಕಿಂಗ್ ID ಕಾಣಿಸುತ್ತದೆ — ಭೇಟಿಯನ್ನು ದೃಢಪಡಿಸಲು ನಾವು ನಿಮಗೆ ಕರೆ ಮಾಡುತ್ತೇವೆ."
3. "ವಿಮರ್ಶೆಗಳ ಪುಟ ತೆರೆದು, ನಿಮ್ಮ ಹೆಸರು ಸೇರಿಸಿ, ಸ್ಟಾರ್‌ಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಚಿಕ್ಕ ಕಾಮೆಂಟ್ ಬರೆಯಿರಿ — ಬುಕಿಂಗ್ ID ಬೇಕಿಲ್ಲ. ನಾವು ಪರಿಶೀಲಿಸಿದ ನಂತರ ನಿಮ್ಮ ವಿಮರ್ಶೆ ಸೈಟ್‌ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ."

## Deploy checklist (on approval)
- [ ] Apply the 3 English replacements + 3 KN key/translation updates in index.html
- [ ] Upload the single file to ProFreeHost only (GitHub Pages copy is offline; repo stays code backup)
- [ ] Live-verify: homepage FAQ in EN, switch to ಕನ್ನಡ and re-check the same 3 strings, confirm booking form still loads
- [ ] Note: no Firestore, rules, prices or catalog changes in this fix

## Sunday health check that found this (2026-10-11, ~10:45 IST)
Live site https://rkwaterlevelcontroller.liveblog365.com loaded normally: areas-we-serve section present with all 10 areas (Yelahanka, Yelahanka New Town, Attur, Jakkur, Hebbal, Thanisandra, Sahakara Nagar, Amruthahalli, Vidyaranyapura, Kogilu), RK Deluxe ₹1,800 installed, visit ₹300, repair ₹250, AMC ₹1,200/yr, address Madhugirihalli, Yelahanka, Bengaluru 560089, phone 72046 38853, Product JSON-LD ₹1,800 InStock. No outage or price drift found.

## Extension added 2026-10-11 (afternoon, after the bill-at-order-time ship)

4. NEW FAQ entry — insert after "How do I book?" in index.html (FAQ section, ~line 365). Rationale: the FAQ currently has exactly 4 entries and none mentions the bill; the owner himself spent ~35 min on 2026-10-11 (08:35–09:10 UTC chat) hunting for where to download it, moving it from Completed-only to order-time. Customers will hit the same wall.
EN summary: "How do I get my bill?"
EN body: "Right after you book, tap Download bill on the confirmation screen. Later, open Track booking, enter the mobile number you booked with, and tap Download bill on your booking card — it is there for every booking except cancelled ones. The bill opens ready to print or save as a PDF."
KN keys to add to the translation table:
- "How do I get my bill?" → "ನನ್ನ ಬಿಲ್ ಅನ್ನು ನಾನು ಹೇಗೆ ಪಡೆಯುವುದು?"
- Body → "ಬುಕ್ ಮಾಡಿದ ತಕ್ಷಣ, ದೃಢೀಕರಣ ಪರದೆಯಲ್ಲಿ 'ಬಿಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' ಒತ್ತಿ. ನಂತರ, 'ಬುಕಿಂಗ್ ಸ್ಥಿತಿ' ತೆರೆದು, ಬುಕ್ ಮಾಡಿದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ, ನಿಮ್ಮ ಬುಕಿಂಗ್ ಕಾರ್ಡ್‌ನಲ್ಲಿ 'ಬಿಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ' ಒತ್ತಿ — ರದ್ದಾದ ಬುಕಿಂಗ್‌ಗಳನ್ನು ಹೊರತುಪಡಿಸಿ ಎಲ್ಲಾ ಬುಕಿಂಗ್‌ಗಳಿಗೂ ಇದು ಇರುತ್ತದೆ. ಬಿಲ್ ಮುದ್ರಿಸಲು ಅಥವಾ PDF ಆಗಿ ಉಳಿಸಲು ಸಿದ್ಧವಾಗಿ ತೆರೆಯುತ್ತದೆ."
Deploy note: bundle this 4th item with items 1–3 above in the same upload; verify the new entry in EN and ಕನ್ನಡ after deploy. Behaviour described matches commit 009acc6 (bill at order time, all non-cancelled bookings), verified live 2026-10-11 08:59 UTC.

## Extension added 2026-10-11 (late afternoon, after the warranty ship)

5. NEW FAQ entry — insert after "How do I get my bill?" (item 4 above), in the FAQ section (~line 365). Rationale: the FAQ currently has exactly 4 entries and none mentions warranty, yet warranty was the owner's own longest hunt on 2026-10-11 — he asked for it on the homepage, the bill and the dashboard (09:25–10:09 UTC chat), could not find it on the dashboard, and had to be shown the exact spot. Customers buying a new system will ask the same question: is there a warranty, how long, and from when?
EN summary: "Do new systems come with a warranty?"
EN body: "Yes — every new system includes a 2-year warranty, on products only. It runs from your booking date to the day before the 2 years complete — for example, a system booked for 21 Nov 2026 is covered until 20 Nov 2028. Your exact start and end dates are printed on your bill. Services such as visits, repairs and AMC do not include a warranty."
KN keys to add to the translation table:
- "Do new systems come with a warranty?" → "ಹೊಸ ಸಿಸ್ಟಮ್‌ಗಳಿಗೆ ವಾರಂಟಿ ಇದೆಯೇ?"
- Body → "ಹೌದು — ಪ್ರತಿ ಹೊಸ ಸಿಸ್ಟಮ್‌ಗೂ 2 ವರ್ಷಗಳ ವಾರಂಟಿ ಇದೆ, ಇದು ಉತ್ಪನ್ನಗಳಿಗೆ ಮಾತ್ರ. ಇದು ನಿಮ್ಮ ಬುಕಿಂಗ್ ದಿನಾಂಕದಿಂದ ಪ್ರಾರಂಭವಾಗಿ 2 ವರ್ಷಗಳು ಪೂರ್ಣಗೊಳ್ಳುವ ಹಿಂದಿನ ದಿನದವರೆಗೆ ಇರುತ್ತದೆ — ಉದಾಹರಣೆಗೆ, 21 ನವೆಂಬರ್ 2026ಕ್ಕೆ ಬುಕ್ ಮಾಡಿದ ಸಿಸ್ಟಮ್ 20 ನವೆಂಬರ್ 2028ರವರೆಗೆ ಒಳಗೊಂಡಿರುತ್ತದೆ. ನಿಮ್ಮ ನಿಖರವಾದ ಪ್ರಾರಂಭ ಮತ್ತು ಅಂತಿಮ ದಿನಾಂಕಗಳು ನಿಮ್ಮ ಬಿಲ್‌ನಲ್ಲಿ ಮುದ್ರಿತವಾಗಿರುತ್ತವೆ. ಭೇಟಿಗಳು, ರಿಪೇರಿಗಳು ಮತ್ತು AMCಯಂತಹ ಸೇವೆಗಳಿಗೆ ವಾರಂಟಿ ಇಲ್ಲ."
Deploy note: bundle this 5th item with items 1–4 in the same single upload; verify the new entry in EN and ಕನ್ನಡ after deploy. Behaviour described matches commits b9fb2c4 and ad7c955 (warranty range = booking date to booking date + 2 years − 1 day, kind=system only, shown on the customer bill and as a bold navy line in the admin bookings table, plus a pill on homepage product cards), verified live 2026-10-11 09:29 and 09:54 UTC. The bill/dashboard wording uses the booking's service date as the start date — the FAQ body says "booking date" to match what the customer sees on their bill.
