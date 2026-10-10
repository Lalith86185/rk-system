# RK System — Holiday Block: Final Live Re-Test Script (~5 min)

Why: the holiday fix (admin Settings sets closed dates in config/holidays; the booking form blocks those dates) was deployed on both site copies on 2026-10-09, but the final customer-side live re-test was stopped by the user and is still outstanding — it is the one shipped RK feature never verified end to end. Site health pre-check done by Muse on Sat 2026-10-10 ~12:41 IST: the customer-facing copy at https://rkwaterlevelcontroller.liveblog365.com loads normally (services, prices and booking entry points all present).

Use a throwaway test date — tomorrow, Sun 2026-10-11 — so no real customer date is blocked for more than a few minutes. Do all steps in one sitting; do not leave the test holiday in place.

## Steps
1. **Admin:** sign in to the admin panel, open Settings, add **2026-10-11** as a holiday/closed date. Save.
2. **GitHub Pages copy** (https://lalith86185.github.io/rk-system/): open the booking form, pick any service, choose date **2026-10-11**.
   - PASS = the date is blocked / cannot be submitted with a closed/holiday message.
   - FAIL = the booking goes through — note the exact behaviour and stop; the fix needs another patch.
3. **Liveblog365 copy** (https://rkwaterlevelcontroller.liveblog365.com): repeat step 2.
   - PASS = blocked the same way.
4. **Remove the test holiday** in admin Settings (delete 2026-10-11) and save.
5. **Confirm recovery:** on either copy, start a booking for 2026-10-11 again — the date must now be selectable. You do not need to submit it; if you do submit a test booking, cancel it within the free 1-hour window and delete the test entry from the admin panel afterwards.

## Result to report back (one line each)
- GitHub Pages copy: blocked? yes/no
- Liveblog365 copy: blocked? yes/no
- After removing the holiday: date selectable again? yes/no

Once all three are "yes", the holiday feature is fully verified and this is closed — no further RK verification items remain open except the user's own confirmations (alert/customer email arrival in the radhakrishnanotout@gmail.com inbox, and whether the live Firestore catalog prices — Single Phase ₹3,800 / Three-phase DOL ₹4,500 / Star-delta ₹5,500 / RK Board ₹5,000 — are the intended ones).
