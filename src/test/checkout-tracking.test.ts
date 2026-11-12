import { describe, expect, it } from "vitest";
import { withCheckoutUtms } from "@/lib/checkout-tracking";

describe("Wiven checkout tracking", () => {
  const basic = "https://checkout.wiven.com.br/checkout/cmwcvuz8n23x401q2do1f5s45?offer=EBD6LD7";
  const full = "https://checkout.wiven.com.br/checkout/cmwcw3kic247401pv6blb2533?offer=Y7WJELC";

  it("preserves the Básico checkout and offer", () => {
    expect(withCheckoutUtms(basic, "")).toBe(basic);
  });
  it("preserves the Completo checkout and offer", () => {
    expect(withCheckoutUtms(full, "")).toBe(full);
  });
  it("forwards all page UTM parameters to both checkouts without replacing their offers", () => {
    for (const checkout of [basic, full]) {
      const url = new URL(withCheckoutUtms(checkout, "?utm_source=facebook&utm_medium=paid&utm_campaign=split&utm_content=video&utm_term=ar+condicionado&utm_id=123&offer=wrong"));
      expect(url.searchParams.get("offer")).toBe(new URL(checkout).searchParams.get("offer"));
      expect(url.searchParams.get("utm_source")).toBe("facebook");
      expect(url.searchParams.get("utm_medium")).toBe("paid");
      expect(url.searchParams.get("utm_campaign")).toBe("split");
      expect(url.searchParams.get("utm_content")).toBe("video");
      expect(url.searchParams.get("utm_term")).toBe("ar condicionado");
      expect(url.searchParams.get("utm_id")).toBe("123");
    }
  });
});