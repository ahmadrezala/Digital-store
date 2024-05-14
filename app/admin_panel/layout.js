import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

const Adminlayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <main className="w-full flex h-[100vh] overflow-y-scroll">
          <Sidebar />

          <section className="w-[80%]">
            <Header />

            {children}
          </section>
        </main>
      </body>
    </html>
  );
};

export default Adminlayout;
