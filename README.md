# HN Scents — Vercel + Firebase setup (Roman Urdu)

Files: `index.html` (website) · `admin.html` (admin panel) · `firebase-config.js` · `firestore.rules` · `vercel.json`

## 1) Firebase (5 min)
1. https://console.firebase.google.com → **Add project**.
2. **Build → Firestore Database → Create database** (production mode).
3. **Build → Authentication → Get started → Email/Password → Enable**.
4. Authentication → **Users → Add user**: email `miralnaz672@gmail.com` + apna password.
   (Password code me kabhi nahi likha jata — Firebase usay secure store karta hai.)
5. Us user ki **User UID** copy karein.
6. `firestore.rules` kholein, `PASTE_ADMIN_UID` ki jagah wo UID paste karein → Firestore → **Rules** tab me poori file paste karke **Publish**.
7. Project settings (gear) → **Your apps → Web (</>)** → app register → jo `firebaseConfig` mile use `firebase-config.js` me paste karein.

## 2) GitHub
Is poore folder ko ek naye GitHub repo me upload/push karein.

## 3) Vercel
1. https://vercel.com → **Add New → Project** → apna repo import → **Deploy** (koi build setting nahi chahiye).
2. Deploy ke baad Firebase → Authentication → Settings → **Authorized domains** me apna `xxxx.vercel.app` add karein.

## Links
- Website: `https://xxxx.vercel.app`
- Admin panel: `https://xxxx.vercel.app/admin`

## Admin security
- Sirf sahi email + password se login; galat login par lock (5 tries), Firebase ka apna rate-limit bhi.
- Data sirf aapke UID ko write/read ki ijazat hai (Firestore rules), koi aur account login kare to bhi data nahi dekh sakta.
- Login ke baad **Account & Security** tab: email, password, name change (current password zaroori).
- 30 min inactivity ya tab band karne par auto logout.
- Pehle login ke baad password strong kar lein (kam az kam 12 characters).
