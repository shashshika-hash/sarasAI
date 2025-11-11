import JourneyCard from "./components/JourneyCard";
import JourneyPath from "./components/JourneyPath";
import { journeyCardData } from "./lib/constant/journeyData";

function App() {
  return (
    <div className="min-h-screen  relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-1 pointer-events-none"
        style={{
          backgroundImage: "url(/assets/ai-journey-bg.svg)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10">
        <div className="max-w-fit mx-auto px-8 py-6">
          <header className="max-w-fit pb-6 shadow-sm">
            <img src="/assets/logo.svg" alt="logo" className={`bg-white`} />
          </header>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">Step 04</h2>
              <span className="text-gray-500 text-xl">/ 05</span>
            </div>
            <div className="w-64 h-1 bg-red-500 rounded-full" />
          </div>

          <div className="flex justify-center">
            <div className="flex gap-20">
              <div className="flex-1 space-y-28 pt-12">
                {journeyCardData?.map((block, index) =>
                  index % 2 == 0 ? (
                    <JourneyCard key={block.id} block={block} side="left" />
                  ) : (
                    <div key={`spacer-${block.id}`} className="h-0" />
                  )
                )}
              </div>

              <div className="flex-shrink-0">
                <JourneyPath totalBlocks={journeyCardData?.length} />
              </div>

              <div className="flex-1 space-y-28 pt-12">
                {journeyCardData?.map((block, index) =>
                  index % 2 !== 0 ? (
                    <JourneyCard key={block.id} block={block} side="right" />
                  ) : (
                    <div key={`spacer-${block.id}`} className="h-0" />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
