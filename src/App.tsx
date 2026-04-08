import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Index = lazy(() => import("./pages/Index"));
const Training = lazy(() => import("./pages/Training"));
const History = lazy(() => import("./pages/History"));
const Donations = lazy(() => import("./pages/Donations"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Testimonies = lazy(() => import("./pages/Testimonies"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Serve = lazy(() => import("./pages/Serve"));
const Ministry = lazy(() => import("./pages/Ministry"));

const PageSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 rounded-full border-4 border-sunset/30 border-t-sunset animate-spin" />
  </div>
);

const App = () => (
  <ErrorBoundary>
    <TooltipProvider>
      <BrowserRouter>
        <Suspense fallback={<PageSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/training" element={<Training />} />
            <Route path="/history" element={<History />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </ErrorBoundary>
);

export default App;
