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
