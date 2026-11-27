
# PR5 Team Report

**Team:** Group 12  
**Members:** Rory Campbell, Ubaydulla Noorullah, Deandre Chandler, Gabriel Elias

## 1. Feature Scope

**Feature:** Recipe media upload and storage

**PR4 feature issue:** https://github.com/AkshayaPathipati/PantryPal/issues/160

**User story:** As a PantryPal user, I want to attach an image to a recipe, so that I can identify recipes visually when browsing saved recipes.

### Acceptance criteria

1. Given a recipe with a valid JPG, JPEG, or PNG image no larger than 5 MB, submitting the form saves the recipe and a media reference, and the saved recipe card displays the image.
2. Given a non-image file, submitting the form rejects the media with a clear error and does not save a broken media reference.
3. Given an image larger than the documented maximum size, submitting the form rejects the media with a clear error and does not save a broken media reference.
4. Given a recipe without an image, submitting the form still saves the text recipe and the recipe card displays the existing no-image state.
5. Given the user double-clicks Submit Recipe while an upload is pending, the application creates no duplicate recipe or duplicate media reference.

### In Scope

- Add one optional image upload control to the existing recipe form.
- Validate JPG, JPEG, and PNG files at no more than 5 MB on the client and server.
- Send the image with the recipe submission using the agreed request format.
- Store or reference the uploaded image and return that reference with the recipe.
- Display the image in the existing recipe card and show a fallback when no image exists.
- Add automated tests for valid, invalid, oversized, no-image, and duplicate-submit cases.

### Out of Scope

- Multiple images per recipe.
- Image cropping, editing, filters, or thumbnails.
- User accounts, permissions, or private image access.
- Image search, external recipe import, or automatic image generation.
- Replacing the existing recipe text fields or redesigning the recipe list.
