import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { Toaster } from "./ui/toaster";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
        <Toaster />
      </div>
      <Footer />
    </>
  );
}
