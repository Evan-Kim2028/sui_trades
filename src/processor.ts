import { initSwapRawProcessor, initSingleSwapCuratedProcessor, initMultiSwapCuratedProcessor, initOrderCuratedProcessor } from "./swaps/swapEvents.js";

initSwapRawProcessor();
initSingleSwapCuratedProcessor();
initMultiSwapCuratedProcessor();
initOrderCuratedProcessor();
