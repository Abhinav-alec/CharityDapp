import React from "react";
import { Link } from "react-router-dom";

// Using lucide-react for icons. You can install it with `npm install lucide-react`
// Or replace these with your own SVG icons.
import {
  HandHeart,
  Target,
  Users,
  Gem,
  ShieldCheck,
  Scaling,
} from "lucide-react";

// --- Main Component: About Us Page ---
export default function App() {
  // By adding `pt-20` here, we create space at the top for a fixed navbar (approx. 80px tall).
  // This prevents the header section from being rendered underneath the navigation.
  return (
    <div className="bg-gray-50 font-sans antialiased pt-15">
      {/* ===== Hero Section ===== */}
      <header
        className="relative flex flex-col items-center justify-center text-center text-white px-6 py-32 md:py-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542810634-71277d952b98?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Rebuilding Trust in Charity
          </h1>
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md">
            We leverage the power of blockchain to bring unparalleled
            transparency and efficiency to charitable giving.
          </p>
        </div>
      </header>

      <main>
        {/* ===== Our Mission & Vision Section ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The world of charity has a trust problem. Donors often wonder,
                  "Where is my money *really* going?" High overhead costs, slow
                  fund transfers, and a lack of transparency have eroded
                  confidence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to restore that faith. We built this platform
                  to ensure that every donation is tracked, every transaction is
                  visible, and every contribution makes a direct, verifiable
                  impact.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-80 h-80">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-teal-300 rounded-lg transform rotate-[-6deg]"></div>
                  <img
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
                    alt="Hands holding a heart made of pebbles"
                    className="relative w-full h-full object-cover rounded-lg shadow-2xl"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400/e2e8f0/4a5568?text=Impact";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== How It Works Section ===== */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 text-center max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Transparency in Action
            </h2>
            <p className="text-gray-600 mb-16 max-w-3xl mx-auto">
              Our dApp (Decentralized Application) operates on a public
              blockchain, creating an immutable and transparent ledger for every
              donation. Here’s how it works:
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="bg-green-500 text-white rounded-full p-5 mb-4 shadow-lg">
                  <HandHeart size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  1. You Donate
                </h3>
                <p className="text-gray-600">
                  Choose a cause you believe in and make a donation using
                  cryptocurrency. The transaction is instantly recorded on the
                  blockchain.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="bg-green-500 text-white rounded-full p-5 mb-4 shadow-lg">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  2. Funds are Secured
                </h3>
                <p className="text-gray-600">
                  Funds are held in a secure smart contract, which automatically
                  releases them to the charity once predefined milestones are
                  met and verified.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="bg-green-500 text-white rounded-full p-5 mb-4 shadow-lg">
                  <Target size={40} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  3. Track the Impact
                </h3>
                <p className="text-gray-600">
                  Follow your donation's journey in real-time on our public
                  dashboard. See exactly when funds are used and view proof of
                  impact from the charity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Our Values Section ===== */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="p-6">
                <Gem className="mx-auto text-green-600 mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600">
                  Every action is public. Every donation is traceable. No
                  exceptions.
                </p>
              </div>
              <div className="p-6">
                <Scaling className="mx-auto text-green-600 mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We are committed to the highest ethical standards in our
                  operations and partnerships.
                </p>
              </div>
              <div className="p-6">
                <Target className="mx-auto text-green-600 mb-4" size={48} />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Impact
                </h3>
                <p className="text-gray-600">
                  Our goal is to maximize the impact of every dollar by
                  minimizing overhead and connecting donors directly to causes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Call to Action Section ===== */}
        <section className="bg-green-700 text-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Movement for Transparent Giving
            </h2>
            <p className="text-green-200 max-w-2xl mx-auto mb-8">
              Whether you're a donor, a charity, or a developer, there's a place
              for you in our community. Let's build a better future together.
            </p>
            <Link
              to="/" // Link to your donation section/page
              className="inline-block bg-white text-green-700 px-8 py-3
              rounded-full font-bold text-lg transition duration-300 ease-in-out
              transform hover:scale-105 hover:bg-green-50 shadow-lg"
            >
              {" "}
              Make a Donation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
