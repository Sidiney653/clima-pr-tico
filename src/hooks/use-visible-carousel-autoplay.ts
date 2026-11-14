import { useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

// Do not advance hidden slides or download their images while the reader is elsewhere.
export function useVisibleCarouselAutoplay(api: CarouselApi) {
  useEffect(() => {
    if (!api) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    let visible = false;
    const stop = () => {
      if (timer !== undefined) clearInterval(timer);
      timer = undefined;
    };
    const update = () => {
      stop();
      if (visible && !document.hidden) timer = setInterval(() => api.scrollNext(), 3000);
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      update();
    });
    observer.observe(api.rootNode());
    document.addEventListener("visibilitychange", update);
    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [api]);
}