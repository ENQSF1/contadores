import "../styles/tailwind.css";
import JsonContext from "@/state/jsonState";
export default function App({ Component, pageProps }) {
  return (
    <JsonContext>
      <Component {...pageProps} />
    </JsonContext>
  );
}
