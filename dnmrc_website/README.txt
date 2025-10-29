DNMRC Website Package
=====================

Files included:
- index.html
- courses.html
- eligibility.html
- benefits.html
- register.html
- css/style.css
- js/email.js
- assets/poster.jpg

Poster image: assets/poster.jpg (copied from the poster you provided)

--- EMAIL (EmailJS) SETUP ---
This site uses EmailJS to forward form submissions to your email address (dnmrc0502@gmail.com).
Follow these steps:

1. Create a free EmailJS account at https://www.emailjs.com/
2. Add an email service (e.g., Gmail) in EmailJS dashboard and note the SERVICE ID.
3. Create an EmailJS email template and note the TEMPLATE ID. Use template variables:
   - name, email, phone, course, status, message
4. In the register.html file, replace 'YOUR_EMAILJS_USER_ID' in the emailjs.init call with your EmailJS user ID.
5. In js/email.js replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with the values from EmailJS.
6. Upload the whole folder to a static host (Netlify, GitHub Pages, Vercel) or serve locally via a simple HTTP server.

--- QUICK HOSTING ---
- GitHub Pages: push repository and enable GitHub Pages.
- Netlify: drag & drop the folder to Netlify drop area.
- Local test: run 'python -m http.server' in the folder and open http://localhost:8000

If you'd like, I can also:
- Pre-fill EmailJS template example text for you.
- Configure a direct mailto fallback if EmailJS is not desired.

