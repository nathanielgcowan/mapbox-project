// pages/index.js or app/page.tsx
import dynamic from "next/dynamic";

// Dynamically import the compoent and disable SSR
const DynamicMapComponent = dynamic(
  () => import("../components/MapComponent"),
  {
    loading: () => <p>Loading Map...</p>, // Optional loading state
    ssr: false, // This is crucial to disable SSR
  }
);

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <DynamicMapComponent />
    </div>
  );
}
