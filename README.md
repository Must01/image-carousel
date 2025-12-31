# React Image Carousel

A lightweight, responsive, and fully typed Image Carousel component built with **React**, **TypeScript**, and **Tailwind CSS**.
![20251231-1855-19 1727532](https://github.com/user-attachments/assets/5a40e4f9-3171-4c81-9353-7278e9d5faac)

## 🌟 Features

- **Auto-fetching:** Fetches images directly from a provided API URL.
- **Responsive Design:** Full-screen layout with a centered carousel and a sticky footer.
- **Navigation:** Left/Right arrow controls and clickable dot indicators.
- **Loading State:** Built-in spinner while images are being fetched.
- **Circular Navigation:** Infinite looping (going "next" on the last image returns to the first).

## 🛠️ Prerequisites

To use this component, ensure your project has the following dependencies installed:

1.  **Tailwind CSS** (configured in your project)
2.  **React Icons**

```bash
npm install react-icons
# or
yarn add react-icons

```

## 🚀 Usage

1. Copy the `ImageCarousel.tsx` file into your components directory (e.g., `src/components/`).
2. Import and use the component in your page or app file.

### Basic Example

This component is designed to work with APIs that accept `page` and `limit` query parameters (like [Lorem Picsum](https://picsum.photos/)).

```tsx
import ImageCarousel from "./components/ImageCarousel";

function App() {
  return (
    <div className="App">
      <ImageCarousel
        url="[https://picsum.photos/v2/list](https://picsum.photos/v2/list)"
        limit={10}
        page={1}
      />
    </div>
  );
}
export default App;
```

## ⚙️ Props

| Prop    | Type     | Default      | Description                                       |
| ------- | -------- | ------------ | ------------------------------------------------- |
| `url`   | `string` | **Required** | The API endpoint to fetch images from.            |
| `limit` | `number` | `5`          | The number of images to fetch and display.        |
| `page`  | `number` | `1`          | The page number (if the API supports pagination). |

### API Response Requirement

The component expects the `url` to return an **array of objects** where each object has a `download_url` property for the image source.

**Example expected JSON format:**

```json
[
  {
    "id": "0",
    "author": "Alejandro Escamilla",
    "width": 5616,
    "height": 3744,
    "url": "[https://unsplash.com/](https://unsplash.com/)...",
    "download_url": "[https://picsum.photos/](https://picsum.photos/)..."
  }
]
```

## 🎨 Styling

This component uses **Tailwind CSS** classes.

- **Layout:** Uses Flexbox (`flex-col`, `items-center`) to center the content and push the footer to the bottom.
- **Animations:** Uses `animate-spin` for the loading indicator.
- **Icons:** Arrows and dots are styled with hover effects and transitions.

## 👤 Author

**Mustapha Bouddahr**

- Website: [mustaphabouddahr.netlify.app](https://mustaphabouddahr.netlify.app)

_Made with 💖_
