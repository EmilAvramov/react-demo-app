## Description

### The app consists of 2 pages, a few components and some helper partials. Two contexts maintain the app's state - one for the cart and one for the profile. Some external libraries were used for messages, form handling, date fields, etc.

## Technical Choices

### Opted to use some external libraries (such as toast messages, yup for validation, react hook form, MUI) instead of writing from scratch since I'm familiar with them and to save time.

### Decided to use contexts since Redux would be overkill for such a small app. Could have merged both contexts into one, but decided to keep them separate for better readability.

## Unimplemented Features

### I think I implemented all the mandatory features, although the visual presentation, some error handling and the functionality of adjusting items from the cart leaves room for improvement. There's a bug with adding/removing items from the cart, which I couldn't get to. I couldn't get to the responsive design, a11y and test part.

### With more time, I would likely implement SCSS to cut down on the redundant style snippets, add better UX when taking actions (e.g. adding/removing from cart could provide feedback) and possible do more with the profile information. Some of the code can be written better to provide better reusability and to be more extensible.
