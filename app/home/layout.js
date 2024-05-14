import Footer from "@/components/home/footer";

import Header from "@/components/home/header";

const Adminlayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white">
        <main className="w-full">
          <Header />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Adminlayout;
