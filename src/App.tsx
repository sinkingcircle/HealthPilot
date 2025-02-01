import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { HealthPilot } from './components/HealthPilot';
import { Footer } from './components/ui/Footer';

// Lazy load heavy components
const SplineSceneBasic = lazy(() => import('./components/code.demo').then(mod => ({ default: mod.SplineSceneBasic })));
const Subscriptions = lazy(() => import('./components/Subscriptions').then(mod => ({ default: mod.Subscriptions })));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-[400px] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100">
    <div className="loader"></div>
  </div>
);

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "HealthPilot",
              "applicationCategory": "HealthApplication",
              "description": "AI-powered healthcare companion providing 24/7 assistance, personalized health insights, and symptom tracking",
              "offers": {
                "@type": "Offer",
                "price": "9.99",
                "priceCurrency": "USD"
              },
              "featureList": [
                "24/7 AI Health Assistant",
                "Personalized Health Insights",
                "Symptom Tracking",
                "Health Records Storage",
                "Emergency Contact System"
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white">
        <main>
          <HealthPilot />
          <Suspense fallback={<LoadingFallback />}>
            <section className="p-8">
              <SplineSceneBasic />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingFallback />}>
            <Subscriptions />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;