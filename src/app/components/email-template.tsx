import * as React from "react";

interface DistributorshipEmailTemplateProps {
  firstName: string;
  companyName: string;
}

export const DistributorshipEmailTemplate: React.FC<
  Readonly<DistributorshipEmailTemplateProps>
> = ({ firstName, companyName }) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Thank you for applying to become a distributor for{" "}
      <strong>{companyName}</strong>.
    </p>
    <p>
      We appreciate your interest and will review your application soon. You can
      expect to hear from us with further details.
    </p>
  </div>
);
