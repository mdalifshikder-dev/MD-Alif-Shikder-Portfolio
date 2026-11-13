# MD Alif Shikder — Portfolio Website

An updated version of the existing portfolio website. The original page structure, identity card, social links, sections, Bootstrap layout, reveal effects, navigation behavior and footer interactions have been retained while the visual theme and requested content were refined.

## Project files

- `index.html` — page content, navigation, project cards and contact form.
- `style.css` — white and dark visual theme, layout, responsive rules and animations.
- `script.js` — mobile navigation, scroll state, reveal animations and footer year.
- `assets/images/profile.jpg` — your profile photo.
- `assets/images/projects/` — the four project preview images.

## 1. Add your profile photo

1. Choose a clear, square portrait photo.
2. Rename it to `profile.jpg`.
3. Place it in `assets/images/`.
4. The complete path must be `assets/images/profile.jpg`.

The profile image is displayed as a circle using `object-fit: cover`. If the file is missing, a Bangla image-placement hint appears instead.

## 2. Add the four project images

Place your own screenshots in `assets/images/projects/` using these exact file names:

- `restaurant.jpg` — Restaurant Website
- `business.jpg` — Business Website
- `ecommerce.jpg` — E-commerce Website
- `landing-page.jpg` — Landing Page

The complete paths are:

- `assets/images/projects/restaurant.jpg`
- `assets/images/projects/business.jpg`
- `assets/images/projects/ecommerce.jpg`
- `assets/images/projects/landing-page.jpg`

Use a separate screenshot for each project. Do not use the profile photo as a project thumbnail. If an image is missing, its project card displays the Bangla image-placement hint and the rest of the card remains usable.

## 3. Add GitHub repository and Live Demo URLs

Open `index.html` and find the relevant project card.

Each card contains two clearly marked placeholders:

- `GitHub repository URL: #` — replace the `href="#"` in that card's **GitHub Code** link with your actual GitHub repository URL.
- `Live Demo URL: #` — replace the `href="#"` in that card's **Live Demo** link with your actual deployed website URL.

Do not leave `#` in place when you publish a real project link. No project URLs have been pre-filled.

## 4. Activate the contact form

The contact form uses FormSubmit and sends submissions to:

`mdalifshikder22032008@gmail.com`

**Required first-time activation:** Submit the form once. FormSubmit will send a confirmation/activation email to the address above. Open that email and click its confirmation link. The form will not deliver messages until this first activation is completed. Check the Spam/Junk folder if the email is not in the inbox.

After activation, send a test message to verify delivery. FormSubmit is a third-party service, so its service terms and privacy policy apply.

## 5. Run and publish the website

1. Extract the ZIP archive.
2. Open the extracted project folder in Visual Studio Code.
3. Open `index.html` with the VS Code Live Server extension, or open it directly in a browser.
4. Bootstrap, Bootstrap Icons and Google Fonts are loaded from CDNs, so an internet connection is needed for those external resources.
5. Upload the complete project folder to your static hosting provider when ready.

## Customization

- Edit visible text and project details in `index.html`.
- Change colors, spacing and responsive styling in `style.css`.
- Update the existing interactions in `script.js`.
- Respect the existing folder structure so image paths continue to work.
# MD-Alif-Shikder-Portfolio
