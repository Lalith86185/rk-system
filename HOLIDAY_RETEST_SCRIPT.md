# RK System — Holiday Block: Final Live Re-Test Script (~5 min) — UPDATED 2026-10-11

Why: the holiday fix (admin Settings sets closed dates in config/holidays; the booking form blocks those dates) was deployed on 2026-10-09, but the final customer-side live re-test was stopped by the user and is still outstanding — it is the one shipped RK feature never verified end to end.

Changes in this update (2026-10-11):
- REMOVED the GitHub Pages step. That copy was taken offline on 2026-10-10 at Lalith's instruction (Pages site deleted, https://lalith86185.github.io/rk-system/ verified HTTP 404; repo kept only as code backup). There is now ONE live copy to test: https://rkwaterlevelcontroller.liveblog365.com
- Test date is no longer hard-coded to 2026-10-11 (that date was "tomorrow" when the script was written on Oct 10). Use tomorrow's date at the time you run the test, and remove it in the same sitting.

## Steps (one sitting, ~5 min — do not leave the test holiday in place)
1. **Admin:** sign in to the admin panel, open Settings, add **tomorrow's date** as a holiday/closed date. Save.
2. **Live site only** (https://rkwaterlevelcontroller.liveblog365.com): open the booking form, pick any service, choose that same date.
   - PASS = the date is blocked / cannot be submitted, with a closed/holiday message.
   - FAIL = the booking goes through — note the exact behaviour and stop; the fix needs another patch.
3. **Remove the test holiday** in admin Settings and save.
4. **Confirm recovery:** start a booking for that date again — it must now be selectable. You do not need to submit it; if you do submit a test booking, cancel it within the free 1-hour window and delete the test entry from the admin panel afterwards.

## Result to report back (one line each)
- Liveblog365 copy: blocked? yes/no
- After removing the holiday: date selectable again? yes/no

Once both are "yes", the holiday feature is fully verified and closed. Remaining RK confirmations are only Lalith's own: (a) alert/customer email arrival in the radhakrishnanotout@gmail.com inbox, and (b) whether the live Firestore catalog prices — Single Phase ₹3,800 / Three-phase DOL ₹4,500 / Star-delta ₹5,500 / RK Board ₹5,000, with no RK Deluxe in the dropdown — are the intended ones.
