import { describe, expect, it } from "vitest";

import { aboutCopy } from "@/components/corporate/business-data";

// The About Us wording is supplied by the company; these exact strings are the source of truth.
describe("About Us copy", () => {
  it("opens with the company definition", () => {
    expect(aboutCopy.intro).toBe(
      "YIREHSHAM GROUP LTD is a diversified business and investment group incorporated in Kenya, bringing together expertise and opportunities across technology, business consulting, international trade, investments, agribusiness and general supplies.",
    );
  });

  it("states the strategic approach", () => {
    expect(aboutCopy.approach).toBe(
      "We are guided by a strategic approach to business development, innovation and value creation. Our focus is on identifying emerging opportunities, developing practical solutions, facilitating strategic partnerships and supporting enterprises through the delivery of products, services and innovative business solutions.",
    );
  });

  it("states how the group creates value", () => {
    expect(aboutCopy.bridge).toBe(
      "Through our diverse business interests, we aim to bridge the gap between ideas and implementation, connect markets, strengthen commercial relationships and contribute to sustainable economic growth. We recognise the importance of adaptability, operational excellence and forward-thinking strategies in an increasingly interconnected business environment.",
    );
  });

  it("states the commitment behind the approach", () => {
    expect(aboutCopy.valuesLine).toBe(
      "Our approach is built on integrity, professionalism, collaboration and a commitment to delivering meaningful value to the businesses, institutions, partners and communities we engage with.",
    );
  });

  it("lists the four guiding values", () => {
    expect(aboutCopy.values).toEqual(["Integrity", "Professionalism", "Collaboration", "Commitment to Value"]);
  });

  it("closes with the international outlook and the tagline", () => {
    expect(aboutCopy.outlook).toBe(
      "With an international outlook and a strong interest in opportunities across Africa and beyond, YIREHSHAM GROUP LTD is positioned to engage across multiple sectors, foster strategic relationships and pursue commercially sustainable opportunities.",
    );
    expect(aboutCopy.tagline).toBe("Building Businesses. Connecting Opportunities. Creating Impact.");
  });
});
