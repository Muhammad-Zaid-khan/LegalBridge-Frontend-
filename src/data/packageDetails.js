export const packageDetails = {
  "rent-agreement-draft": {
    purpose:
      "A preliminary way to organize a proposed residential or commercial tenancy before advocate review.",
    fields: [
      "Landlord and tenant names",
      "Property address and city",
      "Rent, deposit and duration",
      "Proposed start date and any agreed terms",
    ],
    note: "An advocate can review the proposed terms and advise on local requirements.",
  },
  "khula-notice-draft": {
    purpose:
      "A preliminary brief to organize information for discussion with a family-law advocate.",
    fields: [
      "Names and addresses of the parties",
      "Nikah date and available marriage records",
      "Haq Mehr details",
      "Relevant family circumstances",
    ],
    note: "Family matters are sensitive. Do not submit personal details in this demo.",
  },
  "legal-notice-draft": {
    purpose:
      "An outline for presenting the parties, background and a proposed request for advocate review.",
    fields: [
      "Sender and recipient details",
      "Subject of the notice",
      "A factual timeline",
      "The action or response requested",
    ],
    note: "An advocate should review the facts, wording and any applicable deadlines.",
  },
  "general-agreement-draft": {
    purpose:
      "A starting point for organizing key terms of a proposed agreement between parties.",
    fields: [
      "Names of the parties",
      "Purpose and scope",
      "Payment or consideration",
      "Dates and proposed obligations",
    ],
    note: "Appropriate clauses depend on the transaction and need individual review.",
  },
  "affidavit-undertaking-draft": {
    purpose:
      "A preliminary outline for an affidavit or undertaking to discuss with an advocate.",
    fields: [
      "Deponent information",
      "Purpose of the statement",
      "Relevant factual declarations",
      "Supporting records",
    ],
    note: "An advocate should check the wording, execution and attestation requirements.",
  },
  "employment-contract-draft": {
    purpose:
      "A starting point for discussing proposed terms between an employer and employee.",
    fields: [
      "Employer and employee details",
      "Job title and workplace",
      "Salary and joining date",
      "Duties, notice and other proposed terms",
    ],
    note: "Employment terms and applicable requirements need tailored professional review.",
  },
};
export const packageSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
