# EliteNow Consulting Website

The official high-performance web presence for **EliteNow Consulting**, specializing in enterprise-scale ServiceNow architecture, ITSM implementation, and strategic platform governance.

## 🚀 Live Preview
The site features a modern, dark-mode "Midnight" aesthetic with high-contrast electric blue accents, designed for executive-level professional appeal.

## 🛠 Features
- **Dynamic UI/UX:** Built with a "Configuration First" design philosophy using modern CSS Grid and Flexbox.
- **Animated Background:** A subtle, high-tech moving geometric pattern for visual depth.
- **Privacy Compliant:** - Integrated **Cookie Consent Banner** that interfaces with Google Tag Manager (`gtag`).
  - Automated consent defaults to 'denied' until user interaction (GDPR/CCPA friendly).
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop viewing.
- **Interactive Modals:** Custom-built HubSpot contact form integration for lead generation.
- **Legal Compliance Footer:** Includes "Open in New Window" and "Direct Download" capabilities for:
  - Terms of Use
  - Privacy Policy
  - Cookie Policy

## 📂 Project Structure
```text
├── index.html              # Main website code
├── EliteNowC_logowhite.png # Company Logo
├── terms-of-use.pdf        # Policy document (required for footer link)
├── privacy-policy.pdf      # Policy document (required for footer link)
└── cookie-policy.pdf       # Policy document (required for footer link)
```

## 🔧 Setup & Customization

### 1. Analytics & Tracking
The site is pre-configured with Google Tag Manager ID `G-73Z8303FF2`. To use your own, update the script tag in the `<head>` section:
```javascript
gtag('config', 'YOUR-ID-HERE');
```

### 2. Contact Form
The contact modal is powered by **HubSpot**. To link your own form, replace the `portalId` and `formId` in the `hbspt.forms.create` script near the bottom of the HTML file.

### 3. Policy Documents
To ensure the "Download" feature works in the footer:
1. Save your legal documents as PDFs.
2. Name them exactly: `terms-of-use.pdf`, `privacy-policy.pdf`, and `cookie-policy.pdf`.
3. Upload them to the root directory of this repository.

## ✒️ Typography
This project utilizes Google Fonts:
- **Syne:** For bold, high-impact headings.
- **IBM Plex Mono:** For technical, "code-inspired" labels and buttons.
- **Crimson Pro:** For sophisticated, highly readable body serif text.

## 📄 License
© 2026 EliteNow Consulting. All Rights Reserved.

---

**Would you like me to help you draft the text for those policy PDFs as well?**
