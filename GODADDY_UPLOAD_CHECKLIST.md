# GoDaddy Upload Checklist

## Before Upload
- Confirm the final domain is pointing to the correct GoDaddy hosting account.
- Confirm `info@premonition.health` is the correct inbox for website submissions.
- Confirm GoDaddy hosting supports PHP mail for `contact-handler.php`.
- Review [privacy-policy.html](C:/Users/matt/OneDrive/Documents/GitHub/Murphy%20Wellness%20website/privacy-policy.html) with legal/compliance before public launch.
- Replace or supplement any portal/forms links if the clinic has direct downloadable form URLs.

## Files To Upload
- Upload all root files:
  - `index.html`
  - `primary-care.html`
  - `membership.html`
  - `pricing.html`
  - `meet-jeni.html`
  - `contact.html`
  - `faq.html`
  - `patient-portal.html`
  - `privacy-policy.html`
  - `thank-you.html`
  - `contact-handler.php`
  - `robots.txt`
  - `sitemap.xml`
  - `site.webmanifest`
- Upload the full `assets/` folder, including:
  - `assets/css/styles.css`
  - `assets/js/site.js`
  - `assets/img/logo.jpeg`
  - `assets/img/jeni-murphy.jpg`

## Recommended Upload Location
- Put all files in GoDaddy’s site root, commonly `public_html/`.
- Keep the `assets/` folder intact so relative file paths continue to work.

## After Upload
- Open the homepage and confirm styling loads.
- Test header navigation on desktop and mobile.
- Test the Kareo portal button from [patient-portal.html](C:/Users/matt/OneDrive/Documents/GitHub/Murphy%20Wellness%20website/patient-portal.html).
- Test click-to-call and click-to-text on a phone.
- Submit the contact form and confirm the message arrives at `info@premonition.health`.
- Confirm [thank-you.html](C:/Users/matt/OneDrive/Documents/GitHub/Murphy%20Wellness%20website/thank-you.html) appears after form submission.
- If the form does not send, check whether GoDaddy PHP mail is enabled. If not, switch the form to SMTP or a hosted forms provider.

## SEO / Search Console
- Submit `https://murphywellness.org/sitemap.xml` to Google Search Console.
- Verify that `robots.txt` is reachable at `https://murphywellness.org/robots.txt`.
- Check page titles and meta descriptions in the live source after upload.

## Final QA
- Review on iPhone and Android if possible.
- Confirm text does not touch card edges.
- Check that the mobile header shows logo only.
- Check that desktop header does not feel crowded.
- Verify the privacy page, FAQ schema, and local business schema are present in page source.
